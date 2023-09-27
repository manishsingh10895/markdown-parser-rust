use std::{fs, io::Read, path::PathBuf};

use clap::Parser;

mod parser;

#[derive(Parser, Debug)]
#[command(author, version, about, long_about = None)]
struct Args {
    #[arg(short, long)]
    file: PathBuf,
}

fn main() {
    let args = Args::parse();

    let path = args.file;

    if let Ok(mut file) = fs::File::open(&path) {
        let mut data = String::new();
        if let Ok(_) = file.read_to_string(&mut data) {
            let parsed = parser::parse(data);

            println!("{parsed}");
        } else {
            eprintln!("ERROR: Unable to read file contents");
        }
    } else {
        eprintln!("ERROR: cannot open file {path:?}");
    }
}
