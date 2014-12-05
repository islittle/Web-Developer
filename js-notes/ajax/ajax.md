注释：ajax现在已经被广泛的运用，它的好处也是有目共睹的，不对了解的小伙伴，我下面做了一个简单的总结，那我不多说，进入正题。(本文根据w3school改编 wangfeng)											
<h3>第一：创建对象</h3>													
var xmlhttp;						
if (window.XMLHttpRequest)									
  {// code for IE7+, Firefox, Chrome, Opera, Safari										
  xmlhttp=new XMLHttpRequest();					
  }				
else							
  {// code for IE6, IE5								
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");							
  }							
										  
<h3>第二：请求</h3>
<table class="dataintable">
<tbody><tr>
<th style="width:40%;">方法</th>
<th>描述</th>
</tr>

<tr>
<td>open(<i>method</i>,<i>url</i>,<i>async</i>)</td>
<td>
	<p>规定请求的类型、URL 以及是否异步处理请求。</p>
	<ul class="listintable">
	<li><i>method</i>：请求的类型；GET 或 POST</li>
	<li><i>url</i>：文件在服务器上的位置</li>
	<li><i>async</i>：true（异步）或 false（同步）</li>
	</ul>
	</td>
</tr>

<tr>
<td>send(<i>string</i>)</td>
<td>
	<p>将请求发送到服务器。</p>
	<ul class="listintable">
	<li><i>string</i>：仅用于 POST 请求</li>
	</ul>
</td>
</tr>
</tbody></table>
											
与 POST 相比，GET 更简单也更快，并且在大部分情况下都能用。<br/>						
在以下情况中，请使用 POST 请求：<br/>								
1.无法使用缓存文件（更新服务器上的文件或数据库）<br/>							
2.向服务器发送大量数据（POST 没有数据量限制）	<br/>				
3.发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠<br/>							
<br/>	<br/>										
GET请求 <br/>	                           
上面open中的url (一下url么有跨域，既在同一个域之内)<br/>	            
1.加?t=" + Math.random()是避免访问缓存<br/>	                    
2.加?fname=Little&lname=Wang" 向 URL 添加信息 对应字段添加对象<br/>	
<br/><br/>	                   
POST请求 <br/>	              
一个简单 POST 请求： <br/>	                         
xmlhttp.open("POST","demo_post.asp",true); <br/>	             
xmlhttp.send(); <br/>	
如果需要像 HTML 表单那样 POST 数据，请使用 setRequestHeader() 来添加 HTTP 头。然后在 send() 方法中规定您
希望发送的数据：  <br/>	        
xmlhttp.open("POST","ajax_test.asp",true);                              
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");                         
xmlhttp.send("fname=Bill&lname=Gates");                 
<table class="dataintable">
<tbody><tr>
<th style="width:40%;">方法</th>
<th>描述</th>
</tr>

<tr>
<td>setRequestHeader(<i>header</i>,<i>value</i>)</td>
<td>
	<p>向请求添加 HTTP 头。</p>
	<ul class="listintable">
	<li><i>header</i>: 规定头的名称</li>
	<li><i>value</i>: 规定头的值</li>
	</ul>
