mod parser;
use parser::parse;
fn main() {
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

    println!("Hello Workd");
}


fn test() {
    let md = r#"
            # Numbered list

            1. Number One
            2. Number Two
            3. Number Three


            What a number is the
        "#;
    let mut pos = 58;
    let mut iter = md[pos..].char_indices();
    let (_, cur_char) = iter.next().unwrap();
    let (next_pos, _) = iter.next().unwrap_or((1, ' '));
    pos += next_pos;

    println!("{}", md[pos..].to_string());
    let charts = md[pos..].chars().peekable().take_while(|c| {
        println!("C is the {}", c);
        return char::is_numeric(*c);
    });

    let s = charts.collect::<String>();

    println!("STRING {}", s);
}
