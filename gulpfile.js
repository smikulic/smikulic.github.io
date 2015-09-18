var gulp = require('gulp');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');

// watch files for changes and reload
gulp.task('serve', ['scripts'], function() {
  browserSync({
    server: {
      baseDir: ''
    }
  });

  gulp.watch(['*.html', 'styles/*.css'], browserSync.reload);
  gulp.watch(['scripts/*.js'], ['scripts']);
});

// concat js files
gulp.task('scripts', function() {
	return gulp
			.src(['scripts/dataSets.js', 'scripts/components.js', 'scripts/app.js'])
			.pipe(concat('app.js'))
			.pipe(gulp.dest('dist/'));
});