</td>
</tr>
</tbody></table>
<br/><br/>
上面的header和value这里简单介绍一下 <br/>	          
FORM元素的enctype属性指定了表单数据向服务器提交时所采用的编码类型，默认的缺省值是
“application/x-www-form-urlencoded”。 <br/>	                   
然而，在向服务器发送大量的文本、包含非ASCII字符的文本或二进制数据时这种编码方式效率很低。<br/>	           
在文件上载时，所使用的编码类型应当是“multipart/form-data”，它既可以发送文本数据，也支持二进制数据上载。  <br/>	
Browser端&lt;form&gt;表单的ENCTYPE属性值为multipart/form-data，它告诉我们传输的数据要用到多媒体传输协议，由于多媒体传输的都是大量的数据，所以规定上传文件必须是post方法，&lt;input&gt;的type属性必须是file。<br/>	       <br/><br/>    
url - 服务器上的文件<br/>						
open() 方法的 url 参数是服务器上文件的地址：<br/>							
xmlhttp.open("GET","ajax_test.asp",true);<br/>									
该文件可以是任何类型的文件，比如 .txt 和 .xml，或者服务器脚本文件，比如 .asp 和 .php<br/>			（在传回响应之前，能够在服务器上执行任务）。<br/>					
<br/><br/>		
异步 - True 或 False？<br/>										
XMLHttpRequest 对象如果要用于 AJAX 的话，其 open() 方法的 async 参数必须设置为 true。<br/>			
对于 web 开发人员来说，发送异步请求是一个巨大的进步。很多在服务器执行的任务都相当费时，AJAX出现之前，这可能会引起应用程序挂起或停止。	<br/>					
通过 AJAX，JavaScript 无需等待服务器的响应，而是：<br/>						
在等待服务器响应时执行其他脚本<br/>						
当响应就绪后对响应进行处理<br/>							
<br/>
Async = true<br/>	
当使用 async=true 时，请规定在响应处于 onreadystatechange 事件中的就绪状态时执行的函数：<br/>	
写法如下：<br/>											
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","test1.txt",true);
xmlhttp.send();

您将在稍后学习更多有关 onreadystatechange 的内容。<br/>		
				
Async = false	<br/>										
如需使用 async=false，请将 open() 方法中的第三个参数改为 false：<br/>						
xmlhttp.open("GET","test1.txt",false);<br/>									
(不推荐使用 async=false，但是对于一些小型的请求，也是可以的。)<br/>								
请记住:JavaScript 会等到服务器响应就绪才继续执行。如果服务器繁忙或缓慢，应用程序会挂起或停止。<br/>		
注释：当您使用 async=false 时，请不要编写 onreadystatechange 函数 - 把代码放到 send() 语句后面即可。<br/>			
写法如下：<br/>												
xmlhttp.open("GET","test1.txt",false);			
xmlhttp.send();				
document.getElementById("myDiv").innerHTML=xmlhttp.responseText;			
<br/>				
<h3>第三：服务器响应</h3>
如需获得来自服务器的响应，请使用 XMLHttpRequest 对象的 responseText 或 responseXML 属性。
<table class="dataintable">
<tbody><tr>
<th style="width:25%;">属性</th>
<th>描述</th>
</tr>

<tr>
<td>responseText</td>
<td>获得字符串形式的响应数据。</td>
</tr>

<tr>
<td>responseXML</td>
<td>获得 XML 形式的响应数据。</td>
</tr>
</tbody>
</table>
responseText 属性<br/>
如果来自服务器的响应并非 XML，请使用 responseText 属性。<br/>
responseText 属性返回字符串形式的响应，因此您可以这样使用：<br/>
document.getElementById("myDiv").innerHTML=xmlhttp.responseText;<br/>
<br/>
responseXML 属性<br/>
如果来自服务器的响应是 XML，而且需要作为 XML 对象进行解析，请使用 responseXML 属性：<br/>
请求 books.xml 文件，并解析响应：<br/>
xmlDoc=xmlhttp.responseXML;
txt="";
x=xmlDoc.getElementsByTagName("ARTIST");
for (i=0;i<x.length;i++)
  {
  txt=txt + x[i].childNodes[0].nodeValue + "<br />";
  }
