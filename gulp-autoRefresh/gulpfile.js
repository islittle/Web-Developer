var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    webserver = require('gulp-webserver');

// 注册任务
gulp.task('webserver', function() {
  gulp.src( './' ) // 服务器目录
  .pipe(webserver({ // 运行gulp-webserver
    livereload: true, // 启用LiveReload
    open: true // 服务器启动时自动打开网页
  }));
});

// 监听任务
gulp.task('watch',function(){
  gulp.watch( '*.html', ['html']),
  gulp.watch( '*.js', ['js'])
});

// 默认任务
gulp.task('default',['webserver','watch']);