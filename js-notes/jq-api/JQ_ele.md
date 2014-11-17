注释：jQuery事件API wangfeng创建        
      
一：bind()	向匹配元素附加一个或更多事件处理器     unbind()	从匹配元素移除一个被添加的事件处理器
$(selector).bind(event,data,function)
$(selector).bind({event:function, event:function, ...})
例如：even可以是多个事件
$(document).ready(function(){
    $("button").bind("click mouseenter",function(){
       $("p").slideToggle();
    });
});

二：blur()	触发、或将函数绑定到指定元素的 blur 事件
当元素失去焦点时发生 blur 事件。
$(selector).blur(function)
提示：早前，blur 事件仅发生于表单元素上。在新浏览器中，该事件可用于任何元素。

三：change()	触发、或将函数绑定到指定元素的 change 事件
$(selector).change(function)
当元素的值发生改变时，会发生 change 事件。
该事件仅适用于文本域（text field），以及 textarea 和 select 元素。
注释：当用于 select 元素时，change 事件会在选择某个选项时发生。当用于 text field 或 text area 时，该事件会在元素失去焦点时发生。

四：click()	触发、或将函数绑定到指定元素的 click 事件
$(selector).click(function)
当点击元素时，会发生 click 事件。
当鼠标指针停留在元素上方，然后按下并松开鼠标左键时，就会发生一次 click。

五：dblclick()	触发、或将函数绑定到指定元素的 double click 事件
$(selector).dblclick(function)
当双击元素时，会发生 dblclick 事件。
在很短的时间内发生两次 click，即是一次 double click 事件。
提示：如果把 dblclick 和 click 事件应用于同一元素，可能会产生问题。

六：delegate()	向匹配元素的当前或未来的子元素附加一个或多个事件处理器   undelegate()	从匹配元素移除一个被添加的事件处理器，现在或将来
$(selector).delegate(childSelector,event,data,function)
参数		描述
childSelector	必需。规定要附加事件处理程序的一个或多个子元素。
event        	必需。规定附加到元素的一个或多个事件。由空格分隔多个事件值。必须是有效的事件。
data		可选。规定传递到函数的额外数据。
function		必需。规定当事件发生时运行的函数。
例如：
$(document).ready(function(){
 $("div").delegate("button","click dbclick",function(){
    $("p").slideToggle();
  });
});

七：die()	移除所有通过 live() 函数添加的事件处理程序。（1.9中die和live都被删除。live用on来代替了。die用off）
$(selector).die(event,function)
die() 方法移除所有通过 live() 方法向指定元素添加的一个或多个事件处理程序。
例如：
$(document).ready(function(){
  $("p").live("click",function(){
    $(this).slideToggle();
  });
  $("button").click(function(){
    $("p").die(); //点击按钮，上面的live事件就会被移除没有效果
  });
});
在1.9中 .off( events [, selector ] [, handler ] )    一个或多个空格分隔的事件类型和可选的命名空间，或者只是名称
例如：$( "body" ).off( "click", "#theone", flash )；

Example: Remove all event handlers from all paragraphs:
$( "p" ).off();

Example: Remove all delegated click handlers from all paragraphs:
$( "p" ).off( "click", "**" );

Example: Remove just one previously bound handler by passing it as the third argument:
var foo = function() {
  // Code to handle some kind of event
};
// ... Now foo will be called when paragraphs are clicked ...
$( "body" ).on( "click", "p", foo );
 // ... Foo will no longer be called.
$( "body" ).off( "click", "p", foo );

Example: Unbind all delegated event handlers by their namespace:
var validate = function() {
  // Code to validate form entries
};
 
// Delegate events under the ".validator" namespace
$( "form" ).on( "click.validator", "button", validate );
$( "form" ).on( "keypress.validator", "input[type='text']", validate ); 
// Remove event handlers in the ".validator" namespace
$( "form" ).off( ".validator" );

七（2）：live()	为当前或未来的匹配元素添加一个或多个事件处理器（1.9以上用on来代替）
$(selector).live(event,data,function) 
由空格分隔多个事件。必须是有效的事件。
在1.9中用on用法和off一样
例如：
$("button").live("click mouseenter",function(){
    $("p").slideToggle();
  });
或者：
$( "div.test" ).on({
  click: function() {
    $( this ).toggleClass( "active" );
  }, mouseenter: function() {
    $( this ).addClass( "inside" );
  }, mouseleave: function() {
    $( this ).removeClass( "inside" );
  }
});

八：error()	触发、或将函数绑定到指定元素的 error 事件
$(selector).error(function)
当元素遇到错误（没有正确载入）时，发生 error 事件。
error() 方法触发 error 事件，或规定当发生 error 事件时运行的函数。
提示：该方法是 bind('error', handler) 的简写方式。
例如：图片没有加载
$(document).ready(function(){
  $("img").error(function(){
    $("img").replaceWith("&lt;p&gt;&lt;b&gt;图片未加载！&lt;/b&gt;&lt;/p&gt;");
  });
});

