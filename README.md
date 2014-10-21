Web-Developer:wangfeng<br>
QQ:769407183<br>
Used to store the front-end development file<br>

<h2>1. 规范说明</h2>
注: 本文档采用 Front-End-Standards 项目编写

1.1 规范目的

项目在扩展，人员在增加，为提高团队相互协作效率，提高代码的规范性和可维护性，统一团队编码规范和风格。本规范文档一经确认，前端开发人员必须按本文档规范进行前台页面开发。

此规范为参考规范，不全是硬性要求，仅让所有代码都是有规可循的，并且能够得到沉淀，减少重复劳动。

本文档如有不对或者不合适的地方请及时提出，大家一起讨论决定后方可更改。

<h2>2. 代码规范</h2>
2.1 Html规范

2.1.1 文件命名规范

1.Html文件统一用小写英文字母，数字与划线组合，其中不能包含汉字，空格与特殊字符

命名原则：可以参考PHP里的方法名，尽量使用驼峰式；使得你自己与工作组的每一个成员能够方便的理解每一个文件的意义;当在文件夹中使用“按名称排列”的命令时，同一种大类的文件能够排列在一起，以便查找，修改，替换等操作

2.各子页命名的原则是以栏目英文翻译后取单一单词做名称如：

关于我们：aboutus.html ；反馈：feedback；产品：product；联系我们：contactus

2.1.2 html注释

注释格式

<!-- 这儿是注释 -->
’–’只能在注释的始末位置,不可置入注释文字区域;

2.1.3 html书写规范

详见：附录6.4：html书写规范

2.2 Css规范

1.编码统一为utf-8

2.协作开发及分工:

前端页面框架编辑者会根据各个模块, 同时根据页面相似程序, 事先写好大体框架文件, 分配给前端人员实现内部结构表现行为; 共用css文件reset.css由前端页面框架编辑者书写, 协作开发过程中, 每个页面请务必都要引入, 此文件包含整站基础样式, 此文件不可随意 修改; common.css为页容样式； mainsource.css为当前项目开发模式下的其它css文件管理文件，mainsource文件夹放置其它各页面css，多人开发时，统一为自己订制一个代号，具体作用下文会做说明。 预防多人开发同一个项目时的svn冲突。

详细结构可以参见：upg脚手架下的目录结构级说明

3.class与id命名与使用：

属性尽量不用Id，如特殊情况下有属性内容，使用请加上css_； 其他样式名称由小写英文&数字&_来组合命名,如i_comment,fontred,w200,h200; 避免使用中文拼音,尽量使用简易的单词组合； 总之, 命名要语义化, 简明化。

详见: 附录6.2：常用class/Id命名规范

4.规范class与id命名(此条重要, 若有不明白请及时与i沟通)：

a. 通过从属写法规范, 示例见d;

b. 取父级元素id/class命名部分命名, 示例见d;

c. 重复使用率高的命名, 请以自己代号加下划线起始, 比如i_clear;

d. a,b两条, 适用于已建好框架的页面, 如, 要已建好框架的页面代码<div id=”nav”></div>中加入新的div元素, 按a命名法则: <div id=”nav”><div class=”subNav”>…</div></div> 样式写法:

#nav .subNav {……};
按b命名法则: <div id=”nav”><div class=”nav_subnav”>…</div></div> 样式写法:

.nav_subnav{……}

5.css属性书写顺序, 建议遵循: 布局定位属性–>自身属性–>文本属性–>其他属性. 此条可根据自身习惯书写, 但尽量保证同类属性写在一起.

属性列举： 布局定位属性主要包括: display & list-style & position（相应的 top, right, bottom, left） ＆ float & clear ＆ visibility ＆ overflow；

自身属性主要包括: width & height & margin & padding & border & background

6.书写代码前, 考虑并提高样式重复使用率;

7.充分利用html自身属性及样式继承原理减少代码量, 比如:

<ul class=”list”>
  <li>这儿是标题列表<span>2010-09-15</span></li>
