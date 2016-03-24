/**
 * css选择器，根据2\8原则，这里只实现最常用的三种
 * 注：当结果集只有一个元素时将直接返回该元素
 *
 * @param {Object} selector
 * @param {Object} context
 *
 * 1, 通过className获取
 * ('.cls')
 * ('.cls', el)
 * ('.cls', 'id')
 * ('span.cls')
 * ('span.cls', el)
 * ('span.cls', 'id')
 *
 * 2, 通过tagName获取
 * ('span')
 * ('span', el)
 * ('span', 'id')
 *
 * 3, 通过attribute获取
 * ('[name]')
 * ('[name]', el)
 * ('[name]', 'id')
 * ('[name=uname]')
 * ('[name=uname]', el)
 * ('[name=uname]', 'id')
 * ('input[name=uname]')
 * ('input[name=uname]', el)
 * ('input[name=uname]', 'id')
 */
define(function() {

	function query(selector,context) {
		var s = selector,
			doc = document,
			regId = /^#[\w\-]+/,
			regCls = /^([\w\-]+)?\.([\w\-]+)/,
			regTag = /^([\w\*]+)$/,
			regNodeAttr = /^([\w\-]+)?\[([\w]+)(=(\w+))?\]/;
		
		var context = 
				context == undefined ?
				document :
				typeof context == 'string' ?
				doc.getElementById(context.substr(1,context.length)) :
				context;
				
		if(regId.test(s)) {
			return doc.getElementById(s.substr(1,s.length));
		}
		
		if(context.querySelectorAll) {
			if(context.nodeType == 1) {
				var old = context.id, id = context.id = '__$$__';
				try {
					return context.querySelectorAll( '#' + id + ' ' + s );
				} catch(e){
				} finally {
					old ? context.id = old : context.removeAttribute( 'id' );
				}
			}
			return context.querySelectorAll(s);
		}
		
		if(regCls.test(s)) {
			var ary = s.split('.'),
				tag = ary[0],
				cls = ary[1],
				len,
				all,
				els = [];
				if(context.getElementsByClassName) {
					var res = context.getElementsByClassName(cls);
					if(tag) {
						for(var i=0,len=res.length; i<len; i++) {
							res[i].tagName.toLowerCase()==tag && els.push(res[i]);
						}
						return els;
					}else{
						return res;
					}
				}else {
					all = context.getElementsByTagName(tag || '*');
					return filter(all, 'className', cls);	
				}
				
		}
		
		if(regTag.test(s)) {
			return context.getElementsByTagName(s);
		}
		
		if(regNodeAttr.test(s)) {
			var ary = regNodeAttr.exec(s),
				all = context.getElementsByTagName(ary[1] || '*');
				
			return filter(all, ary[2], ary[4]);	
		}
		
		function filter(all, attr, val) {
			var reg = RegExp('(?:^|\\s+)' + val + '(?:\\s+|$)');
			function test(node) {
				var v = attr == 'className' ? node.className : node.getAttribute(attr);
				if(v) {
					if(val) {
						if(reg.test(v)) return true;
					}else {
						return true;
					}
				}
				return false;
			}
			var i = -1, el, r = -1, res = [];
			while( (el = all[++i]) ) {
				if(test(el)) {
					res[++r] = el;
				}
			}
			return res;
		}
	}
	
	return query;
});
