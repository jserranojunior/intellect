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

 
