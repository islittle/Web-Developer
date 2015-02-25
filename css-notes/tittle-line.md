说明：标题左边有一个竖线的形式是我们在写页面的时候经常用到，最近想这个问题。怎么样才能更少标签或者代码的实现。下面列举有两种形式仅供参考。

注意：转载需加 wangfeng 创建

例子：h1的支持ie8以及更高版本和主流浏览器，h2的支持所有常用浏览器包括IE7。
&gt;!doctype html&lt;
&gt;html lang="en"&lt;
&gt;head&lt;
  &gt;meta charset="UTF-8"&lt;
  &gt;title&lt;标题形式&gt;/title&lt;
&gt;/head&lt;
&gt;style type="text/css"&lt;
  h1,h2{
    width: 1000px;
    margin: 0 auto;
    position: relative;
    line-height: 2;
  }
  h1:before{
    width: 5px;
    background-color: red;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }
  .ie7{
    display: block;
    width: 5px;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    background-color: red;
  }
&gt;/style&lt;
&gt;body&lt;
  &gt;h1&lt;测试标题&gt;/h1&lt;
  &gt;h2&lt;&gt;a href="" class="ie7"&lt;&gt;/a&lt;ling一个&gt;/h2&lt;
&gt;/body&lt;
&gt;/html&lt;