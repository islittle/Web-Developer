
##glup自动监控

说明：自动刷新提高开发效率。

###1.安装Node.js

>这里就不介绍了因为大家都知道,去官网下载或者用install就可以了。（全局安装）


###2.创建项目目录（Create Project）

>创建并进入项目目录

###3.安装gulp

1.全局安装: npm install -g gulp

2.项目安装：npm install gulp --save-dev

>gulp -v 命令，来查看Gulp的版本号。由于Gulp会自带package.json文件（用于存储项目的元数据），只做简单介绍（如果想自己创建，也可通过命令 npm init，然后根据引导填写相关信息）。


###4. Gulp插件安装（Install Gulp Plugins）

npm instal gulp-livereload gulp-webserver --save-dev

>静态服务器（ gulp-webserver ）  网页自动刷新（ gulp-livereload ）


###5. Gulp任务配置（Task Configuration）

1.在项目根目录中，创建gulpfile.js文件，用来配置和定义任务（task）

2.Gulpfile.js文件，填写相关配置

[点击本测试项目配置文件](https://github.com/islittle/Web-Developer/blob/master/gulp-autoRefresh/gulpfile.js)

###6.执行gulp监控

1.执行默认：gulp

2.执行特定任务：例如 gulp watch


##nodejs修改文件后自动执行

>npm -g install supervisor 然后执行supervisor ***.js

[本项目的app目录下有一个test.js测试文件](https://github.com/islittle/Web-Developer/blob/master/gulp-autoRefresh/app/test.js)

执行结果截图:

![supervisor test.js](https://github.com/islittle/Web-Developer/blob/master/linkImg/20160329104518.png)

注意：转载需要 wangfeng 创建