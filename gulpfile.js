var gulp = require('gulp');
var browserify = require('browserify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var source = require('vinyl-source-stream');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('copyHTML', function () {
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./public/'));
});
 
gulp.task('browserify', function() {
  return browserify('./src/audioplayer.js')
    .transform('babelify', { presets: ['es2015', 'react'] })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public/'));
});

gulp.task('sass', function () {
  return gulp.src('./src/*.scss')
    .pipe(concat('style.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({ browsers: ['> 2%'] }))
    .pipe(gulp.dest('./public/'));
});

gulp.task('default', ['copyHTML', 'browserify', 'sass']);