var gulp = require("gulp");
var run = require('gulp-run');

gulp.task('generate-dynamic-readme', function () {
  return run('node docs/index.js', { verbosity: 0 }).exec();
})

gulp.task('gen-docs', gulp.series('generate-dynamic-readme'));
gulp.task('default', gulp.parallel('gen-docs'));
