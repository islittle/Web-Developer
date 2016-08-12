#chrome-nproxy

>代理的用途：

1. 将线上的静态资源文件（JS、CSS、图片）替换为本地相应的文件，来调试线上（代码压缩过代码）的问题；
2. 开发过程，前端和后端同学并行开发，当后端接口未就绪的情况下，将AJAX接口映射于本地文件；
3. 将其他环境的AJAX接口的数据映射于本地（测试，预发，生产等），也就是说开启本地的服务，本地的服务拉取的数据来自其他环境的数据（例如：测试同学基本都是基于测试环境来find and check，将测试环境的数据来模拟本地拉取的数据，更直观发现问题）

###依赖插件node nproxy
>1.安装node

[node官网](https://nodejs.org/en/)下载安装，或者[node中文网](http://nodejs.cn/)下载

>2.全局安装nproxy

npm install -g nproxy（目前几乎所有版本的node都集成了npm管理工具），或修改为淘宝cnpm更下载更快（*至于怎么配置百度就知道了，下面同类说明*）。

###添加chrome npoxy扩展
>1.添加

设置-》扩展程序-》获取更多扩展程序-》搜索 Proxy SwitchySharp -》添加（或者百度搜索下载 SwitchySharp.crx 直接拉到扩展里面）

>2.配置chrome Proxy SwitchySharp

SwitchySharp-》选项-》
a.新建情景模式-》命名随便写，http代理（或https）填写127.0.0.1 端口默认 8989（可以指定其他）
b.切换规则  配置一些规则，指向情景模式 ；例如：^(?!http:\/\/www\.xxx\.com\/m.api)(http:\/\/www\.xxx\.com\/)  

###配置使用
>1.创建

进到项目中 创建一个启动js文件，但是不能命名为nproxy.js，否则不能启动。例如：nproxy_prd.js   nproxy_test.js  nproxy_rule.js 等等

>2.配置

打开创建好的启动文件 例如：
```
module.exports = [
    //app为项目资源目录，下面不作说明,D:/local-project为本地项目路径,我这里简单配置一下。可以用正则或者*
    //1.目录匹配
    {
      pattern: 'http://xxx.xxx.xxx/img',
      responder: 'D:/local-project/app/static/img'
    },
    {
        pattern: 'http://xxx.xxx.xxx/static',
        responder: 'D:/local-project/app/static'
    },
    {
      pattern: 'http://xxx.xxx.xxx/scripts',
      responder: 'D:/local-project/app/scripts'
    },
    {
      pattern: 'http://xxx.xxx.xxx/static/css',
      responder: 'D:/local-project/app/static/css'
    },
    {
      pattern: 'http://xxx.xxx.xxx/bower_components',
      responder: 'D:/local-project/bower_components'
    },
    {
        pattern: 'http://xxx.xxx.xxx/templates',
        responder: 'D:/local-project/app/templates'
    },
    //2单个文件本地匹配（新建常用）
    {
        pattern: 'http://xxx.xxx.xxx/demo.html',
        responder: ''http://xxx.xxxx.xxx/demo.html'
    },
    //3.单个文件指向其他资源
    {
        pattern: 'http://xxx.xxx.xxx/demo.html',
        responder: 'D:/local-project/app/demo.html'
    },
    //4.单个文件对多个文件匹配
    {
        pattern: 'http://xxx.xxx.xxx/scripts/demo.min.js', 
        responder: [
          'D:/local-project/app/scripts/demo1.js',
          'D:/local-project/app/scripts/demo1.js',
           'D:/local-project/app/scripts/demo1.js',
        ] 
     },
     //5.单个文件对一个目录下文件匹配
     {
        pattern: 'scripts/distscripts.*.js',
        responder: {
          dir: 'D:/local-project/app/distscripts/js',
          src: [
            'a.js',
            'b.js',
            'c.js'
          ]
        }
    },
]
```
3.启动：nproxy -l xxx.js  例如：nproxy -l nproxy_prd.js 点击chrome  nproxy启动你情景模式，就可以预览了。
>nproxy可以指向非默认端口例如：nproxy -l replace_rule.js  -p 8181
