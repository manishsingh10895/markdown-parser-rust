#[cfg(test)]
mod parser_tests {
    use crate::parser::{parse, Parser, MD_WRAPPER};

    #[test]
    fn it_should_parse_code() {
        let md = "`wonder` if `I ` could have been `some `thing";
        let parsed = parse(md.to_string());

        println!("{parsed}");
        let html = format!("{MD_WRAPPER} <code>wonder</code> if <code>I </code> could have been <code>some </code>thing \n </div>");
        assert_eq!(parsed, html)
    }

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

    #[test]
    fn test_parse_code_block() {
        let md = r#"
        Markdonw Wonder
        ```
        Let me go
        To the place 
        ```
        "#;

        let html = parse(md.to_string());

        println!("{html}");
    }

    #[test]
    fn test_parse_md_line() {
        let md = "Markdown, has a wonder *may, be I, and **someone, **else**";
        let mut p = Parser {
            pos: 0,
            input: md.to_string(),
        };

        let html = p.parse_md_line(None);

        let result = "Markdown, has a wonder *may, be I, and **someone, <strong>else</strong>";

        println!("{html}");

        assert_eq!(html, result);
    }

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

    #[test]
    fn test_parse_nested_italics() {
        let md = "What in the _`markdown`_ is this shit";
        let html = parse(md.to_string());

        println!("{html}");

        assert_eq!(
            html,
            format!(
                "{MD_WRAPPER} What in the <em><code>markdown</code></em> is this shit \n </div>"
            )
        );
    }

    #[test]
    fn test_link() {
        let md = "Where was this [movie](https://www.imdb.com/title/tt3960412) forever";

        let html = parse(md.to_string());

        assert_eq!(
            html,
            format!(
                "{MD_WRAPPER} Where was this <a href=\"https://www.imdb.com/title/tt3960412\">movie</a> forever \n </div>"
            )
        );
    }
}
