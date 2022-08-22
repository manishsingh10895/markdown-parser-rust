/// TagType enum signifying if a `tag` string is
/// `Opening` eg: <ul>
/// `Closing` eg: </ul>
/// `SelfClosing` eg: <input />
pub enum TagType {
    Opening,
    Closing,
    #[allow(dead_code)]
    SelfClosing,
}

/// Generates a html tag based on `tag_type`
pub fn make_tag(name: &str, tag_type: TagType) -> String {
    match tag_type {
        TagType::Opening => {
            format!("<{}>", name)
        }
        TagType::Closing => {
            format!("</{}>", name)
        }
        TagType::SelfClosing => {
            format!("<{} />", name)
        }
    }
}
