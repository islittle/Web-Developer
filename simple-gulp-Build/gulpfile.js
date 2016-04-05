/**
 * gulpfile.js
 * @author little wangfeng
 * Created 2016-04-01 10:18.
 */
//依赖插件
var gulp = require('gulp'),
    //动态引用插件
    pluginsGulp = require('gulp-load-plugins'),
    plugins = pluginsGulp(),
    //gulp-autoprefixer-throwing-referenceerror-promise-is-not-defined
    Promise = require('es6-promise').Promise;

//路径设置
var path = {
    root: './',
    dist: './dist/',
    sass: {
        src: './app/sass/**/*.{sass,scss}',
        push: './app/css/'
    },
    html: {
        src: './app/**/*.html',
        dest: './dist/'
    },
    css: {
        src: './app/css/*.css',
        dest: './dist/css/'
    },
    javascript: {
        src: './app/js/*.js',
        dest: './dist/js/'
    },
    image: {
        src: './app/image/**/*',
        dest: './dist/image/'
    }
};

var localhost = 'http://localhost:8000/dist';
var serverhost = '';
serverhost ? serverhost = serverhost : serverhost = localhost;


//时间戳

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i
}

var d = new Date();
var year = d.getFullYear();
var month = checkTime(d.getMonth() + 1);
var day = checkTime(d.getDate());
var hour = checkTime(d.getHours());
var minute = checkTime(d.getMinutes());

// 本地作为 web 服务器刷新页面
gulp.task('webserver', function() {
    // 服务器目录
    gulp.src(path.root)
        .pipe(plugins.webserver({ // 运行gulp-webserver
            livereload: true, // 启用LiveReload
            open: false // 服务器启动时自动打开网页-关闭
        }));
});


//html文件
gulp.task('html', function() {
    var options = {
        removeComments: true, //清除HTML注释
        collapseWhitespace: true, //压缩HTML
    };
    gulp.src(path.html.src)
    //压缩样式文件
    .pipe(plugins.htmlReplace({
        js: {
            src: localhost,
            tpl: '<script src="%s/js/%f.min.'+ year + month + day + hour + minute +'.js"></script>'
        },
        css: {
            src: localhost,
            tpl: '<link rel="stylesheet" type="text/css" href="%s/css/%f.min.css"/>'
        }
    }, {
      resolvePaths: false
    }))
    .pipe(plugins.htmlmin(options))
    .pipe(gulp.dest(path.html.dest))
});

//样式编译和压缩 gulp-sass依赖的是node-sass
gulp.task('style', function() {
    //引用编译sass
    return gulp.src(path.sass.src)
        .pipe(plugins.sass({
            style: 'expanded'
        }))
    //添加前缀
    .pipe(plugins.autoprefixer({
        browsers: ['last 2 version'],
        cascade: false
    }))
    //保存未压缩文件到我们指定的目录下面
    .pipe(gulp.dest(path.sass.push))
    //给文件添加.min后缀
    .pipe(plugins.rename({
        suffix: '.min'
    }))
    //压缩样式文件
    .pipe(plugins.minifyCss())
    //输出压缩文件到指定目录
    .pipe(gulp.dest(path.css.dest))
});


// Scripts任务
gulp.task('script', function() {
    //js代码校验
    return gulp.src(path.javascript.src)
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('default'))
    //js代码合并
    //.pipe(plugins.concat('main.js'))
    //给文件添加.min后缀
    .pipe(plugins.rename({
        suffix: '.min.' + year + month + day + hour + minute
    }))
    //压缩脚本文件
    .pipe(plugins.uglify())
    //输出压缩文件到指定目录
    .pipe(gulp.dest(path.javascript.dest))
});


//图片任务
gulp.task('image', function() {
    return gulp.src(path.image.src)
    //optimizationLevel：Number  默认：3  取值范围：0-7（优化等级）
    //progressive：Boolean 默认：false 无损压缩jpg图片
    //interlaced：Boolean 默认：false 隔行扫描gif进行渲染
    //multipass：Boolean 默认：false 多次优化svg直到完全优化
    .pipe(plugins.cache(plugins.imagemin({
        optimizationLevel: 3,
        progressive: true,
        interlaced: true,
        multipass: true
    })))
        .pipe(gulp.dest(path.image.dest))
});


// Watch监听
gulp.task('watch', function() {
    gulp.watch(path.html.src, ['html']);
    gulp.watch(path.sass.src, ['style']);
    gulp.watch(path.javascript.src, ['script']);
    gulp.watch(path.image.src, ['image']);
    // 创建 LiveReload 服务
    plugins.livereload.listen();
    //监控dist下面的所有文件的变化
    gulp.watch([path.dist]).on('change', plugins.livereload.changed);
});

//清除
gulp.task('clean', function() {
    return gulp.src([path.dist], {
        read: false
    })
        .pipe(plugins.clean())
});


//bulid任务
gulp.task('build', function(list) {
    plugins.sequence('clean', ['style', 'script', 'image'], 'html', list)
});

//测试使用设本地为服务器
gulp.task('static', ['webserver', 'build', 'watch']);


//默认任务
gulp.task('default', ['build', 'watch']);