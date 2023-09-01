mod list_parser;
mod tags;
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
    fn parse_lines(&mut self) -> String {
        let mut result = String::new();

        loop {
            self.consume_whitespace(true);
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
            '#' => self.parse_title(),
            '-' => {
                // check if the next char is whitespace and if it is
                // parses the items at list
                if char::is_whitespace(self.input[self.pos + 1..].chars().next().unwrap()) {
                    self.parse_list()
                } else {
                    // Else treat it as a normal text
                    self.parse_text()
                }
            }
            '*' => {
                if char::is_whitespace(self.input[self.pos + 1..].chars().next().unwrap()) {
                    self.parse_list()
                } else {
                    let stars = self.consume_while(|c| c == '*');
                    println!("NUM Stars {}", stars.len());
                    // **leads**  to bold letter
                    if stars.len() == 2 {
                        let embolden = self.consume_while(|c| c != '*');
                        if self.next_char() == '*' {
                            self.consume_char();
                            self.consume_whitespace(true);
                            println!("Embolden -> {}", embolden);

                            let html = utils::create_html_element(String::from("strong"), embolden);

                            println!("html -> {html}");
                            return html;
                        } else {
                            self.parse_text()
                        }
                    } else {
                        self.consume_whitespace(true);
                        let text = self.parse_text();

                        text
                    }
                }
            }
            _ => {
                if self.check_if_ordered_list_marker() {
                    return self.parse_ordered_list();
                }
                return self.parse_text();
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
        let text = self.parse_text();

        utils::create_html_element(format!("h{}", pound.len()), text)
    }

    ///Parses all text in a single line
    fn parse_text(&mut self) -> String {
        self.consume_while(|c| !utils::is_newline(c))
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
            cond = Box::new(|c| char::is_whitespace(c) && c != '\n');
        }

        self.consume_while(cond);
    }
}

#[cfg(test)]
mod tests {
    use super::parse;

    #[test]
    fn test_bolding() {
        let md = r#"
    # Bolding
    
    **When** i was young
    **I** would listen to the **radio**
"#;

        let html = parse(md.to_string());

        println!("{}", html);
    }

    #[ignore]
    #[test]
    fn test_parse_list() {
        let md = r#"
            # burndown
            - drop_in_place()
            - shop in place
            - asjdajhdasjd
            - adkajsdk    
                
            - list 25
            - list two markdown

            what is a **damn** shit

            **not** is a damn
        "#;

        let html = parse(md.to_string());

        println!("{}", html);

        assert_eq!(
            html,
            String::from(
                r#"<h1>burndown</h1><ul><li>drop_in_place(to_drop)</li><li>shop in place</li><li>markdown</li></ul><ul><li>list 25</li><li>list two markdown</li></ul>what is a damnnot is a damn"#
            )
        );
    }
}
