var gulp            = require('gulp');
var sass            = require('gulp-sass');
var autoprefixer    = require('gulp-autoprefixer');
var minifycss       = require('gulp-clean-css');
var plumber         = require('gulp-plumber');
var sourcemaps      = require('gulp-sourcemaps');


var concat          = require('gulp-concat');
var inject          = require('gulp-inject');

var stylesheet          = "./source/sass/main.scss";
var mainscss            = "./source/sass/main/**.scss";
var allscssvendors      = "./source/sass/vendors/*.css";
var distcss             = "./dist/css";

var sources = gulp.src([
   'source/sass/main/**.scss'
]);

var target = gulp.src('source/sass/stylesheet.scss');

gulp.task('sass', function () {

   target.pipe(inject(sources, {
       starttag: '// stylesheet:{{ext}}',
       endtag: '// endinject',
       transform: function (filepath) {
           var path = filepath;
           path = path.replace('\/source/sass\/', '');
           path = path.replace('_', '');
           path = path.replace('.scss', '');

           return '@import "' + path + '";';
       }
   }))
       .pipe(plumber({
           errorHandler: function (error) {
               console.log('>>>>', error);
               this.emit('end');
           }
       }))
       .pipe(sass())
       .pipe(autoprefixer('last 2 versions'))
       .pipe(sass({errLogToConsole: true}))
       .pipe(gulp.dest(distcss))
       .pipe(minifycss({compatibility: 'ie9'}))
       .pipe(gulp.dest(distcss))
});


gulp.task('sass-watch', ['sass'], function() {
//    gulp.watch(sources, ['sass', 'webserver:reload']);

});