</ul>

/*css样式*/
ul.list li{position:relative}
ul.list li span{position:absolute; right:0}
8.样式表中中文字体名, 请务必转码成unicode码, 以避免编码错误时乱码;

9.背景图片请尽可能使用sprite技术（css精灵）, 减小http请求, 考虑到多人协作开发, sprite按模块制作;

10.使用table标签时(尽量避免使用table标签), 请不要用width/height/cellspacing/cellpadding等table属性直接定义表现, 应尽可能的利用table自身私有属性分离结构与表现, 如 thead,tr,th,td,tbody,tfoot,colgroup,scope(cellspaing及cellpadding的css控制方法:

table{border:0;margin:0;border-collapse:collapse;}
table th, table td{padding:0;}
reset.css文件中会初始化表格样式)

11.杜绝使用

<meta http-equiv=”X-UA-Compatible” content=”IE=7“/>
来兼容IE8

12.用png图片做透明图片时, 要求图片格式为png-24格式,尽量避免兼容性属性的使用,比如text-shadow || css3的相关属性，毕竟现在兼容有限。

13.必须为大区块样式添加注释,小区块适量注释；

14.代码缩进与格式: 建议单行书写, 可根据自身习惯, 后期优化前端交互会统一处理;

2.2.1 图片相关规范

i.所有页面元素类图片均放入images文件夹,测试用图片放于images/demoimg文件夹；

ii.图片格式仅限于gif || png || jpg；

iii.在保证视觉效果的情况下选择最小的图片格式与图片质量, 以减少加载时间；

iv.尽量避免使用半透明的png图片(注：根据设计搞来；若使用, 请参考css规范相关说明)；

v.运用css sprite技术集中小的背景图或图标, 减小页面http请求, 但注意, 请务必在对应的sprite psd源图中划参考线, 并保存至images目录下

vi.命名全部用小写英文字母 || 数字 || _ 的组合，其中不得包含汉字 || 空格 || 特殊字符；尽量用易懂的词汇, 便于团队其他成员理解； 另图片全称分为前后两部分，用下划线隔开，前端部分表示图片的大类性质，如：广告，icon，标志，按钮，菜单，背景。

页面顶端的较大的图片长方形图片取名：banner。
标志性的图片：logo。
如果是装饰用的列表临时图片：pic放在demoimg文件夹下。
按钮图片：btn。
在某一位置连续出现，性质相同的图片：menu。
不带连接表示标题的图片：title
例如： ad_left01.gif || btn_submit.gif； banner_aboutus.jpg , banner_01.jpg, banner_02.jpg, logo_yrz.jpg, btn_big.jpg, btn_yellow.jpg, menu_01.jpg, title_ad.jpg, title_news.jpg
vii.鼠标感应图片效果:图片名称_on/off

例如：menu_on/off.png，button_on/off.png

2.2.2 css注释

a.组件注释

/**
 * @name: 组件名
 * @overview: 组件介绍
 * @require: 依赖的样式
 * @author: (xxx@gmail.com)
 */
b.块状或行内元素，都请使用 /* comment */ 注释，注释文字前后端保持各有一个空格。

c.为了您的体验着想，一目了然的代码，就不要注释了，比如:

display:none; /* 让元素看不见 */
2.3 Javascript规范

2.3.1 文件结构和命名

文件结构见 UPG项目脚手架：js文件结构，文件命名见 UPG项目脚手架：文件命名

2.3.2 编码风格

代码检测工具

根据不同IDE配置不同的检测工具(JSLint, JSHint等)及其选项，列举JSHint：

