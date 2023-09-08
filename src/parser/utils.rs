pub fn create_html_element(tag_name: impl Into<String>, text: impl Into<String>) -> String {
    let tag_name = tag_name.into();
    let text = text.into();
    format!("<{}>{}</{}>", tag_name, text, tag_name)
}

pub fn is_whitespace(c: char) -> bool {
    matches!(c, '\t' | '\x0C' | '\r' | ' ')
}

/// Check if the character if only an alpha numeric char
///
/// not any special character related to markdown
///
/// which can be found within a line, not at the starting
///
/// like `[]`, `()`, `*` etc
pub fn is_text_char(c: char) -> bool {
    let special_chars: [char; 10] = ['#', '*', '(', ')', '[', ']', '>', '\n', ' ', '`'];

    !special_chars.contains(&c)
}
