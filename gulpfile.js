const browserify = require('browserify')
const gulp = require("gulp");
const inline = require("gulp-inline-source");
const minify = require("gulp-minify");
const source = require("vinyl-source-stream");

function runBrowserify() {
  return browserify("js/deps.js")
    .bundle()
    .pipe(source("deps.js"))
    .pipe(gulp.dest("dist"));
}

function pack() {
  return gulp.src("dist/deps.js")
    .pipe(minify())
    .pipe(gulp.dest("dist"));
}

function inlineJS() {
  return gulp.src("html/index.html")
    .pipe(inline())
    .pipe(gulp.dest("dist"));
}

exports.default = gulp.series([runBrowserify, pack, inlineJS]);