"jshint_options": {
  "es3": true, //兼容es3规范，针对旧版浏览器编写的代码
  "esnext": false, //不使用最新的es6规范
  "camelcase": true, //使用驼峰式命名
  "eqeqeq": false, //不强制使用===比较运算符
  "expr": true, //允许未赋值的函数名表达式，例如console && console.log(1)
  "freeze": false, //不限制对内置对象的扩展
  "immed": true, //禁止未用括号包含立即执行函数
  "latedef": true, //禁止先调用后定义
  "maxparams": 4, //函数最多不超过4个参数
  "noarg": false, //不禁止对arguments.caller和arguments.callee的调用
  "noempty": false, //禁止空代码块
  "nonew": false, //允许直接new实例化而不赋值给变量
  "plusplus": false, //允许++和--运算符使用
  "quotmark": "single", //字符串使用单引号
  "smarttabs": false, //不允许混合tab和空格缩进
  "maxerr": false,
  "strict": false, //不强制使用es5严格模式
  "sub": true, //允许用[]形式访问对象属性
  "unused": false, //允许定义没用的变量，在某些函数回调中，经常出现多个参数，但不一定会用
  "multistr": false, //禁止多行字符串，改用加号连接
  "undef": true,  //禁止明确未定义的变量调用，如果你的变量（myvar）是在其他文件中定义的，可以使用/*global myvar */绕过检测
  "forin": false, // 如果为真，那么，jsHint允许在for in 循环里面不出现hasOwnProperty
  "devel": true, //允许对调试用的alert和console.log的调用
  "jquery": true, //检查预定义的全局变量，防止出现$未定义，该项根据实际代码修改
  "browser": true,
  "predef": ["define", "seajs", "console", "require", "module"],
  "wsh": true,
  "evil": false, // 不允许使用eval
  "asi": true, // 行尾分号
  "newcap": true, // jsHint会要求每一个构造函数名都要大写字母开头
  "curly": true, // 使用if和while等结构语句时加上{}来明确代码块
  "maxlen": 100
}
缩进：

两个空格 2space，注： 不同IDE可以配置缩进风格

注释：

方法内部使用 // ，方法外部使用YUIDoc注释，{{YUIDoc注释}}

代码格式：

1.每行代码长度不超过100字符;

2.空格：

//一元操作符前后不带空格
i++;
i--;

//二元操作符前后使用一个空格
var name = 'Hoogle';

//对象的属性冒号前没有空格，后面留一个空格
var obj = {
  foo: 'foo',
  bar: 'bar'
}

//方法定义的时候，括号前不留空格，括号后留一个空格
function test() {
  //todo
}
3.条件控制语句if不省略大括号对 {} 注：一条语句的时候也不能省， 并且注意换行和空格

//if语句
if (condition){
  //todo
} else if (condition) {
  //todo
} else {
  //todo
}
4.多个变量用多个 var 声明

//多个变量声明
var foo = 'foo';
var bar = 'bar';
变量命名的风格：

注： 所有变量均遵循驼峰式命名规则

1.jquery对象变量使用 $ 开头

var $list = $('#list'); //jquery变量
var list = document.getElementById('list'); //普通变量
2.类名首字母大写(ClassDefine)

//Person类
function Person(name){
  this.name = name;
}
3.方法名使用动词或动名词结合的驼峰式（getFunctionName，setFunctionName, isFunctionName，hasFunction）

4.常量用大写，用下划线连接

//常量
var STATIC_VARIABLE = 100;
var PI = Math.PI;
2.3.3 语言规范

1.变量命名必须加上 var 关键字

2.语句结尾总是使用分号

var foo = function(a) {
  console.log(a);
} //这里丢掉分号会有意想不到的结果
(function(){
  console.log('hello');
})();
3.创建基本类型时，不使用 new 关键字，而直接使用对象字面量，注: 除了在需要实例化一个对象，或罕见的需要延时加载数据的情况外

//不使用new关键字创建
var list = new Array(1, 2, 3);
var obj = new Object();
//使用字面量
var list = [1, 2, 3];
var obj = {};
4.大字符串的创建注意格式

//html结构的字符串推荐使用这种方式
var listHtml = '<ul class="list">' +
                 '<li class="item">first item</li>' +
                 '<li class="item">second item</li>' +
               '</ul>';
5.使用闭包封装整个js文件代码

