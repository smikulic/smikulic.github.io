var gulp = require('gulp');
var browserSync = require('browser-sync');

// watch files for changes and reload
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: ''
    }
  });

  gulp.watch(['*.html', 'styles/**/*.css'], browserSync.reload);
});