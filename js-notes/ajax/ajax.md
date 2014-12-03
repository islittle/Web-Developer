(本文根据w3school改编 wangfeng)
第一：创建对象
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
第二：请求
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
Browser端<form>表单的ENCTYPE属性值为multipart/form-data，它告诉我们传输的数据要用到多媒体传输协议，由于多媒体传输
的都是大量的数据，所以规定上传文件必须是post方法，<input>的type属性必须是file。                     

