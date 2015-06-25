({
    // 应用程序最高层目录，在这个文件夹下的所有文件将会被复制到dir参数标注的文件夹下
    appDir: "./",
    //相对于appDir，需要查找文件的锚点
    baseUrl: "js",
    //这是一个输出目录，将appDir下所有的应用程序文件复制到该文件夹下
    dir: "../built",
    //模块（modules）的相对目录 例如本项目js下面有一个jquery-1.9.1文件，那么就写jquery: 'jquery-1.9.1'就好了，如果bulid有jquery库文件，
    //那么page2的远程文件就不执行了。为了演示page1和pages2的区别，所有下面jquery就不空
    paths: {
    	"jquery": "empty:"
    },
   //为那些没有使用define()声名依赖关系及设置模块值的模块，配置依赖关系与“浏览器全局”出口的脚本
    shim : {
        //例如：backbone的设置以及依赖
        // 'zepto': {
        //     'exports': '$'
        // },
        // 'underscore': {
        //     'exports': '_'
        // },
        // 'backbone': {
        //     'deps': ['zepto', 'underscore'],
        //     'exports': 'Backbone'
        // }
    },

    //RequireJS Optimizer会自动优化应用程序下的CSS文件。这个参数控制CSS最优化设置。
    //允许的值： “none”, “standard”, “standard.keepLines”, “standard.keepComments”, “standard.keepComments.keepLines” 
    //"none"：不压缩；"standard"：标准的压缩方式；"standard.keepLines"：保留换行；"standard.keepComments"：保留注释；
    //"standard.keepComments.keepLines"：保留注释换行；
    optimizeCss: 'standard',

    //如果为true，优化器（optimizer）将从输出目录中删除已合并的文件
    removeCombined : false, 

    //任何与此规则匹配的文件或文件夹都将不会被复制到输出目录。由于我们把r.js和build.js放置在应用程序目录下
    //我们希望优化器（optimizer）排除这两个文件。 因此我们可以这样设置
    fileExclusionRegExp : /^(r|build)\.js$/,

    //一个包含多个对象的数组。每个对象代表一个将被优化的模块,为baseUrl下面的模块.　
    //name：模块名；
　　//create：如果不存在，是否创建。默认 false；
    //include：额外引入的模块，和 name 定义的模块一起压缩合并；
    //exclude：要排除的模块。有些模块有公共的依赖模块，在合并的时候每个都会压缩进去，例如一些基础库。exclude可以把这些模块压缩
    //在一个更早之前加载的模块中，其它模块不用重复引入。
    modules: [
        {
            name: "pagemodule1",
        },
        {
            name: "pagemodule2"
        }
    ]
})