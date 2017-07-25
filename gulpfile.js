const gulp = require('gulp')
const responsive = require('gulp-responsive')
const settings = {
  imageSource: 'assets/images/uploads/*.{png,jpg}',
  imageDestination: 'dist/images/uploads'
}

gulp.task('default', function () {
  return gulp.src(settings.imageSource)
    .pipe(responsive({
      '*': {
        width: 280
      }},
      {
        passThroughUnused: true,
        errorOnEnlargement: false,
        progressive: true,
        quality: 30,
        compressionLevel: 1
      }))
    .pipe(gulp.dest(settings.imageDestination))
})
