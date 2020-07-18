# Minimal frontend for LessPass

An HTML-based, self-contained, isolated, minimal dependency 
[LessPass](https://lesspass.com/) frontend.

## Purpose

If you want to have a dead simple LessPass frontend that works everywhere
and offline. No dependencies but the official LessPass JS code, and just 
some form controlling code for convenience.

![Frontend](https://raw.githubusercontent.com/MarcelHB/minimal-lesspass/master/dist/screenshot.png)

## Setup, Use

1. Copy `dist/index.html` to where needed, open with a browser.
1. Reproducible build:
    1. Obtain Node.js v10+ and NPM.
    1. Run `$ npm install` here once.
    1. Run `$ node node_modules/.bin/gulp` here.
    1. Observe no change to `dist/index.html` but its timestamp.

Open the HTML document in any non-archaic browser. Fill out the data and
meta data field, make sure the master password's checksum matches the
icon classes and colors like for other LessPass frontends.

For presumed security reasons, iOS Safari imposes conditions under which
JS may paste values into the clipboard. So please generate the 
password first, then click the button for moving into the clipboard buffer.

## License, Disclaimer

Subject to GNU GPL v3. Please consult the `LICENSE` file for the whole
terms. This program is not affiliated to lesspass.com other than
bundling its work.
