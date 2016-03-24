require.config({
	baseUrl: 'http://code.jquery.com/',
	paths: {
		'jquery': 'jquery-1.11.3'
	}
});

require(['jquery','event', 'selector'], function($, E, S) {
	//下面这个来测试时错误的，因为require都是load结束以后才开始执行的，document.write是加载的时候要写进去
	//document.write('测试打印');
	$('html').text('远程引用jquery版本号:'+jQuery.fn.jquery)
});