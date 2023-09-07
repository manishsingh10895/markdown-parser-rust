use crate::parser::{tags, tags::TagType, utils, Parser};
use regex::Regex;

impl Parser {
    /// Checks if next set of character represents a ordered list element
    /// eg: `1.` `22.`
    /// This function doesn't consume the `input` and doesn't move the `pos`
    pub fn check_if_ordered_list_marker(&self) -> bool {
        let reg = Regex::new(r"([0-9])+\.").unwrap();
        let peeked = self.peek_ahead_while(|c| !char::is_whitespace(*c));

        return reg.is_match(&peeked);
    }

    /// Parses an ordered list and return list of elements under `ol` tag
    /// TODO : NEEDS fixing
    pub fn parse_ordered_list(&mut self) -> String {
        let mut items: Vec<String> = vec![];

        loop {
            self.consume_whitespace(false);

            // check if starting character are for an ordered list only
            if !self.check_if_ordered_list_marker() {
                break;
            }

            // consume while there are only numbers
            self.consume_while(|c| !char::is_whitespace(c) && char::is_numeric(c));

            // check if next char is .
            // to match like 11.
            if self.next_char() != '.' {
                break;
            } else {
                self.consume_char();
            }

            self.consume_whitespace(false);

            let text = self.parse_md_line();
            items.push(text);

            // if newline char,
            // check if there are more than one new line
            // if more than one, list if finished
            if self.next_char() == '\n' {
                self.consume_char();

                if self.next_char() == '\n' {
                    break;
                }
            }
        }

        self.wrap_elements("ol", items)
    }

    /// Parses an unordered list in markdown content
    pub fn parse_list(&mut self) -> String {
        let mut items: Vec<String> = vec![];
        let mut i = 0;

        // Loop while first character of every line is '-'
        'outer: loop {
            i = i + 1; //For debugging

            //Consumes the `-` or `*` literal
            self.consume_char();
            self.consume_whitespace(true);

            //Get all the remaining text in line
            let text = self.parse_md_line();

            items.push(text);

            // Debugging
            //println!("I -> {}", i);
            //println!("POS -> {}", self.pos);
            //println!(
            //    "character -> {}",
            //    self.input[self.pos..].chars().next().unwrap()
            //);

            let mut newlines = 0;

            while self.input[self.pos..].starts_with('\n') {
                newlines += 1;
                self.pos += 1;
                self.consume_whitespace(false);
                if newlines > 1 {
                    break 'outer;
                }
            }

            self.consume_while(|c| utils::is_whitespace(c));

            if !self.input[self.pos..].starts_with('-') {
                break;
            }
        }

        self.wrap_elements("ul", items)
    }

    /// Wrap a list of items in a html tag
    /// eg: `ol`, `div`, `ul`
    fn wrap_elements(&self, tag: &str, items: Vec<String>) -> String {
        let mut html = String::from(tags::make_tag(tag, TagType::Opening));

        for item in items {
            let s = utils::create_html_element("li".to_string(), item);

            html.push_str(&s);
        }

        html.push_str(tags::make_tag(tag, TagType::Closing).as_str());

        html
    }
}

#[cfg(test)]
mod tests {
    use crate::parser::parse;

    // #[ignore]
    #[test]
    fn test_parse_ordered_list() {
        let md = r#"
            # Numbered list

            1. Number One
            2. Number Two
            3. Number Three


            What a number is the
        "#;

        let html = parse(md.to_string());
        println!("ORDERED LIST");
        println!("{}", html);
        assert_eq!("", "");
    }
}
