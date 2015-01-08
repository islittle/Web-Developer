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
$height: browsers-sprite-height(iconNew);  <br/>
$width: browsers-sprite-width(iconNew); <br/> 
.iconNew{<br/>
    height: $height; <br/> 
    width: $width;  <br/>
    @include browsers-sprite(iconNew);  <br/>
}<br/>
iconNew是png的名字<br/>
<br/>
第四：hover和active的图片（当然也可以手动编写）<br/>
可以通过iconNew_hover.png的形式进行命名，会编译成<br/>
.browsers-iconNew:hover, .browsers-iconNew.iconNew-hover {<br/>
  background-position: 0 -44px;<br/>
}<br/>
<br/>

其他的功能还没结束到，能有了好再修改。目前有欠缺。
