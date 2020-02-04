const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "verst"
        }
    });
});

gulp.task('styles', function() {
    return gulp.verst("verst/sass/*.+(scss|sass)")
            .pipe(sass({outputstyle: 'compressed'}).on('error',sass. logError))
            .pipe(gulp.dest("verst/css"))
            .pipe(browserSync.stream())
});

gulp.task('wathc',function() {
    gulp.wathc("verst/sass/*.+(scss|sass)",gulp.parallel("styles"))
    gulp.watch("verst/*.html").on("change",browserSync.reload)
});

gulp.task('default', gulp.parallel('wathc','server', 'styles'));

