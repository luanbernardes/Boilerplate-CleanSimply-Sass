var gulp        = require('gulp');
var plumber     = require('gulp-plumber');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var iife        = require("gulp-iife");
var sourcemaps  = require('gulp-sourcemaps');

var javascriptsMain       = "source/js/main/*.js";
var javascriptsComponents = "source/js/components/*.js";
var javascriptsvendors    = [
    "source/js/vendors/jquery-1.12.4.min.js",
    "source/js/vendors/bootstrap.min.js"
];

var distjs              = "dist/js";
var distjsComponents    = "dist/js/components";


gulp.task('scripts-main', function(){

    return gulp.src(javascriptsMain)
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }}))
        .pipe(sourcemaps.init())

        .pipe(concat('main.js'))
        .pipe(iife({
            useStrict: false,
            params: ["window","document"]}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(distjs))
});

gulp.task('scripts-components', function(){

    return gulp.src(javascriptsComponents)
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }}))
        .pipe(gulp.dest(distjsComponents))
});


gulp.task('scripts-vendors', function(){

    return gulp.src(javascriptsvendors)
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }}))
        .pipe(concat('vendors.js'))
        .pipe(gulp.dest(distjs))
});


gulp.task('scripts-watch', ['scripts-main'], function() {
    gulp.watch(javascriptsMain, ['scripts-main', 'webserver:reload']);
    gulp.watch(javascriptsComponents, ['scripts-components', 'webserver:reload']);
    gulp.watch(javascriptsvendors, ['scripts-vendors', 'webserver:reload']);
});
