require.config({
	//路径的是相对html的。
	baseUrl: '../public/js/',
	paths: {
		'jquery': 'jquery-1.9.1'
	}
});
define(['event', 'selector','jquery'], function(E, S, $) {
	$('p').html('引用本地jquery版本号'+jQuery.fn.jquery+'输出：hello world!')
});