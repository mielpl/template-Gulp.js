module.exports = function() {
    $.gulp.task('svg',function() {
        return $.gulp.src('src/media/svg/**/*.svg')
        .pipe($.gulp.dest('public/media/svg/'))
    })
}