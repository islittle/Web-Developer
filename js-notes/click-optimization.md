说明：大家有没有遇到一个问题。就是有些用户会不停得点击某个按钮触发某个事件，造成对我们服务器不停得访问，有时甚至造成用户自己的浏
览器死掉的情况，更可气的有时获取验证码如果后台或者前台不处理，会造成一直触发对企业是一个很大的损失。下面我们来探讨一下有什么方法
可以优化这个情况吧。

注释：转载 标注 wangfeng 创建

1.防止用户短时间内多次点击多次触发事件
举例如下：点击一次后，5秒内点击不触发被绑事件
&lt;!doctype html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
	&lt;meta charset="UTF-8"&gt;
	&lt;title&gt;Document&lt;/title&gt;
	&lt;script type="text/javascript" src="http://code.jquery.com/jquery-1.11.1.js"&gt; &lt;/script&gt;		
	&lt;script type="text/javascript"&gt;					
		$(function(){			
			function abc(){				
				$('#click').off('click',abc); //解绑清除事件			
				setTimeout(function(){$('#click').on('click',abc);},5000); 								              //5秒后再绑定触发事件，5秒内用户点击无效				
				};				
				$('#click').on('click',abc);				
		})				
	&lt;/script&gt;				
&lt;/head&gt;			
&lt;body&gt;				
	&lt;button id="click"&gt;click&lt;/button&gt;				
&lt;/body&gt;				
&lt;/html&gt;				
2.优化客户体现给用户一个提示事件										
function abc(){					
	$('#click').off('click',abc); //解绑事件				
	//下面设置一个5秒的倒计时比上面的体现更好				
	var tmp = 5,				
	interval = setInterval(function(){				
		$("#click").html(''+tmp.toString()+'后再点击');				
		tmp--;				
		if(tmp===0){				
			clearInterval(interval,$('#click').on('click',abc));				
			$("#click").html('click');				
		}							
	},1000);				
};				
$('#click').on('click',abc);				
