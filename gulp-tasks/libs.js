var gulp        = require('gulp');
var plumber     = require('gulp-plumber');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');

var libs        = "./source/libs/**";
var distlibs    = "./dist/libs";

gulp.task('libs', function(){

    return gulp.src(libs)
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }}))
        .pipe(gulp.dest(distlibs))
});

gulp.task('libs-watch', ['libs'], function() {
    gulp.watch(libs, ['libs', 'webserver:reload']);

});