document.getElementById("myDiv").innerHTML=txt;
<br/><br/>
x.firstchild.data:获取元素第一个子节点的数据，<br/>
x.childNodes[0]：:获取元素第一个子节点;<br/>
x.childNodes[0].nodeValue.:也是获取元素第一个子节点值的意思<br/>
另外在 DOM 处理中一个普遍的错误是，认为元素节点包含文本。<br/>
在这里澄清一下文本总是存储在文本节点中	<br/>
不过，元素节点的文本是存储在文本节点中的。<br/>
<br/>
说到了这里，那我举例几个取节点值的方法：<br/>
&lt;p &gt;这是<span>little1</span>测试用的段落&lt;/p &gt;<br/>
&lt;p &gt;这是<span id="thisout">little2</span>测试用的段落&lt;/p &gt;<br/>
&lt;p id="little"&gt;这是<span>little3</span>测试用的段落&lt;/p &gt;<br/>
&lt;button type="button" onclick="loadDoc()"&gt;取出节点值&lt;/button&gt;<br/>
function loadDoc(){<br/>
  var txt,x,y;<br/>
  txt="";<br/>
  x=document.getElementsByTagName("span");<br/>
  y=document.getElementById("little");<br/>
  console.log("第一个节点值"+x[0].firstChild.data)<br/>
  for (var i = 0; i < x.length; i++) {<br/>
    console.log("依次取出第"+i+"个节点值，一下三种方法都可以")<br/>
    console.log(x[i].firstChild.data);<br/>
    console.log(x[i].childNodes[0].nodeValue);<br/>
    console.log(x[i].innerHTML);<br/>
  };<br/>
  console.log("输出的是“这是”两个字："+y.childNodes[0].nodeValue);<br/>
}<br/>
<br/>
<h3>第四：readyState</h3>
当请求被发送到服务器时，我们需要执行一些基于响应的任务。
每当 readyState 改变时，就会触发 onreadystatechange 事件。
readyState 属性存有 XMLHttpRequest 的状态信息。<br>
下面是 XMLHttpRequest 对象的三个重要的属性：<br>
<table class="dataintable">
<tbody><tr>
<th style="width:25%;">属性</th>
<th>描述</th>
</tr>

<tr>
<td>onreadystatechange</td>
<td>存储函数（或函数名），每当 readyState 属性改变时，就会调用该函数。</td>
</tr>

<tr>
<td>readyState</td>
<td>
	<p>存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。</p>
	<ul class="listintable">
	<li>0: 请求未初始化</li>
	<li>1: 服务器连接已建立</li>
	<li>2: 请求已接收</li>
	<li>3: 请求处理中</li>
	<li>4: 请求已完成，且响应已就绪</li>
	</ul>
</td>
</tr>

<tr>
<td>status</td>
<td><p>200: "OK"</p><p>404: 未找到页面</p></td>
</tr>
</tbody></table>
在 onreadystatechange 事件中，我们规定当服务器响应已做好被处理的准备时所执行的任务。<br/>
注释：onreadystatechange 事件被触发 5 次（0 - 4），对应着 readyState 的每个变化。<br/>

使用 Callback 函数<br/>
callback 函数是一种以参数形式传递给另一个函数的函数。<br/>
如果网站上存在多个 AJAX 任务，那么您应该为创建 XMLHttpRequest 对象编写一个标准的函数，并为每个 AJAX 任务调用该函数。<br/>
该函数调用应该包含 URL 以及发生 onreadystatechange 事件时执行的任务（每次调用可能不尽相同）<br/>
var xmlhttp;<br/>
function loadXMLDoc(url,cfunc)<br/>
{<br/>
if (window.XMLHttpRequest)<br/>
  {// code for IE7+, Firefox, Chrome, Opera, Safari<br/>
  xmlhttp=new XMLHttpRequest();<br/>
  }<br/>
else<br/>
  {// code for IE6, IE5<br/>
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");<br/>
  }<br/>
xmlhttp.onreadystatechange=cfunc;<br/>
xmlhttp.open("GET",url,true);<br/>
xmlhttp.send();<br/>
}<br/>
function myFunction()<br/>
{<br/>
loadXMLDoc("/ajax/test1.txt",function()<br/>
  {<br/>
  if (xmlhttp.readyState==4 && xmlhttp.status==200)<br/>
    {<br/>
    document.getElementById("myDiv").innerHTML=xmlhttp.responseText;<br/>
    }<br/>
  });<br/>
}<br/>
function otherFunction()<br/>
{<br/>
loadXMLDoc("/ajax/test2.txt",function()<br/>
  {<br/>
  if (xmlhttp.readyState==4 && xmlhttp.status==200)<br/>
    {<br/>
    document.getElementById("otherDiv").innerHTML=xmlhttp.responseText;<br/>
    }<br/>
  });<br/>
}<br/>
<br/>

注释：到这里一个ajax的流程就算走完了。不知道你是不是还有什么疑惑，有疑惑的可以先百度一下，以上有不同意见者可以随时联系本人。谢谢。