九：event.isDefaultPrevented()	返回 event 对象上是否调用了 event.preventDefault()。
event.isDefaultPrevented()
isDefaultPrevented() 方法返回指定的 event 对象上是否调用了 preventDefault() 方法。
preventDefault() 方法阻止元素发生默认的行为（例如，当点击提交按钮时阻止对表单的提交）。
$(document).ready(function(){
  $("a").click(function(event){
    event.preventDefault();  //阻止a链接
    alert("Default prevented: " + event.isDefaultPrevented()); //event.isDefaultPrevented()若调用了则返回为true
  });
});

十：event.pageX	相对于文档左边缘的鼠标位置。event.pageY      相对于文档上边缘的鼠标位置。
event.pageX event.pageY
pageX() 属性是鼠标指针的位置，相对于文档的左边缘。
pageY() 属性是鼠标指针的位置，相对于文档的上边缘。
例如：
$(document).ready(function(){
  $(document).mousemove(function(e){ 
    $("span").text("X: " + e.pageX + ", Y: " + e.pageY); //鼠标所在的位置显示xy的坐标
  });
});

十一：event.result	包含由被指定事件触发的事件处理器返回的最后一个值。
event.result
result 属性包含由被指定事件触发的事件处理器返回的最后一个值，除非这个值未定义。
例如：
&lt;body&gt;
&lt;p&gt;这是一个段落。&lt;/p&gt;
&lt;button&gt;请点击这里&lt;/button&gt;
&lt;/body&gt;
$(document).ready(function(){
  $("button").click(function(e) {
    return ("最后一次点击的鼠标位置是： X：" +e.pageX + ", Y：" + e.pageY);  
  });
  $("button").click(function(e) {
    $("p").html(e.result);	//返回最后一个值,讲原来的"这是一个段落"文字换成例如：”最后一次点击的鼠标位置是： ：59, Y：44“。html换成append就追加到后面了。
  });  
});

十二：event.target	触发该事件的 DOM 元素。
event.target
target 属性规定哪个 DOM 元素触发了该事件。
例如：
$("p, button, h1, h2").click(function(event){
  $("div").html("Triggered by a " + event.target.nodeName + " element.");			//event.target.nodeName会返回点击的元素值p,button,h1,h2
});

十三：event.timeStamp	该属性返回从 1970 年 1 月 1 日到事件发生时的毫秒数。
event.timeStamp
timeStamp 属性包含从 1970 年 1 月 1 日到事件被触发时的毫秒数。
例如：
$(document).ready(function(){
  $("button").click(function(e){
    $("span").text(e.timeStamp);
  });
});
&lt;body&gt;
&lt;p&gt;对下面这个按钮的点击事件发生在 1970 年 1 月 1 日之后 &lt;span&gt;unknown&lt;/span&gt; 毫秒。&lt;/p&gt;
&lt;button&gt;Click me&lt;/button&gt;
&lt;/body&gt;

十四：event.type	描述事件的类型。
event.type
type 属性描述触发哪种事件类型。
例如：显示触发了哪种类型的事件：
$("p").bind('click dblclick mouseover mouseout',function(event){
  $("div").html("Event: " + event.type);
});
注意：hover经测试不可以

十五：event.which	指示按了哪个键或按钮。 对应键盘的上的按键的位置

十六：focus()	触发、或将函数绑定到指定元素的 focus 事件
$(selector).focus(function)
当元素获得焦点时，发生 focus 事件。
当通过鼠标点击选中元素或通过 tab 键定位到元素时，该元素就会获得焦点。

十七：keydown()，keyup()，keypress() 触发、或将函数绑定到指定元素的 key down，up，press 事件
$(selector).keydown(function)其他同理
当按钮被按下时，发生 keydown 事件
当按钮被松开时，发生 keyup 事件。它发生在当前获得焦点的元素上。
完整的 key press 过程分为两个部分：1. 按键被按下；2. 按键被松开。
注释：如果在文档元素上进行设置，则无论元素是否获得焦点，该事件都会发生。

十八：load()	触发、或将函数绑定到指定元素的 load 事件  unload()	触发、或将函数绑定到指定元素的 unload 事件
$(selector).load(function)
当指定的元素（及子元素）已加载时，会发生 load() 事件。
该事件适用于任何带有 URL 的元素（比如图像、脚本、框架、内联框架）。
根据不同的浏览器（Firefox 和 IE），如果图像已被缓存，则也许不会触发 load 事件。
例如：
$(document).ready(function(){
  $("img").load(function(){
    $("div").text("图像已加载");
  });
});
&lt;body&gt;
&lt;img src="/i/shanghai_lupu_bridge.jpg" /&gt;
&lt;div&gt;图像正在加载中 ...&lt;/div&gt;
&lt;p&gt;&lt;b&gt;注释：&lt;/b&gt;根据不同的浏览器（Firefox 和 IE），如果图像已被缓存，则也许不会触发 load 事件。&lt;/p&gt;
&lt;/body&gt;

十七：鼠标事件  不详解  $(selector).even()
（1）mousedown()	触发、或将函数绑定到指定元素的 mouse down 事件
当鼠标指针移动到元素上方，并按下鼠标按键时，会发生 mousedown 事件。
与 click 事件不同，mousedown 事件仅需要按键被按下，而不需要松开即可发生。

