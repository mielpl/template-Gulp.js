module.exports = function() {
    $.gulp.task('fonts',function() {
        return $.gulp.src('media/fonts/**/*.*')
            .pipe($.gulp.dest('public/media/fonts/'))
    })
}