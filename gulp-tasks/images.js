var gulp = require('gulp');

var allimages    = "./source/images/**";
var distimages   = "./dist/images";


/****
 * Task: Image
 * @desc Copy all images
 ****/
gulp.task('images', function () {
    return gulp.src(allimages)
        .pipe(gulp.dest(distimages));
});

gulp.task('images-watch', ['images'], function() {
    gulp.watch(allimages, ['images']);
});
