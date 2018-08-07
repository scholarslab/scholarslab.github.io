// gulpfile.js

// require modules:
var gulp   = require('gulp'),
	clean  = require('gulp-clean'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify-es').default,
	insert = require('gulp-insert');

var js_format = () => {
	return gulp.src('./assets/js/_partials/*.js')
		.pipe(concat('main.js'))
		.pipe(uglify({ keep_fnames: true }))
		.pipe(insert.wrap('(function() {', '\n})();'))
		.pipe(gulp.dest('./assets/js'));
}

gulp.task('js_watch', () => {
	return gulp.watch('./assets/js/_partials/*.js', js_format);
});

gulp.task('js_clean', () => {
	return gulp.src('./assets/js/main.js', { allowEmpty: true })
		.pipe(clean());
});

gulp.task('js', gulp.series('js_clean', 'js_watch'));