6.避免使用 eval，with

7.避免使用 for ... in 语句来循环数字，非得使用的情况下加上 hasOwnProperty 来判断

8.避免使用IE下的条件注释

//不要这样子写:
var f = function () {
  /*@cc_on if (@_jscript) { return 2* @*/  3; /*@ } @*/
};
//条件注释妨碍自动化工具的执行, 因为在运行时, 它们会改变 JavaScript 语法树.
<h2>3. UPG项目脚手架</h2>
3.1 文件命名

1.统一使用英文小写(linux下是严格区分大小写)，无连接符号，如帮助中心模板页: helpcenter.html

2.业务js跟服务走，如当前访问的url: https://test.yrz.cn/Help/Security/index ，对应在 appjs 目录下应该有该文件 help/security/index.js

3.2 目录结构及说明

.项目根目录
+---public (静态目录)
  +---.build (项目构建临时目录)
  +---css (css目录)
  |   +---mainsource(各个模块的css文件，开发环境由mainsource.css引入，生产环境被压到main.min.css中)
  |   |   ---modules1.css
  |   |   ---modules2.css
  |   |   ---modules3.css
  |   ---reset.css (重置、统一浏览器样式)
  |   ---common.css (头部、底部、表格、按钮等公共样式)
  |   ---mainsource.css (引入mainsource该文件夹下的模块css文件)
  +---dist (grunt发布目录)
  |   +---js
  |   |   +---basejs
  |   |   +---appjs
  |   |   +---modulejs
  |   |   +---componentjs
  |   +---css
  |   |   ---base.min.css (合并reset.css和common.css)
  |   |   ---main.min.css (合并mainsource等其他模块css文件)
  +---images (组件、插件的图片文件夹)
  |   +---demoimg (放测试用的图片)
  |   +---97date
  |   +---box2
  |   +---colorbox
  |   +---hovercard
  |   +---industry
  |   +---jcarousel
  |   +---jcorp
  |   +---jqueryui
  |   +---load
  |   +---multiselect
  |   +---orderlist
  |   +---pop
  |   +---popimage
  |   +---search
  |   +---tipsy
  |   +---upload
  |   +---uploadify
  |   +---webcam
  |   +---zclip
  +---js (js开发目录，符合cmd规范)
  |   +---appjs (与业务对应的模块)
  |   |   +---common (公用模块)
  |   |      ---common.js (全站共用业务js)
  |   +---basejs (基础模块)
  |   |   ---jquery.js
  |   |   ---prototype.js
  |   |   ---sea.js
  |   |   ---seastyle.js
  |   |   ---upgTool.js
  |   +---componentjs (富应用组件)
  |   |   +---highcharts (图表)
  |   |   +---ueditor (百度ueditor编辑器)
  |   +---moudlejs (cmd模块组件)
  |   |   +---ajaxform
  |   |   +---animatecolor
  |   |   +---area
  |   |   +---autocomplete
  |   |   +---banner
  |   |   +---box2
  |   |   +---box3
  |   |   +---colorbox
  |   |   +---cookie
  |   |   +---countdown
  |   |   +---datepicker
  |   |   +---datepickerui
  |   |   +---easing
  |   |   +---ghosttext
  |   |   +---hovercard
  |   |   +---hoverdelay
  |   |   +---industry
  |   |   +---jcarousel
  |   |   +---jcorp
  |   |   +---jqueryui
  |   |   +---jscrollpane
  |   |   +---mousewheel
  |   |   +---multiselect
  |   |   +---orderlist
  |   |   +---passwordrate
  |   |   +---pop
  |   |   +---popimage
  |   |   +---position
  |   |   +---rotate
  |   |   +---search
  |   |   +---slideimgtab
  |   |   +---tagit
  |   |   +---textlength
  |   |   +---timepicker
  |   |   +---tipsy
  |   |   +---upgui
  |   |   +---upload
  |   |   +---uploadify
  |   |   +---validate
  |   |   +---verifyid
  |   |   +---webcam
  |   |   +---widget
  |   |   +---zclip
  |   ---normaljs (非cmd模块js)
  +---tpl (静态模板)
  +---bin (运用在项目中时的一些脚本片段)
  |   ---appjs.php (项目中引入对应业务的方法)
  |   ---baseUrl2VersionUrl.php (根据文件路径返回以最后修改时间为版本号的url)
  |   ---cssimage.py (给css文件中的背景图片url加版本号)
  |   ---publish.sh (打包脚本，一般放在打包服务器的更新脚本中)
  |   ---static.include.html (引入静态文件)
  |   ---Preferences.sublime-settings (sublime配置文件)
  |   ---SublimeLinter.sublime-settings (SublimeLinter配置文件)
  |---package.json (grunt打包配置文件)
  |---Gruntfile.js (grunt打包配置文件)
  |---updateAppjs.json (grunt打包配置文件，用于暂存一定时间内改动过的appjs中的js文件)
  |---cssimage.py (给css中的背景图片加版本号，在发布脚本中执行)