（2）mouseenter()	触发、或将函数绑定到指定元素的 mouse enter 事件
当鼠标指针穿过元素时，会发生 mouseenter 事件。该事件大多数时候会与 mouseleave 事件一起使用。
注释：与 mouseover 事件不同，只有在鼠标指针穿过被选元素时，才会触发 mouseenter 事件。如果鼠标指针穿过任何子元素，同样会触发 mouseover 事件。

（3）mouseleave()	触发、或将函数绑定到指定元素的 mouse leave 事件
当鼠标指针离开元素时，会发生 mouseleave 事件。注释：与 mouseout 事件不同，只有在鼠标指针离开被选元素时，才会触发 mouseleave 事件。如果鼠标指针离开任何子元素，同样会触发 mouseout 事件。

（4）mousemove()	触发、或将函数绑定到指定元素的 mouse move 事件
当鼠标指针在指定的元素中移动时，就会发生 mousemove 事件。

（5）mouseout()	触发、或将函数绑定到指定元素的 mouse out 事件

（6）mouseover()	触发、或将函数绑定到指定元素的 mouse over 事件

（7）mouseup()	触发、或将函数绑定到指定元素的 mouse up 事件
当在元素上放松鼠标按钮时，会发生 mouseup 事件。

十八：one()	向匹配元素添加事件处理器。每个元素只能触发一次该处理器。
$(selector).one(event,data,function)
由空格分隔多个事件。必须是有效的事件。
one() 方法为被选元素附加一个或多个事件处理程序，并规定当事件发生时运行的函数。

十九：ready()	文档就绪事件（当 HTML 文档就绪可用时）
允许使用以下三种语法：
语法 1
$(document).ready(function)
语法 2
$().ready(function)
语法 3
$(function)

二十：resize()	触发、或将函数绑定到指定元素的 resize 事件
$(selector).resize(function)
当调整浏览器窗口的大小时，发生 resize 事件。
例如：对浏览器窗口调整大小进行计数：
$(window).resize(function() {
  $('span').text(x+=1);
});

二十一：scroll()	触发、或将函数绑定到指定元素的 scroll 事件
$(selector).scroll()
scroll 事件适用于所有可滚动的元素和 window 对象（浏览器窗口）。

二十三：select()	触发、或将函数绑定到指定元素的 select 事件
$(selector).select(function)
例如：在文本域后添加文本，以显示出提示文本：
$("input").select(function(){
  $("input").after(" Text marked!");
});

二十四：submit()	触发、或将函数绑定到指定元素的 submit 事件
$(selector).submit()
当提交表单时，会发生 submit 事件。
该事件只适用于表单元素。
例如：当提交表单时，显示警告框：
$("form").submit(function(e){
  alert("Submitted");
});

二十五：toggle()	绑定两个或多个事件处理器函数，当发生轮流的 click 事件时执行。（1.9中被移除）
$(selector).toggle(function1(),function2(),functionN(),...)
toggle() 方法用于绑定两个或多个事件处理器函数，以响应被选元素的轮流的 click 事件。
该方法也可用于切换被选元素的 hide() 与 show() 方法：$(selector).toggle(speed,callback)
规定是否只显示或只隐藏所有匹配的元素：$(selector).toggle(switch)

二十六：trigger()	所有匹配元素的指定事件
$(selector).trigger(event,[param1,param2,...])
trigger() 方法触发被选元素的指定事件类型。
例如：触发 input 元素的 select 事件：
$("button").click(function(){
  $("input").trigger("select");
});

二十六（2）triggerHandler()	第一个被匹配元素的指定事件
triggerHandler() 方法触发被选元素的指定事件类型。但不会执行浏览器默认动作，也不会产生事件冒泡。

与 trigger() 方法相比的不同之处：：：：：：：
它不会引起事件（比如表单提交）的默认行为
.trigger() 会操作 jQuery 对象匹配的所有元素，而 .triggerHandler() 只影响第一个匹配元素。
由 .triggerHandler() 创建的事件不会在 DOM 树中冒泡；如果目标元素不直接处理它们，则不会发生任何事情。
该方法的返回的是事件处理函数的返回值，而不是具有可链性的 jQuery 对象。此外，如果没有处理程序被触发，则这个方法返回 undefined。
例如：
&lt;html&gt;
&lt;head&gt;
&lt;script type="text/javascript" src="/jquery/jquery.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript"&gt;
$(document).ready(function(){
  $("input").select(function(){
    $("input").after("发生 Input select 事件！");
  });
  $("button").click(function(){
    $("input").triggerHandler("select"); //点击一次按钮时输出一次文字，但是改成trigger会输出二次
  });
});
&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;input type="text" name="FirstName" value="Hello World" /&gt;
&lt;br /&gt;  
&lt;button&gt;激活 input 域的 select 事件&lt;/button&gt;
&lt;p&gt;请注意，与 trigger() 方法不同，triggerHandler() 方法不会引起所发生事件的默认行为（文本不会被选中）。&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
