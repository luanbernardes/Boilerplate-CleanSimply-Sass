var gulp = require('gulp');

var allhtml    = "./source/*.html";
var disthtml   = "./dist";


/****
 * Task: Image
 * @desc Copy all images
 ****/
gulp.task('htmls', function () {
    return gulp.src(allhtml)
        .pipe(gulp.dest(disthtml));
});

gulp.task('htmls-watch', ['htmls'], function() {
    gulp.watch(allhtml, ['htmls']);
});
