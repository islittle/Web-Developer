注释：在编译sass的时候，我遇到了一下问题。并附带了解决方案，正确与否先不说，但是达到了我想要的结果。<br/>
<br/>
注意：转载 wangfeng 创建

<h3>第一：兼容ie7以下的hack没有编译出来</h3>
下面举一个简单的例子，其他都一样：<br/>
sass库中是这样定义的：<br/>
<p style="background:#333;paddding:20px;">
@mixin clearfix ($extend:true) {<br/>
  @if $extend {<br/>
    @extend %clearfix;<br/>
  } @else {<br/>
    @if $lte7 {<br/>
      *zoom: 1;<br/>
    }<br/>
    &:before,<br/>
    &:after {<br/>
      content: "";<br/>
      display: table;<br/>
    }<br/>
    &:after {<br/>
      clear: both;<br/>
    }<br/>
  }<br/>
}<br/>
%clearfix{<br/>
  @include clearfix(false);<br/>
}<br/>
</p>
运用：<br/>
<p style="background:#333;paddding:20px;">
.clearfix{<br/>
	@extend %clearfix;<br/>
}<br/>
</p>
结果：<br/>
<p style="background:#333;paddding:20px;">
.clearfix:before, .clearfix:after {<br/>
  content: "";<br/>
  display: table; }<br/>
.clearfix:after {<br/>
  clear: both; }<br/>
</p>
但是我们发现少了，IE7的hasLayout属性；解决办法：<br/>
加上“$lte7:true;”<br/>
<p style="background:#333;paddding:20px;">
.clearfix {<br/>
  *zoom: 1; }<br/>
.clearfix:before, .clearfix:after {<br/>
  content: "";<br/>
  display: table; }<br/>
.clearfix:after {<br/>
  clear: both; }<br/>
</p>
你会发现多了一行IE的hack。

<h3>第二：编译的时候伪类因为权重最低，所以会编译到最顶</h3>
个人觉得不是很美观在reset下面会更好，所以运用时做了一下修改。<br/>
<p style="background:#333;paddding:20px;">
.clearfix{<br/>
	@include clearfix(false);<br/>
}<br/>
</p>
编译的结果就能看到在所以reset文件编译后的下面。<br/>
