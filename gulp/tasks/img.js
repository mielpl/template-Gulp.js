module.exports = function() {
    $.gulp.task('img:dev',function() {
        return $.gulp.src('media/img/**/*.*')
            .pipe($.gulp.dest('public/media/img/'))
    })
    $.gulp.task('img:build',function() {
        return $.gulp.src('media/img/**/*.{jpg,png,jpeg,gif}')
            .pipe($.gp.tinypng('<-- ВАШ API -->'))
            .pipe($.gulp.dest('public/media/img/'))
    })
}