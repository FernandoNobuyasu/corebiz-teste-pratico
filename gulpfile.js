var { watch, src, dest, parallel, series } = require("gulp"),
    stylus = require("gulp-stylus"),
    rename = require("gulp-rename"),
    concat = require("gulp-concat")

function css() {
    return src("src/**/*.styl")
        .pipe(
            stylus({
                compress: true,
                linenos: false,
            })
        )
        .pipe(rename("styles.css"))
        .pipe(concat("styles.css"))
        .pipe(dest("public/assets/css/"))
}

exports.css = css

exports.init = series(css)
exports.default = function () {
    watch("src/**/*.styl", series(css))
    // watch("src/**/*.js", series(js))
}
