use crate::parser::Parser;

mod parser;
fn main() {
    let md = "Markdown, has a wonder *may, be I, and **someone, **else**";

    let md = r#"
            # burndown
            - drop_in_place()
            - shop in place
            - markdown
                
            - list 25
            - list two markdown

            what is a **damn** shit

            **not** is a damn
        "#;
    let mut p = Parser::new(String::from(md));
    let html = parser::parse(md.to_string());

    println!("HTML -> {html}");
}
