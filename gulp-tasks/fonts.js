var gulp        = require('gulp');

var allfonts    = "./source/fonts/**";
var distfonts   = "./dist/fonts";

/****
 * Task: Font
 * @desc Copy all fonts
 ****/
gulp.task('fonts', function () {
    var ext = "+(eot|ttf|otf|cff|afm|lwfn|ffil|fon|pfm|pfb|woff|woff2|svg|std|pro|xsf)"
    return gulp.src(allfonts + '/*.' + ext)
        .pipe(gulp.dest(distfonts));
});

gulp.task('fonts-watch', ['fonts'], function() {
    gulp.watch(distfonts, ['fonts']);
});
