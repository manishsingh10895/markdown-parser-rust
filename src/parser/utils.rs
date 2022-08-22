pub fn create_html_element(tag_name: String, text: String) -> String {
    format!("<{}>{}</{}>", tag_name, text, tag_name)
}

pub fn is_newline(c: char) -> bool {
    c == '\n'
}
