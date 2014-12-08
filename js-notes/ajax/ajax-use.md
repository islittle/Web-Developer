说明：当掌握了那个ajax的基本流程和作用，那么就可以尽情发挥的运用了。下面我们运用到实际当中，一个和后台交互，包括和数据组，xml文
件，话不多说。

注意：转载需加 wangfeng 创建

<h3>第一：和后台定义交互</h3>
前台文件：<br/>
<p>
&lt;html&gt;<br/>
&lt;meta charset="utf-8"&gt;<br/>
&lt;head&gt;<br/>

&lt;/head&gt;<br/>
&lt;body&gt;<br/>
&lt;h3&gt;请在下面的输入框中键入文字（我在测试php！）：&lt;/h3&gt;<br/>
&lt;form action=""&gt; <br/>
姓氏：&lt;input type="text" id="txt1" onkeyup="showHint(this.value)" /&gt;<br/>
&lt;/form&gt;<br/>
&lt;p&gt;建议：&lt;span id="txtHint"&gt;&lt;/span&gt;&lt;/p&gt; <br/>
&lt;/body&gt;<br/>
&lt;/html&gt;<br/>
&lt;script type="text/javascript"&gt;<br/>
function showHint(str)<br/>
{<br/>
var xmlhttp;<br/>
//判断字符串为空，则返回为空<br/>
if (str.length==0)<br/>
  {<br/>
  document.getElementById("txtHint").innerHTML="";<br/>
  return;<br/>
  }<br/>
if (window.XMLHttpRequest)<br/>
  {// code for IE7+, Firefox, Chrome, Opera, Safari<br/>
  xmlhttp=new XMLHttpRequest();<br/>
  }<br/>
else<br/>
  {// code for IE6, IE5<br/>
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");<br/>
  }<br/>
xmlhttp.onreadystatechange=function()<br/>
  {<br/>
  if (xmlhttp.readyState==4 && xmlhttp.status==200)<br/>
    {<br/>
    //调用文本类型的数据<br/>
    document.getElementById("txtHint").innerHTML=xmlhttp.responseText;<br/>
    }<br/>
  }<br/>
xmlhttp.open("GET","githint.php?q="+str,true);<br/>
xmlhttp.send();<br/>
}<br/>
&lt;/script&gt;
</p>
后台文件(php)：
<p>
&lt;?php<br/>
$a[]="我";<br/>
$a[]="我在";<br/>
$a[]="我在测";<br/>
$a[]="我在测试";<br/>
$a[]="我在测试php";<br/>
$a[]="我在测试php！";<br/>
<br/>
//获得来自 URL 的 q 参数<br/>
$q=$_GET["q"];<br/>
<br/>
//如果 q 大于 0，则查找数组中的所有提示<br/>
if (strlen($q) > 0)<br/>
  {<br/>
  //定义初始化变量<br/>
  $hint="";<br/>
  //循环数组<br/>
  for($i=0; $i<count($a); $i++)<br/>
    {<br/>
      //对比<br/>
    if ($q ==substr($a[$i],0,strlen($q)))<br/>
      {<br/>
      if ($hint=="")<br/>
        {<br/>
        $hint=$a[$i];<br/>
        }<br/>
      else<br/>
        {<br/>
        $hint=$hint." , ".$a[$i];<br/>
        }<br/>
      }<br/>
    }<br/>
  }<br/>
<br/>
// 如果未找到提示，则把输出设置为 "no suggestion"<br/>
// 否则设置为正确的值<br/>
if ($hint == "")<br/>
  {<br/>
  $response="未找到你需要的信息";<br/>
  }<br/>
else<br/>
  {<br/>
  $response=$hint;<br/>
  }<br/>
<br/>
//输出响应<br/>
echo $response;<br/>
?&gt;<br/>
</p>

<h3>第二：和数据库的交互</h3>
前台文件：
<p>
&lt;html&gt;<br/>
&lt;meta charset="utf-8"&gt;<br/>
&lt;head&gt;<br/>
&lt;/head&gt;<br/>
&lt;body&gt;<br/>

