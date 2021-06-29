module.exports = () => {
	$.gulp.task('stylus', () => {
        return $.gulp.src('src/stylus/*.styl')
		.pipe($.gp.sourcemaps.init())
        .pipe($.gp.stylus())
		.pipe($.gp.order([
			'*.css',
			'style.css'
		]))
		.pipe($.gp.concat('style.css'))
        .pipe($.gp.autoprefixer({
            overrideBrowserslist: ['last 4 versions'],
            cascade: false
        }))
        .pipe($.gp.csso())
        .pipe($.gp.sourcemaps.write())
        .pipe($.gulp.dest('public/css/'))
        .pipe($.bs.reload({
            stream:true
        }))
	})
}