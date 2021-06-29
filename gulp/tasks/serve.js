module.exports = () => {
    $.gulp.task('serve', () => {
        $.bs.init({
            server: {
                baseDir: "public"
            }
        })
    })
}