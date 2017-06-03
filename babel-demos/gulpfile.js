var gulp = require('gulp')
var babel = require('gulp-babel')
gulp.task('es2015',function(){
	return gulp.src('src/**/*.js')
		.pipe(babel())
		.pipe(gulp.dest('dist'))
})