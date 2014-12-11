说明：垂直居中网上已经有很多讲解和情况，也有各种各样的解决办法，这里我写一个比较流行的模式。icon模式，就是左边是logo（当然也可以是文字），右边是说明。因为现在这种见得是
非常多。我只说其中一种模式。在绝大部分浏览器是没有问题的（我已经测过IE7-8,360所有模式，chrome，ff,搜狗）。

注意：转载需加 wangfeng 创建

<h5>demo结构说明图：</h5><br/>
<table width="100%">
	<tr>
		<td algin="middle" width="30%" style="border:1px solid #333;text-align: center;">logo图标</td>
		<td style="padding-left:10px;">文本介绍标题<br>文本介绍内容<br>文本介绍内容<br>文本介绍内容<br>文本介绍内容<br>文本介绍内容<br>文本介绍内容</td>
	</tr>
</table>
css需要代码：<br/>
*{margin:0;padding:0;}(这里只是简单，所以用了这样的写法)
	img {
	border: 0;
	vertical-align: middle;
	}
	.cl {
	*zoom:1;
	}
	.cl:after {
	content: ".";
	display: block;
	clear: both;
	height: 0;
	visibility: hidden;
	}
	.tac {
	text-align: center;
	}
	.ver-external-box {
	width: 1000px;
	padding: 38px 0;
	position: relative;
	margin:0 auto;
	overflow: hidden
	}
	.ver-parent-box {
	width: 164px;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	}
	.ver-parent-box{
		width: 164px;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}
	.ver-neiext-box {
	margin-left:180px;
	padding-left: 10px;
	line-height: 30px;
	border-left: #ddd solid 1px;
	}
	.ver-content-box, #extra {
	display: inline-block;
	vertical-align: middle;
	*display: inline;
	*zoom: 1;
	}
	#extra {
	height: 100%;
	*width: 1px;
	}
	
<h5>demo结构：</h5><br/>
&lt;div class="ver-external-box cl"&gt;
    &lt;div class="ver-parent-box tac"&gt;
		&lt;span class="ver-content-box"&gt;
			&lt;img src="images/0.png" alt=""&gt;
		&lt;/span&gt;
      	&lt;div id="extra"&gt;&lt;!-- ie comment --&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;dl class="ver-neiext-box"&gt;
      &lt;dt&gt;我是测试标题&lt;/dt&gt;
      &lt;dd&gt;我是测试段落哦，我是测试段落哦，我是测试段落哦，我是测试段落哦，我是测试段落哦，我是测试段落哦，我是测试段落哦，我是测试段落哦，我是测试段落哦，我是测试段落哦，我是测试段落哦，我是测试段落哦，我是测试段落哦，我是测试段落哦，我是测试段落哦，我是测试段落哦，我是测试段落哦，我是测试段落哦，我是测试段落哦，我是测试段落哦，我是测试段落哦，我是测试段落哦，我是测试段落哦，我是测试段落哦，我是测试段落哦，我是测试段落哦，我是测试段落哦，我是测试段落哦，我是测试段落哦，我是测试段落哦，我是测试段落哦，
        &lt;a href="javascript:;" class="blue" hidefocus="hidefocus"&gt;点击查看详情 &gt;&gt;&lt;/a&gt;
      &lt;/dd&gt;
    &lt;/dl&gt;
  &lt;/div&gt;
