说明：雪碧图对我们前端来说已经很熟悉，这是为了减少小图标对服务器的情况而采取的一种方式。咱们先不谈他的坏处，好处我们是有目共
睹，上篇我说了如何用compass编译，这一篇我们也是讲compass合成雪碧图。其他的方法网上一搜有很多，在此只列举此方法仅供参考。<br/>
<br/>
注意：转载需加 wangfeng 创建 以及网址来源<br/>
<br/>
在上一篇我写了compass的安装和sass的使用方法，在本章就不说了，有不明白者请看<br/>
<a href="https://github.com/islittle/Web-Developer/blob/master/css-notes/sass/compass-install-use.md">compass-install-use.md
</a><br/>
<br/>
第一：首先导入scss文件 @import "browsers/*.png"; browsers为images下存放小icon的文件夹<br/>
<br/>
第二：分icon编译对应的类名 @include  all-browsers-sprites; <br/>
<br/>
第三：定义icon大小<br/>
全部获取就用$browsers-sprite-dimensions: true;（默认是flase）
如果是单个就是下面的：
$height: browsers-sprite-height(iconNew);  <br/>
$width: browsers-sprite-width(iconNew); <br/> 
.iconNew{<br/>
    height: $height; <br/> 
    width: $width;  <br/>
    @include browsers-sprite(iconNew);  <br/>
}<br/>
iconNew是png的名字<br/>
<br/>
第四：图片排列方式：<br/>
$browsers-layout: smart; // 拼接图片的方式 <br/>
smart:最紧密 <br/>
vertical:纵向排列（默认方式） <br/>
horizontal:横向排列 <br/>
diagonal:对角线排列<br/>
<br/>
第五：hover和active的图片（当然也可以手动编写）<br/>
选择器开关:<br/>
$disabled-magic-sprite-selectors: false;// 默认为true<br/>
可以通过iconNew_hover.png的形式进行命名，会编译成<br/>
.browsers-iconNew:hover, .browsers-iconNew.iconNew-hover {<br/>
  background-position: 0 -44px;<br/>
}<br/>
<br/>
第六：控制图片间隙<br/>
$browsers-spacing: 10px<br/>
<br/>
第七：清除过期的sprite<br/>
$browsers-clean-up: true/false;// 默认值为true<br/>
<br/>
第八：sprite的基础类（自定义名称）<br/>
$browsers-sprite-base-class: ".class-name";<br/>

第九：重复性：<br/>
$browsers-repeat: no-repeat/repeat-x;// 配置所有sprite的重复性，默认为no-repeat<br/>
$browsers-iconNew-repeat: no-repeat/repeat-x;//<br/> 配置单个sprite的重复性，默认继承$browsers-repeat的值，iconNew为其中一个精灵图片<br/>
<br/>
第十：位置<br/>
$browsers-position: 0px;// 配置所有sprite的位置，默认为0px<br/>
$browsers-iconNew-position: 0px;// 配置单个sprite的位置，默认继承$browsers-position的值，iconNew为其中一个精灵图片<br/>
<br/>
注意：配置选项要放在输出命令的上面，以上内容仅供参考<br/>
