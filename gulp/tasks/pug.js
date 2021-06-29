module.exports = () => {
	$.gulp.task('pug', () => {
        return $.gulp.src('src/pug/pages/**/*.pug')
            .pipe($.gp.pug({
                basedir: __dirname+'/../../src/pug',
				pretty: true
            }))
            .pipe($.gulp.dest('public'))
            .pipe($.bs.reload({
                stream:true
            }))
    })
}