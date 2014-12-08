说明：当掌握了那个ajax的基本流程和作用，那么就可以尽情发挥的运用了。下面我们运用到实际当中，一个和后台交互，包括和数据组，xml文
件，话不多说。

注意：转载需加 wangfeng 创建

<h3>第一：和后台定义交互</h3>
前台文件：<br/>
<p>
&lt;html&gt;
&lt;meta charset="utf-8"&gt;
&lt;head&gt;

&lt;/head&gt;
&lt;body&gt;
&lt;h3&gt;请在下面的输入框中键入文字（我在测试php！）：&lt;/h3&gt;
&lt;form action=""&gt; 
姓氏：&lt;input type="text" id="txt1" onkeyup="showHint(this.value)" /&gt;
&lt;/form&gt;
&lt;p&gt;建议：&lt;span id="txtHint"&gt;&lt;/span&gt;&lt;/p&gt; 
&lt;/body&gt;
&lt;/html&gt;
&lt;script type="text/javascript"&gt;
function showHint(str)
{
var xmlhttp;
//判断字符串为空，则返回为空
if (str.length==0)
  {
  document.getElementById("txtHint").innerHTML="";
  return;
  }
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    //调用文本类型的数据
    document.getElementById("txtHint").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","githint.php?q="+str,true);
xmlhttp.send();
}
&lt;/script&gt;
</p>
后台文件(php)：
<p>
&lt;?php
$a[]="我";
$a[]="我在";
$a[]="我在测";
$a[]="我在测试";
$a[]="我在测试php";
$a[]="我在测试php！";

//获得来自 URL 的 q 参数
$q=$_GET["q"];

//如果 q 大于 0，则查找数组中的所有提示
if (strlen($q) > 0)
  {
  //定义初始化变量
  $hint="";
  //循环数组
  for($i=0; $i<count($a); $i++)
    {
      //对比
    if ($q ==substr($a[$i],0,strlen($q)))
      {
      if ($hint=="")
        {
        $hint=$a[$i];
        }
      else
        {
        $hint=$hint." , ".$a[$i];
        }
      }
    }
  }

// 如果未找到提示，则把输出设置为 "no suggestion"
// 否则设置为正确的值
if ($hint == "")
  {
  $response="未找到你需要的信息";
  }
else
  {
  $response=$hint;
  }

//输出响应
echo $response;
?&gt;
</p>
