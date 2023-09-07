use std::ops::Add;

mod list_parser;
mod tags;
mod tests;
mod utils;

/// Parser struct
pub struct Parser {
    pos: usize,
    input: String,
}

/// Create a new `Parser` instance and
/// parses the g   wawaive **markdown** input
pub fn parse(source: String) -> String {
    Parser {
        pos: 0,
        input: source,
    }
    .parse_lines()
}

impl Parser {
    pub fn new(md: String) -> Self {
        Parser { pos: 0, input: md }
    }

    fn parse_lines(&mut self) -> String {
        let mut result = String::new();

        loop {
            self.consume_whitespace(false);
            if self.end_of_line() {
                break;
            }

            result.push_str(&self.parse_line());
        }

        result
    }

    /// Parses text line by line
    fn parse_line(&mut self) -> String {
        match self.next_char() {
            '\n' => {
                self.consume_char();
                if self.next_char() == '\n' {
                    self.consume_char();
                    return "\n<br/>\n".to_string();
                }

                String::from(" ")
            }
            '#' => self.parse_title(),
            '-' => {
                // check if the next char is whitespace and if it is
                // parses the items at list
                if char::is_whitespace(self.input[self.pos + 1..].chars().next().unwrap()) {
                    self.parse_list()
                } else {
                    let mut text = String::new();
                    // Else treat it as a normal text
                    let parsed = self.parse_text_line();

                    return text;
                }
            }
            '*' => {
                if char::is_whitespace(self.input[self.pos + 1..].chars().next().unwrap()) {
                    self.parse_list()
                } else {
                    let stars = self.consume_while(|c| c == '*');
                    // **leads**  to bold letter
                    if stars.len() == 2 {
                        let embolden = self.consume_while(|c| c != '*');
                        if self.next_char() == '*' {
                            let stars = self.consume_while(|c| c == '*');

                            // bolding ends
                            if stars.len() == 2 {
                                let html =
                                    utils::create_html_element(String::from("strong"), embolden);

                                return html;
                            } else {
                                self.parse_text_line()
                            }
                        } else {
                            self.parse_text_line()
                        }
                    } else {
                        self.consume_whitespace(false);
                        let text = self.parse_text_line();

                        text
                    }
                }
            }
            _ => {
                if self.check_if_ordered_list_marker() {
                    return self.parse_ordered_list();
                }
                return self.parse_md_line();
            }
        }
    }

    /// Peek ahead while `cond` is true and returns the
    /// accumulated string
    fn peek_ahead_while<F>(&self, mut cond: F) -> String
    where
        F: FnMut(&char) -> bool,
    {
        let copy = self.input[self.pos..].chars();

        let c = copy.peekable().take_while(|c| {
            return cond(c);
        });
        c.collect::<String>()
    }

    ///Parses `#`, `##` and `###` and returns relevant `H` tags
    fn parse_title(&mut self) -> String {
        let pound = self.consume_while(|c| c == '#');
        self.consume_whitespace(true);
        let text = self.parse_md_line();

        utils::create_html_element(format!("h{}", pound.len()), text)
    }

    ///Parses all text in a single line
    fn parse_text_line(&mut self) -> String {
        self.consume_while(|c| utils::is_text_char(c))
    }

    fn parse_alpha_numeric(&mut self, include_whitespace: bool) -> String {
        self.consume_while(|c| {
            let mut is = utils::is_text_char(c);
            if include_whitespace {
                is = is || c == ' ';
            }
            is
        })
    }

    /// Function parses any kind of text within a line,
    /// should be called for the first char of line
    /// wouldn't work if first char is `-` or `*`
    /// bold, italic etc until the end of line
    /// and returns HTML content
    pub fn parse_md_line(&mut self) -> String {
        let mut result = String::new();

        while (self.pos < self.input.len())
            && (self.next_char() != '\n' || utils::is_whitespace(self.next_char()))
        {
            let normal_text = self.parse_alpha_numeric(true);

            result.push_str(&normal_text);

            match self.next_char() {
                '\n' => {
                    break;
                }
                '*' => {
                    let f_stars = self.peek_ahead_while(|c| *c == '*');

                    // len == 2, means to be bold
                    if f_stars.len() == 2 {
                        self.consume_while(|c| c == '*');

                        let bolden = self.parse_alpha_numeric(true);
                        if !bolden.chars().last().unwrap_or(' ').is_whitespace() {
                            let b_stars = self.peek_ahead_while(|c| *c == '*');

                            if b_stars.len() == 2 {
                                self.consume_while(|c| c == '*');
                                let html = utils::create_html_element("strong", &bolden);

                                result.push_str(&html);
                                continue;
                            } else {
                                result.push_str(&f_stars);
                                self.consume_while(|c| c == '*');
                                result.push_str(&b_stars);
                                result.push_str(&bolden);
                            }
                        }
                        // closed
                        else {
                            result.push_str(&f_stars);
                            result.push_str(&bolden);
                            continue;
                        }
                    } else {
                        let stars = self.consume_while(|c| c == '*');
                        result.push_str(&stars);
                        continue;
                    }
                }
                '`' => {
                    let tick = self.consume_char();

                    let normal_text = self.parse_alpha_numeric(true);

                    if self.next_char() == '`' {
                        self.consume_char();

                        let html = utils::create_html_element("code", &normal_text);

                        result.push_str(&html);
                        continue;
                    }

                    result.push(tick);
                    result.push_str(&normal_text);
                    continue;
                }
                _ => {
                    let text = self.consume_while(|c| c != '\n');
                    result.push_str(&text);
                    continue;
                }
            }
        }

        result
    }

    /// Checks if all of the content is consumed
    fn end_of_line(&self) -> bool {
        self.pos >= self.input.len()
    }

    /// Gets the next character in text,
    /// Does not consume
    /// Returns whitespace if not char
    fn next_char(&self) -> char {
        if let Some(char) = self.input[self.pos..].chars().next() {
            return char;
        }
        ' '
    }

    /// Consume a single character from `self.input`
    /// and increments the `self.pos` counter
    fn consume_char(&mut self) -> char {
        let mut iter = self.input[self.pos..].char_indices();
        let (_, cur_char) = iter.next().unwrap();
        let (next_pos, _) = iter.next().unwrap_or((1, ' '));
        self.pos += next_pos;
        cur_char
    }

    fn consume_while<F>(&mut self, cond: F) -> String
    where
        F: Fn(char) -> bool,
    {
        let mut result = String::new();
        while !self.end_of_line() && cond(self.next_char()) {
            result.push(self.consume_char());
        }

        result
    }

    /// Consumes consequent whitespaces in input
    /// `include_newline` checks if whitespace must include newline or not
    fn consume_whitespace(&mut self, include_newline: bool) {
        let mut cond: Box<dyn Fn(char) -> bool> = Box::new(|c| char::is_whitespace(c));
        if !include_newline {
            cond = Box::new(|c| utils::is_whitespace(c));
        }

        self.consume_while(cond);
    }
}
