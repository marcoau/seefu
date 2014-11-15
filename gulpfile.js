var gulp = require('gulp');

var concat = require('gulp-concat');
var livereload = require('gulp-livereload');
var minifyCSS = require('gulp-minify-css');
var nodemon = require('gulp-nodemon');
var sass = require('gulp-sass');

// SERVE TASKS
gulp.task('server', function() {
  nodemon({
    script: 'server.js',
    ext: 'js html css',
  })
  .on('start', livereload.listen)
  .on('restart', function() {
    // delay to wait for server reload
    setTimeout(livereload.changed, 1000);
  });
});
gulp.task('sass', function() {
  gulp.src('client/app.scss')
    .pipe(sass({ errLogToConsole: true }))
    .pipe(concat('app.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./client'))
});
gulp.task('watch', function() {
  gulp.watch(['client/**/*', '!client/app.css'], ['sass']);
});

gulp.task('serve', ['server', 'sass', 'watch']);
