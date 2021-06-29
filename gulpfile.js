'use strict'

global.$ = {
    gulp:  require('gulp'),
    gp: require('gulp-load-plugins')(),
    del: require('del'),
    bs: require('browser-sync').create(),
    path: {
        tasks: require("./gulp/config/tasks.js")
    }
}

$.path.tasks.forEach(function(taskPath) {
    require(taskPath)()
})

$.gulp.task('default', $.gulp.series(
    'clean',
    $.gulp.parallel('fonts','img:dev','pug','scripts','stylus','svg'),
    $.gulp.parallel('watch','serve'),
))

$.gulp.task('build', $.gulp.series(
    'clean',
    $.gulp.parallel('fonts','img:build','pug','scripts','stylus','svg'),
    $.gulp.parallel('watch','serve'),
))
