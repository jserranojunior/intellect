var gulp = require('gulp');
var concat = require('gulp-concat');
watch = require('gulp-watch');

gulp.task('default', function() {
  console.log('funcionando');
});

gulp.task('scripts', function() {
  return gulp.src([
    'resources/assets/css/style.css'
]) 
    .pipe(concat('all.css'))
    .pipe(gulp.dest('./public/css/'));
});

gulp.task('watch', function() {
  gulp.watch('resources/assets/css/*.css', ['scripts']);
});

 

/*
 './node_modules/bootstrap/dist/css/bootstrap.css',
 'resources/assets/css/bootstrap-tema.css',
    './node_modules/admin-lte/dist/css/AdminLTE.css',


var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

var scssFiles = '/resources/assets/sass/style.scss';

// CSS destination
var cssDest = '/public/css';

// Options for development
var sassDevOptions = {
  outputStyle: 'expanded'
}

// Options for production
var sassProdOptions = {
  outputStyle: 'compressed'
}


// Task 'sassdev' - Run with command 'gulp sassdev'
gulp.task('sassdev', function() {
  return gulp.src(scssFiles)
    .pipe(sass(sassDevOptions).on('error', sass.logError))
    .pipe(gulp.dest(cssDest));
});

// Task 'sassprod' - Run with command 'gulp sassprod'
gulp.task('sassprod', function() {
  return gulp.src(scssFiles)
    .pipe(sass(sassProdOptions).on('error', sass.logError))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest(cssDest));
});

// Task 'watch' - Run with command 'gulp watch'
gulp.task('watch', function() {
  gulp.watch(scssFiles, ['sassdev', 'sassprod']);
});

// Default task - Run with command 'gulp'
gulp.task('default', ['sassdev', 'sassprod', 'watch']);

*/