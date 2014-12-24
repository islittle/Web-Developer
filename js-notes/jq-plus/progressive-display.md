注释：一个简单的逐行显示内容,有问题请联系。
<br/>
注意：转载 需加 wangfeng 创建

<h1>逐行显示内容</h1>

&lt;html&gt;<br/>
&lt;head&gt;<br/>
    &lt;meta charset="utf-8"&gt;<br/>
&lt;title&gt;逐行显示&lt;/title&gt;<br/>
&lt;script type="text/javascript" src="http://code.jquery.com/jquery-1.11.1.js"&gt;&lt;/script&gt;<br/>
&lt;script language="javascript"&gt;<br/>
//auth:little<br/>
//date:2014/12/24<br/>
$(function(){<br/>
    var showC_li=$('#txt li');<br/>
    var showC_li_Num=showC_li.length-1;<br/>
    var showC_Nav_Num =0;<br/>
    function showC_M(Num){<br/>
             showC_li.eq(Num).css('visibility', 'visible ').siblings('li').css('visibility', 'hidden ');<br/>
             if ( showC_li.eq(Num).is(':visible ')) {<br/>
                for (var i = 0; i &lt;= Num; i++) {<br/>
                   showC_li.eq(i).css('visibility', 'visible ');<br/>
                };<br/>
             };<br/>
        }<br/>
    showC_M(showC_Nav_Num); <br/>       
    showC_Ter=setInterval(showC_Auto,1000);<br/>
    function showC_Auto(){<br/>
            showC_Nav_Num=(showC_Nav_Num==showC_li_Num)?showC_li_Num:++showC_Nav_Num; <br/>
            showC_M(showC_Nav_Num);<br/>
            }<br/>
    })<br/>
&lt;/script&gt;<br/>
&lt;style type="text/css"&gt;<br/>
    *{ padding: 0; margin: 0;}<br/>
    ul,li{list-style: none; width:<br/> 100%; float: left;}<br/>
    li{visibility:hidden; height: 30px; line-height: 30px; background-color: #666666; color: #ffffff; text-align: center; border-bottom: 1px solid #999999;}<br/>
&lt;/style&gt;<br/>
&lt;/head&gt;<br/>
&lt;body&gt;<br/>
&lt;ul id="txt"&gt;<br/>
     &lt;li&gt;scrollpaginationdemo1&lt;/li&gt;<br/>
     &lt;li&gt;scrollpaginationdemo2&lt;/li&gt;<br/>
     &lt;li&gt;scrollpaginationdemo3&lt;/li&gt;<br/>
     &lt;li&gt;scrollpaginationdemo4&lt;/li&gt;<br/>
     &lt;li&gt;scrollpaginationdemo5&lt;/li&gt;<br/>
     &lt;li&gt;scrollpaginationdemo6&lt;/li&gt;<br/>
     &lt;li&gt;scrollpaginationdemo7&lt;/li&gt;<br/>
     &lt;li&gt;scrollpaginationdemo8&lt;/li&gt;<br/>
&lt;/ul&gt;<br/>
&lt;/body&gt;<br/>
&lt;/html&gt;<br/>