<h2>4. 生产力工具推荐</h2>
Mind Map版本：前端工具

4.1 for Mac OS

for more app detial check -> IUSETHIS

4.1.1 前端相关工具(Mac)

编辑器：Sublime Text 2 / TextMate 2 / Vim / Intellij IDEA
命令行：iTerm2
浏览器调试环境：Chrome / Firefox + Firebug
移动设备调试环境：Mozilla Fennec
兼容性测试：VirtualBox + Win XP（IE 8）
版本控制工具：GitHub for Mac / Versions / SourceTree
FTP工具：Filezilla / ForkLift
HTTP抓包及Post/Get模拟：Charles
PHP集成环境：XAMPP for Mac / MAMP
SQL数据库管理：Sequel Pro
标注工具：Mark Man / xScope
取色拾色器： Frank DeLoupe / Sip / Snip / xScope
MarkDown编辑器：Mou
浏览器免刷新开发环境：LiveReLoad / CodeKit
CSS Sprite切图工具：SpriteRight
Less -> CSS 编译：CodeKit / LiveReLoad / Less
配色方案工具：ColorSchemer Studio
多浏览器Cookie管理：Cookie
图片素材收集：Sparkbox / Pixa
4.1.2 其他效率工具

快速启动及切换app：Alfred
剪切板历史记录：Alfred(Fretures -> Clipboard)
笔记：Evernote
轻量级GTD：Clear
压缩解压：The Unarchiver / Keka / iPack
语言文档和快捷词扩展：Dash
时间中断提醒：BreakTime
4.2 前端相关工具(Windows)

编辑器：Sublime Text 2 / Vim / Intellij IDEA
命令行：Putty
浏览器调试环境：Chrome / Firefox
移动设备调试环境：Chrome Remote USB Debugging
版本控制：Subversion / Github for Windows
FTP工具：Filezilla
抓包工具：Fiddler2
MarkDown：MarkdownPad
浏览器免刷新开发环境：LiveReLoad / F5
Less -> CSS编译：less.org(nodejs环境下编译)
Haml -> Html编译：haml.info(Gem下编译)
响应式设计查看工具：Firefox Responsive Design View
4.2.1 其他效率工具(Windows)

笔记：Evernote
压缩解压：7z
4.3 其他收集

Firefox 扩展收藏集 -> Firefox Add-ons collections
Chrome 扩展 -> 待添加
Sublime Text 2 技巧 -> ST2 资源技巧汇总
YUIDoc
grunt： grunt-cmd-transport grunt-cmd-concat grunt-contrib-jshint grunt-contrib-uglify grunt-contrib-watch grunt-contrib-clean grunt-contrib-cssmin grunt-contrib-copy
sublime（推荐）: emmet（zen coding） jshint css精灵 DocBlock
Fiddle
firebug
Yslow
IETester
浏览器: FireFox–>IE7–>IE8–>IE9 –>IE10 –>Opera–>Chrome
4.4 相关技巧

