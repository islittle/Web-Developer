注释：jQuery 文档操作方法 wangfeng 创建
这些方法对于 XML 文档和 HTML 文档均是适用的，除了：html()。
方法		描述

(1):addClass()		向匹配的元素添加指定的类名。

(2):after()		在匹配的元素之后插入内容。

(3):append()		向匹配元素集合中的每个元素结尾插入由参数指定的内容。

(4):appendTo()	向目标结尾插入匹配元素集合中的每个元素。

(5):attr()		设置或返回匹配元素的属性和值。
设置：$(selector).attr(attribute,value)         获取：$(selector).attr(attribute)

(6):before()	在每个匹配的元素之前插入内容。

(7):clone()		创建匹配元素集合的副本。
例如：
$("button").click(function(){
    $("body").append($("p").clone());
  });//复制每个 p 元素，然后追加到 body 元素
&lt;body&gt;
&lt;p&gt;This is a paragraph.&lt;/p&gt;
&lt;button&gt;复制每个 p 元素，然后追加到 body 元素&lt;/button&gt;
&lt;/body&gt;

(8):detach()	从 DOM 中移除匹配元素集合。	语法：$(selector).detach()

(9):empty()	删除匹配的元素集合中所有的子节点。  	语法和上面的一样。

(10):hasClass()	检查匹配的元素是否拥有指定的类。 语法：$(selector).hasClass(class)  返回true或false

(11):html()		设置或返回匹配的元素集合中的 HTML 内容。
$(selector).html() //当使用该方法返回一个值时，它会返回第一个匹配元素的内容。
$(selector).html(content)//当使用该方法设置一个值时，它会覆盖所有匹配元素的内容。
$(selector).html(function(index,oldcontent))//使用函数来设置所有匹配元素的内容。
例如：
$(document).ready(function(){
  $("button").click(function(){
    $("p").html(function(n){
    return "这个 p 元素的 index 是：" + n;
    });
  });
});
&lt;/script&gt;
&lt;body&gt;
&lt;p&gt;这是一个段落。&lt;/p&gt;
&lt;p&gt;这是另一个段落。&lt;/p&gt;
&lt;button&gt;改变 p 元素的内容&lt;/button&gt;
&lt;/body&gt;

(12):insertAfter()	把匹配的元素插入到另一个指定的元素集合的后面。

(13):insertBefore()	把匹配的元素插入到另一个指定的元素集合的前面。

(14):prepend()	向匹配元素集合中的每个元素开头插入由参数指定的内容。
{(内部）插入指定内容，可以用函数：$(selector).prepend(function(index,html))}
例如：
&lt;script type="text/javascript"&gt;
$(document).ready(function(){
  $("button").click(function(){
    $("p").prepend(function(n){
      return "&lt;b&gt;这个 p 元素的 index 是：" + n + "&lt;/b&gt; ";
    });
  });
});
&lt;/script&gt;
&lt;body&gt;
&lt;h1&gt;这是一个标题&lt;/h1&gt;
&lt;p&gt;这是一个段落。&lt;/p&gt;
&lt;p&gt;这是另一个段落。&lt;/p&gt;
&lt;button&gt;在每个 p 元素的开头插入内容&lt;/button&gt;
&lt;/body&gt;

(15):prependTo()	向目标开头插入匹配元素集合中的每个元素。{(内部）插入指定内容，不可以用函数}

(16):remove()	移除所有匹配的元素。

(17):removeAttr()	从所有匹配的元素中移除指定的属性。
例如：从任何 p 元素中移除 id 属性：
$("button").click(function(){
  $("p").removeAttr("id");
});

(18):removeClass()	从所有匹配的元素中删除全部或者指定的类。

(19):replaceAll()	用匹配的元素替换所有匹配到的元素。

(20):replaceWith()	用新内容替换匹配的元素。

(21):text()		设置或返回匹配元素的内容。 (也就是替换文本内容)

(22):toggleClass()	从匹配的元素中添加或删除一个类。
$(selector).toggleClass(class,switch)//对设置或移除被选元素的一个或多个类进行切换。请使用空格来分隔类名
$(selector).toggleClass(function(index,class),switch)//使用函数来切换类

(23):unwrap()	移除并替换指定元素的父元素。 语法：$(selector).unwrap()

(24):val()	设置或返回匹配元素的值。
例如：
&lt;script type="text/javascript"&gt;
$(document).ready(function(){
  $("button").click(function(){
    $(":text").val("Hello Kitty");//value的值更换为：Hello Kitty
  });
});
&lt;/script&gt;
&lt;body&gt;
&lt;p&gt;Name: &lt;input type="text" name="user" value="Hello World" /&gt;&lt;/p&gt;
&lt;button&gt;改变文本域的值&lt;/button&gt;
&lt;/body&gt;

(25):wrap()	把匹配的元素用指定的内容或元素包裹起来。
语法：$(selector).wrap(wrapper)
wrapper：必需。规定包裹被选元素的内容。
HTML 代码 - 比如 ("&lt;div&gt;&lt;/div&gt;")
新元素 - 比如 (document.createElement("div"))
已存在的元素 - 比如 ($(".div1"))
语法：$(selector).wrap(function())

(26):wrapAll()	把所有匹配的元素用指定的内容或元素包裹起来。
//用法同上

(27)wrapinner()	将每一个匹配的元素的子内容用指定的内容或元素包裹起来。
//用法同上
