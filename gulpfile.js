var gulp = require('gulp');
var browserSync = require('browser-sync');
var sourcemaps = require("gulp-sourcemaps");
var browserify = require('browserify');
var babel = require('gulp-babel');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

// Files paths
var paths = {
	client: 'src/client/',
	styleFolder: 'src/client/styles/**/*.scss',
	scriptFolder: ['src/client/scripts/dataSets.js', 'src/client/scripts/config/*.js', 
	'src/client/scripts/helpers/*.js', 'src/client/scripts/components/pageComponents/*.js',
	'src/client/scripts/components/layoutComponents/*.js',
	'src/client/scripts/app.js']
}

// watch files for changes and reload
gulp.task('serve', ['scripts', 'sass'], function() {
  browserSync({
    server: {
      baseDir: ''
    }
  });

  gulp.watch(['*.html', paths.styleFolder], browserSync.reload);
  gulp.watch([paths.client + 'scripts/**/*.js'], ['scripts']);
  gulp.watch([paths.styleFolder], ['sass']);
});

// concat js files
gulp.task('scripts', function() {
	return gulp
		.src(paths.scriptFolder)
		.pipe(sourcemaps.init())
		.pipe(babel())
		.pipe(concat('app.js'))
		.pipe(sourcemaps.write("./"))
		.pipe(gulp.dest('dist/'));
});

// sass compilation
gulp.task('sass', function () {
  return gulp.src(paths.client + 'styles/main.scss')
    	.pipe(sass().on('error', sass.logError))
    	.pipe(gulp.dest('dist/'));
});