Wiki page index

各浏览器的缓存清除方法
测试技巧Gmail 添加词缀 .+ 获得多个邮件的方法
关于Mac Win Linux跨系统传文件，文件名乱码的解决方案
技术团队"路由代理"解决方案和使用须知

<h2>5. 参考资料</h2>
 参考网站

注： 工具类

Grunt中文网
开源中国在线工具 (有相当多的前后端实用的工具，强烈推荐哦 ^-^ )
注： 学习类

markdown语法说明(简体中文)


<h2>6. 其他规则</h2>
6.1 hack规则

一般情况下，不要使用 IE 条件注释：
通用 Hack
.all-IE{property:value\9;}
.gte-IE-8{property:value\0;}
.lte-IE-7{*property:value;}
.IE-7{+property:value;}
.IE-6{_property:value;}
.not-IE{property//:value;}
@-moz-document url-prefix() { .firefox{property:value;} }
@media all and (-webkit-min-device-pixel-ratio:0) { .webkit{property:value;} }
@media all and (-webkit-min-device-pixel-ratio:10000),not all and (-webkit-min-device-pixel-ratio:0) { .opera{property:value;} }
@media screen and (max-device-width: 480px) { .iphone-or-mobile-s-webkit{property:value;} }
当然，强烈建议你使用更优雅的hack方式。那就是避免hack。或者在书写上，做点小trick。比如：
.selector .child{property:value;} /* for ie-6 */
.selector > .child{property:value;} /* except ie-6 */
关于Hack: 在firefox写完，IE有问题？还是其他浏览器也出现了。你知道IE Hack 能解决。我想，你也可能知道，用其他方法也能绕过。建议少用Hack。
6.2 常用class/Id命名规范

常用类
页　眉：header	内　容：content	容　器：container	页　脚：footer	版　权：copyright
导　航：`nav`	主导航:mainnav(globalnav)	顶导航：topnav	子导航：subnav	菜单：menu
子菜单：submenu	标　志：logo	标　语：banner	标　题：title	侧边栏：sidebar
状态：status	投票：vote	合作伙伴：partner	友情链接：friendlink	外　套：wrap
商　标：label	左导航：leftsideBar	右导航：rightsideBar	菜单内容：menu1content	菜单容量：menucontainer
子图标：Icon	注　释：note	搜　索：search	按　钮：btn	登陆条：loginbar
登　录：login	链　接：link	信息框：manage	标签页：tab	文章列表：list
提示信息：msg	小技巧：tips	加入：joinus	指南：guild	服务：service
热点：hot	新闻：news	下载：download	注册：regsiter	功能区： shop(如购物车，收银台)
模块前缀
作用	
设置: set	添加: add	删除: del	操作: op	密码: pw	导入: inc
类型	
按钮: bt	文本: tx	段落: p	图标: icon	颜色: color,c	背景: bg	边框: bor
状态	
成功: suc	失败: lost	透明: tran
位置	
公共: gb	边框: bor	弹出: pop	标题: title,tit	菜单: menu	内容: cont	提示: hint	导航: nav	信息: info	预览: pvw
6.3 Reset.css 部分代码(参考)

Html,body{padding:0;margin:0;font:12px/normal SunSin;color:#666; background:#ffffff; }
h1, h2, h3, h4, h5, h6, form, div, p, i, img, ul, li, ol, table, tr, td,th, fieldset, label, legend,button,input { margin:0;padding:0;}
li{list-style:none;}
img{border:none; vertical-align:middle; }
table{border-collapse:collapse;}
hr{clear:both;border-width:0;border-top:1px solid #ccc;border-bottom:1px solid #FFF;height:2px;overflow:hidden;}

/*link*/
a:link {color:#333;text-decoration:none;font-family:arial;}
a:visited {color:#333;text-decoration:none;font-family:arial;}
a:hover {color:#bc2931; text-decoration:underline;font-family:arial;}
a:active {color:#bc2931;}

/*font*/
.f12{font-size:12px;}
.f14{font-size:14px;}
.fb{font-weight:800;}
.fi{font-style:italic;}
.dn{display:none;}
.db{display:block;}
.fl{float:left;}
.fr{float:right}
.dele{text-decoration:line-through;}
.ful {text-decoration:underline;}

6.4 html书写规范

1.文档类型声明及编码: 统一为html5声明类型<!DOCTYPE html>; 编码统一为<meta charset=”utf-8″ />, 书写时利用IDE实现层次分明的缩进;

2.非特殊情况下样式文件必须外链至<head>…</head>之间;非特殊情况下JavaScript文件必须外链至页面底部;

3.引入样式文件或JavaScript文件时, 须略去默认类型声明, 写法如下:

<link rel=”stylesheet”type=”text/css” href=”…” />
<style>…</style>
<script src=”…”></script>
4.所有编码均遵循xhtml标准, 标签 & 属性 & 属性命名 必须由小写字母及下划线数字组成, 且所有标签必须闭合, 包括<br />, <hr />等; 属性值必须用双引号包括;

5.充分利用无兼容性问题的html自身标签, 比如span, em, strong, optgroup, label,等等; 需要为 html元素添加自定义属性的时候, 首先要考虑下有没有默认的已有的合适标签去设置, 如果没有, 可以使用须以”data-”为前缀来添加自定义属性，避免使用”data:”等其他命名方式;

6.语义化html, 如标题根据重要性用h*(同一页面只能有一个h1), 段落标记用p, 列表用ul, 内联元素中不可嵌套块级元素;

7.尽可能减少div嵌套, 如

<div class=”box”>
  <div class=”welcome”>
    欢迎访问XXX, 您的用户名是<div class=”name”>用户名</div>
  </div>
</div>
完全可以用以下代码替代:

<div class=”box”>
  <p>欢迎访问XXX, 您的用户名是<span>用户名</span></p>
</div>
8.书写链接地址时, 必须避免重定向，例如：href=”http://itaolun.com/”, 即须在URL地址后面加上“/”；

9.在页面中尽量避免使用style属性,即style=”…”;

10.必须为含有描述性表单元素(checkbox, radio)添加label, input, textarea按实际需要如:

<p>姓名: <input type=”text” id=”name” name=”name” /></p>
须写成:

<p><label>姓名:<input type=”text” id=”name” /></label></p>
11.重要图片必须加上alt属性; 给重要的元素和截断的元素加上title;

12.给区块代码及重要功能(比如循环)加上注释, 方便后台添加功能;

13.特殊符号使用: 尽可能使用代码替代: 比如 <(<) & >(>) & 空格( ) & »(») 等等;

14.书写页面过程中, 请考虑向后扩展性;

15.class & id 参见 css书写规范

16.HTML文件缩进以2个空格为标准。

其他
开发过程中严格按分工完成页面, 以提高css复用率, 避免重复开发;
减小沉冗代码, 书写所有人都可以看的懂的代码. 简洁易懂是一种美德. 为用户着想, 为服务器着想.

<h2 class="h2">前端工具</h2>
在线压缩工具<br>
http://ganquan.info/yui<br>
css速查表<br>
http://code.ciaoca.com/style/css-cheat-sheet<br>
字符编解码<br>
http://www.baidufe.com/fehelper/endecode.html<br>
JSON格式化<br>
http://www.baidufe.com/fehelper/jsonformat.html<br>
CSS在线检查工具<br>
http://jigsaw.w3.org/css-validator<br>
CSS动画手册<br>
http://ecd.tencent.com/css3/guide.html<br>
CSS在线手册<br>
http://css.doyoe.com<br>
png压缩工具<br>
https://tinypng.com<br>
在线编辑器<br>
http://jsbin.com<br>

这里面都是工作或者学习中遇到的css，html，js和一些其他工具或者插件遇到的问题和解决方案。仅供参考。若有错误，请指正。谢谢
