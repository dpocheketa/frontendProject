var gulp = require("gulp");
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');

gulp.task('default', ['cssConcat', 'jsUglify', 'watch']);

gulp.task('cssConcat', function(){
	gulp.src([
			'./css/reset.css', 
			'./bower_components/flexslider/flexslider.css', 
			'./css/another.css', 
			'./css/style.css'
		])
		.pipe(concat('all.css'))
		.pipe(gulp.dest('./build/css/'))
});

gulp.task('cssMin', function(){
	gulp.src([
			'./css/reset.css', 
			'./bower_components/flexslider/flexslider.css', 
			'./css/another.css', 
			'./css/style.css'
		])
	.pipe(cssmin())
	.pipe(concat("all.min.css"))
	.pipe(gulp.dest('./build/css/'))
});

gulp.task('jsConcat', function() {
    gulp.src([
	  	'bower_components/jquery/dist/jquery.min.js',
	  	'bower_components/flexslider/jquery.flexslider.js',
	  	'js/another.js',
	  	'js/script.js'
  	])
    .pipe(uglify())
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./build/js/'))
});

gulp.task('watch', function(){
	gulp.watch('./css/*.css', ['cssConcat']);
	gulp.watch('./js/*.js', ['jsConcat']);
});