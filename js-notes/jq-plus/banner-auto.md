注释：在大多数网站我们在首页都能见到banner的效果切换，有的是左右的，有的是淡入淡出的，还有有一些是特别绚丽的效果，下面自己写了一
套。希望对有需要的有帮助。里面有错误的可以联系本人。

注意：转载 需加 wangfeng 创建 

<h1>banner切换</h1>
demo结构<br/>
&lt;div class="all-bannerc center cl"&gt;<br/>
	&lt;ul class="banner-imgc cl"&gt;<br/>
		&lt;li class="fl tc"&gt;&lt;a href="" class="banner-img"&gt;&lt;img src="" alt="1"&gt;&lt;/a&gt;&lt;/li&gt;<br/>
		&lt;li class="fl tc"&gt;&lt;a href="" class="banner-img"&gt;&lt;img src="" alt="2"&gt;&lt;/a&gt;&lt;/li&gt;<br/>
		&lt;li class="fl tc"&gt;&lt;a href="" class="banner-img"&gt;&lt;img src="" alt="3"&gt;&lt;/a&gt;&lt;/li&gt;<br/>
		&lt;li class="fl tc"&gt;&lt;a href="" class="banner-img"&gt;&lt;img src="" alt="4"&gt;&lt;/a&gt;&lt;/li&gt;<br/>
		&lt;li class="fl tc"&gt;&lt;a href="" class="banner-img"&gt;&lt;img src="" alt="5"&gt;&lt;/a&gt;&lt;/li&gt;<br/>
		&lt;li class="fl tc"&gt;&lt;a href="" class="banner-img"&gt;&lt;img src="" alt="5"&gt;&lt;/a&gt;&lt;/li&gt;<br/>
	&lt;/ul&gt;<br/>
&lt;/div&gt;<br/>
jq编码<br/>
var $bannerli = $('.banner-imgc li');<br/>
var $bannerli_Num = $bannerli.length-1;<br/>
var $bannericon = $('<ul class="ib banner-icon"></ul>').css('width',$bannerli_Num*22+22);(22为小图片的宽度加margin左右和)<br/>
for( banner_i = 0; banner_i < $bannerli_Num+1; banner_i++){<br/>
	$('<li class="banner-ictu allicon ib"></li>').appendTo($bannericon);<br/>
	}<br/>
$('.all-bannerc').append($bannericon);<br/>
var $bannericonli = $('.banner-icon li');<br/>
var $bannericonNum =0;<br/>
function bannerM(Num){<br/>
	$bannericonli.eq(Num).addClass('cur').siblings('li').removeClass('cur');<br/>
	$bannerli.eq(Num).stop().fadeIn(400).siblings('li').fadeOut(0);<br/>
	};<br/>
function bannerAuto(){<br/>
	$bannericonNum = ($bannericonNum == $bannerli_Num )?0:++$bannericonNum;<br/>
	bannerM($bannericonNum);<br/>
};<br/>
banner_T = setInterval(bannerAuto,4000);<br/>
$('.banner-icon').hover(function(){<br/>
	clearInterval(banner_T);<br/>
	},function(){<br/>
	banner_T=setInterval(bannerAuto,4000)<br/>
	});<br/>
$bannericonli.mouseenter(function(){<br/>
	if($bannerli.is(':animated')) return;<br/>
	$bannericonNum = $('.banner-icon li').index(this);<br/>
	bannerM($bannericonNum);<br/>
	})<br/>
$bannericonli.eq(0).mouseenter();<br/>
