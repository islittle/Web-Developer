(本文根据w3school改编 wangfeng)											
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
											
与 POST 相比，GET 更简单也更快，并且在大部分情况下都能用。						
在以下情况中，请使用 POST 请求：							
1.无法使用缓存文件（更新服务器上的文件或数据库）						
2.向服务器发送大量数据（POST 没有数据量限制）				
3.发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠						
									
GET请求                            
上面open中的url                   
1.加?t=" + Math.random()是避免访问缓存                    
2.加?fname=Little&lname=Wang" 向 URL 添加信息 对应字段添加对象
                      
POST请求                    
一个简单 POST 请求：                          
xmlhttp.open("POST","demo_post.asp",true);              
xmlhttp.send();                     
如果需要像 HTML 表单那样 POST 数据，请使用 setRequestHeader() 来添加 HTTP 头。然后在 send() 方法中规定您
希望发送的数据：          
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

上面的header和value这里简单介绍一下             
FORM元素的enctype属性指定了表单数据向服务器提交时所采用的编码类型，默认的缺省值是
“application/x-www-form-urlencoded”。                       
然而，在向服务器发送大量的文本、包含非ASCII字符的文本或二进制数据时这种编码方式效率很低。           
在文件上载时，所使用的编码类型应当是“multipart/form-data”，它既可以发送文本数据，也支持二进制数据上载。     
Browser端&lt;form&gt;表单的ENCTYPE属性值为multipart/form-data，它告诉我们传输的数据要用到多媒体传输协议，由于多媒体传输
的都是大量的数据，所以规定上传文件必须是post方法，&lt;input&gt;的type属性必须是file。                     

url - 服务器上的文件						
open() 方法的 url 参数是服务器上文件的地址：						
xmlhttp.open("GET","ajax_test.asp",true);									
该文件可以是任何类型的文件，比如 .txt 和 .xml，或者服务器脚本文件，比如 .asp 和 .php					 （在传回响应之前，能够在服务器上执行任务）。				
											
异步 - True 或 False？												
XMLHttpRequest 对象如果要用于 AJAX 的话，其 open() 方法的 async 参数必须设置为 true。				
对于 web 开发人员来说，发送异步请求是一个巨大的进步。很多在服务器执行的任务都相当费时，AJAX出现之前，这可能会引起应用程序挂起或停止。							
通过 AJAX，JavaScript 无需等待服务器的响应，而是：					
在等待服务器响应时执行其他脚本					
当响应就绪后对响应进行处理						

Async = true
当使用 async=true 时，请规定在响应处于 onreadystatechange 事件中的就绪状态时执行的函数：
写法如下：										
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","test1.txt",true);
xmlhttp.send();

您将在稍后学习更多有关 onreadystatechange 的内容。	
				
Async = false										
如需使用 async=false，请将 open() 方法中的第三个参数改为 false：								
xmlhttp.open("GET","test1.txt",false);						
(不推荐使用 async=false，但是对于一些小型的请求，也是可以的。)							
请记住:JavaScript 会等到服务器响应就绪才继续执行。如果服务器繁忙或缓慢，应用程序会挂起或停止。
注释：当您使用 async=false 时，请不要编写 onreadystatechange 函数 - 把代码放到 send() 语句后面即可。		
写法如下：											
xmlhttp.open("GET","test1.txt",false);			
xmlhttp.send();				
document.getElementById("myDiv").innerHTML=xmlhttp.responseText;			
				
<h3>服务器响应</h3>
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
</tbody></table>
