#[cfg(test)]
mod parser_tests {
    use crate::parser::{parse, Parser};

    #[ignore]
    #[test]
    fn it_should_parse_code() {
        let md = "`wonder` if `I ` could have been `some `thing";
        let parsed = parse(md.to_string());

        println!("{parsed}");
        let html = "<code>wonder</code> if <code>I </code> could have been <code>some </code>thing";
        assert_eq!(parsed, html)
    }

    #[ignore]
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
    fn test_parse_md_line() {
        let md = "Markdown, has a wonder *may, be I, and **someone, **else**";
        let mut p = Parser {
            pos: 0,
            input: md.to_string(),
        };

        let html = p.parse_md_line();

        let result = "Markdown, has a wonder *may, be I, and **someone, <strong>else</strong>";

        println!("{html}");

        assert_eq!(html, result);
    }

    #[ignore]
    #[test]
    fn test_parse_list() {
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

        let html = parse(md.to_string());

        println!("{}", html);

        // assert_eq!(
        //     html,
        //     String::from(
        //         r#"<h1>burndown</h1><ul><li>drop_in_place()</li><li>shop in place</li><li>markdown</li></ul><ul><li>list 25</li><li>list two markdown</li></ul>what is a <strong>damn</strong> shit<strong>not</strong>is a damn"#
        //     )
        // );
    }
}
