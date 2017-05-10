var gulp = require('gulp');

var requireDir = require('require-dir');
requireDir('./gulp-tasks');

gulp.task('default', [
    'webserver',
    'images',
    'images-watch',
    'sass',
    'sass-watch',
    'scripts-main',
    'scripts-components',
    'scripts-vendors',
    'scripts-watch',
    'libs',
    'libs-watch',
    'fonts',
    'fonts-watch',
    'htmls',
    'htmls-watch'

]);