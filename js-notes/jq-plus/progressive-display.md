注释：一个简单的逐行显示内容,有问题请联系。
<br/>
注意：转载 需加 wangfeng 创建

<h1>逐行显示内容</h1>

&lt;html&gt;
&lt;head&gt;
    &lt;meta charset="utf-8"&gt;
&lt;title&gt;逐行显示&lt;/title&gt;
&lt;script type="text/javascript" src="http://code.jquery.com/jquery-1.11.1.js"&gt;&lt;/script&gt;
&lt;script language="javascript"&gt;
//auth:little
//date:2014/12/24
$(function(){
    var showC_li=$('#txt li');
    var showC_li_Num=showC_li.length-1;
    var showC_Nav_Num =0;
    function showC_M(Num){
             showC_li.eq(Num).css('visibility', 'visible ').siblings('li').css('visibility', 'hidden ');
             if ( showC_li.eq(Num).is(':visible ')) {
                for (var i = 0; i &lt;= Num; i++) {
                   showC_li.eq(i).css('visibility', 'visible ');
                };
             };
        }
    showC_M(showC_Nav_Num);        
    showC_Ter=setInterval(showC_Auto,1000);
    function showC_Auto(){
            showC_Nav_Num=(showC_Nav_Num==showC_li_Num)?showC_li_Num:++showC_Nav_Num; 
            showC_M(showC_Nav_Num);
            }
    })
//--&gt;
&lt;/script&gt;
&lt;style type="text/css"&gt;
    *{ padding: 0; margin: 0;}
    ul,li{list-style: none; width: 100%; float: left;}
    li{visibility:hidden; height: 30px; line-height: 30px; background-color: #666666; color: #ffffff; text-align: center; border-bottom: 1px solid #999999;}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;ul id="txt"&gt;
     &lt;li&gt;scrollpaginationdemo1&lt;/li&gt;
     &lt;li&gt;scrollpaginationdemo2&lt;/li&gt;
     &lt;li&gt;scrollpaginationdemo3&lt;/li&gt;
     &lt;li&gt;scrollpaginationdemo4&lt;/li&gt;
     &lt;li&gt;scrollpaginationdemo5&lt;/li&gt;
     &lt;li&gt;scrollpaginationdemo6&lt;/li&gt;
     &lt;li&gt;scrollpaginationdemo7&lt;/li&gt;
     &lt;li&gt;scrollpaginationdemo8&lt;/li&gt;
&lt;/ul&gt;
&lt;/body&gt;
&lt;/html&
