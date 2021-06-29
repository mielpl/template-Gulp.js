module.exports = () => {
    $.gulp.task('watch', () => {
        $.gulp.watch('src/pug/**/*.pug', $.gulp.series('pug'))
        $.gulp.watch('src/stylus/**/*.styl',$.gulp.series('stylus'))
        $.gulp.watch('src/js/**/*.js',$.gulp.series('scripts'))
        $.gulp.watch('media/**/*',$.gulp.parallel('img:dev', 'svg', 'fonts'))
    })
}