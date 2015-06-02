var gulp        = require('gulp'),
    browserify  = require('browserify'),
    source      = require('vinyl-source-stream');

gulp.task('build', function() {
  browserify('./app/presentationApp.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./show/js/'));
});

gulp.task('watch', function () {
  gulp.watch(['./app/**/*.js'], ['build']);
});
