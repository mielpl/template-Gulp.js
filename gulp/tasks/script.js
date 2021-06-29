module.exports = function() {
    $.gulp.task('scripts',function() {
        return $.gulp.src('src/js/*.js')
			.pipe($.gp.concat('script.js'))
            .pipe($.gp.uglify())
            .pipe($.gulp.dest('public/js/'))
            .pipe($.bs.reload({
                stream:true
            }))
    })
}