&lt;form&gt; <br/>
Select a User:<br/>
&lt;select name="users" onchange="showUser(this.value)"&gt;<br/>
&lt;option value="1"&gt;Peter Griffin&lt;/option&gt;<br/>
&lt;option value="2"&gt;Lois Griffin&lt;/option&gt;<br/>
&lt;option value="3"&gt;Glenn Quagmire&lt;/option&gt;<br/>
&lt;option value="4"&gt;Joseph Swanson&lt;/option&gt;<br/>
&lt;/select&gt;<br/>
&lt;/form&gt;<br/>

&lt;p&gt;<br/>
&lt;div id="txtHint"&gt;&lt;b&gt;User info will be listed here.&lt;/b&gt;&lt;/div&gt;<br/>
&lt;/p&gt;<br/>

&lt;/body&gt;<br/>
&lt;/html&gt;<br/>
&lt;script type="text/javascript"&gt;<br/>
var xmlHttp;<br/>
function showUser(str)<br/>
{ <br/>
xmlHttp=GetXmlHttpObject();<br/>
if (xmlHttp==null)<br/>
 {<br/>
 alert ("Browser does not support HTTP Request");<br/>
 return;<br/>
 }<br/>
var url="ajax-php-sql.php";<br/>
//参数传递<br/>
url=url+"?q="+str;<br/>
//避免访问缓存<br/>
url=url+"&sid="+Math.random();<br/>
//存储函数<br/>
xmlHttp.onreadystatechange=stateChanged ;<br/>
xmlHttp.open("GET",url,true);<br/>
xmlHttp.send(null);<br/>
}<br/>
//存储函数<br/>
function stateChanged() <br/>
{ <br/>
if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")<br/>
 {<br/> 
 document.getElementById("txtHint").innerHTML=xmlHttp.responseText;<br/>
 }<br/> 
}<br/>
<br/>
function GetXmlHttpObject()<br/>
{<br/>
var xmlHttp=null;<br/>
try<br/>
 {<br/>
 // Firefox, Opera 8.0+, Safari<br/>
 xmlHttp=new XMLHttpRequest();<br/>
 }<br/>
catch (e)<br/>
 {<br/>
 //Internet Explorer<br/>
 try<br/>
  {<br/>
  xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");<br/>
  }<br/>
 catch (e)<br/>
  {<br/>
  xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");<br/>
  }<br/>
 }<br/>
return xmlHttp;<br/>
}<br/>
&lt;/script&gt;<br/>
</p>

后台文件：
<p>
&lt;?php<br/>
//参数传递<br/>
$q=$_GET["q"];<br/>
//链接数据库服务器<br/>
$con = mysql_connect('localhost', 'peter', 'abc123');<br/>
//判断是否链接成功<br/>
if (!$con)<br/>
 {<br/>
 die('Could not connect: ' . mysql_error());<br/>
 }<br/>
//选择数据库<br/>
mysql_select_db("ajax_demo", $con);<br/>
//执行查询语句<br/>
$sql="SELECT * FROM user WHERE id = '".$q."'";<br/>
<br/>
$result = mysql_query($sql);<br/>
//从查询返回的结果集中提取数据<br/>
echo "&lt;table border='1'&gt;<br/>
&lt;tr&gt;<br/>
&lt;th&gt;Firstname&lt;/th&gt;<br/>
&lt;th&gt;Lastname&lt;/th&gt;<br/>
&lt;th&gt;Age&lt;/th&gt;<br/>
&lt;th&gt;Hometown&lt;/th&gt;<br/>
&lt;th&gt;Job&lt;/th&gt;<br/>
&lt;/tr&gt;";<br/>
<br/>
while($row = mysql_fetch_array($result))<br/>
 {<br/>
 echo "&lt;tr&gt;";<br/>
 echo "&lt;td&gt;" . $row['FirstName'] . "&lt;/td&gt;";<br/>
 echo "&lt;td&gt;" . $row['LastName'] . "&lt;/td&gt;";<br/>
 echo "&lt;td&gt;" . $row['Age'] . "&lt;/td&gt;";<br/>
 echo "&lt;td&gt;" . $row['Hometown'] . "&lt;/td&gt;";<br/>
 echo "&lt;td&gt;" . $row['Job'] . "&lt;/td&gt;";<br/>
 echo "&lt;/tr&gt;";<br/>
 }<br/>
echo "&lt;/table&gt;";<br/>
//释放结果对象以及断开连接<br/>
mysql_close($con);<br/>
?&gt;<br/>
</p><br/>


