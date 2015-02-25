说明：标题左边有一个竖线的形式是我们在写页面的时候经常用到，最近想这个问题。怎么样才能更少标签或者代码的实现。下面列举有两种形式仅供参考。

注意：转载需加 wangfeng 创建

例子：h1的支持ie8以及更高版本和主流浏览器，h2的支持所有常用浏览器包括IE7。
&lt;!doctype html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;标题形式&lt;/title&gt;
&lt;/head&gt;
&lt;style type="text/css"&gt;
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
&lt;/style&gt;
&lt;body&gt;
  &lt;h1&gt;测试标题&lt;/h1&gt;
  &lt;h2&gt;&lt;a href="" class="ie7"&gt;&lt;/a&gt;ling一个&lt;/h2&gt;
&lt;/body&gt;
&lt;/html&gt;