var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');

var bw = watchify(browserify('src/js/app.js').transform(
    babelify.configure({
        presets: ["es2015"]
    }
)));

gulp.task('default', function() {
    return bw.bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./dist'));;
});