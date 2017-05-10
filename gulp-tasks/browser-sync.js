var gulp = require('gulp');

// Dependencies: webserver
var browserSync = require('browser-sync');


/****
 * Task: Webserver
 * @desc Open a webserver -> CORS allowed.
 ****/
gulp.task('webserver', function () {
    var server = {
        server: {
            baseDir: "./dist/",
            middleware: function (req, res, next) {
                res.setHeader('Access-Control-Allow-Origin', '*');
                next();
            }
        },
        open: false,
        reloadDelay: 400
    };

    browserSync(server);
});

/****
 * Task: Reload Webserver
 * @desc Reload a Webserver
 ****/
gulp.task('webserver:reload', function () {
    browserSync.reload();
});
