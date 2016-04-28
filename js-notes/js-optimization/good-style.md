
注释：我们代码都会写，优化是个大问题，好的方式有利于节约资源，废话少说，下面我举几个常用例子。

> 注意：转载需加 wangfeng 创建 From：https://github.com/islittle/Web-Developer/new/master/js-notes/js-optimization

###编程时使用join而不是字符串连接来构建字符串
```
var items,
    messages,
    length,
    i;

messages = [{
    state: 'one',
    message: 'This is one.'
},{
    state: 'two',
    message: 'This is two.'
},{
    state: 'three',
    message: 'This is three.'
}];

length = messages.length;
```
如果转化为ul>li>messages格式，你会怎么做？或许你会这么做。
```
//定义
function forEachList(value) {
  items = '<ul>';

  for (i = 0; i < length; i++) {
    items += '<li>' + messages[i].message + '</li>';
  }

  return items + '</ul>';
}

//调用
forEachList(messages)

//输出："<ul><li>This is one.</li><li>This is two.</li><li>This is three.</li></ul>"
```
其实下面这样更好：

```
//定义
function forEachList(value) {
  items = [];

  for (i = 0; i < length; i++) {
    items[i] = messages[i].message;
  }

  return '<ul><li>' + items.join('</li><li>') + '</li></ul>';
}

//调用
forEachList(messages)

//输出："<ul><li>This is one.</li><li>This is two.</li><li>This is three.</li></ul>"
```
###不要在一个非函数块里声明一个函数
```
// 这个不友好
if (true) {
  function named() {
    console.log('bad.');
  }
}

// 用下面的
if (true) {
  var named = function named() {
    console.log('good.');
  };
}
```
说明： ECMA-262定义把块定义为一组语句，函数声明不是一个语句，虽然浏览器允许你这么做，但是它们解析不同。

###绝对不要把参数命名为 arguments, 这会逾越函数作用域内传过来的 arguments 对象

```
// 错误
function nope(name, options, arguments) {
  // ...stuff...
}

// 正确
function yup(name, options, args) {
  // ...stuff...
}
```
###最后声明未赋值的变量（当想引用之前已赋值变量的时候很有用）;

```
var items = getItems(),
    isTeam = true,
    length,
    i;
```

###作用域顶部声明变量，避免变量声明和赋值引起的相关问题(注意下面这种形式)
```
// 不友好
function demoTest() {
  var name = getName();

  if (!arguments.length) {
    return false;
  }

  return true;
}

// 友好
function demoTest() {
  if (!arguments.length) {
    return false;
  }

  var name = getName();

  return true;
}
```

###当给事件附加数据时，传入一个哈希而不是原始值，这可以让后面的贡献者加入更多数据到事件数据里而不用找出并更新那个事件的事件处理器
// 这个后面就不能一起传入值
```
$(this).trigger('listingUpdated', listing.id);

...

$(this).on('listingUpdated', function(e, listingId) {
  // do something with listingId
});

// 更好
$(this).trigger('listingUpdated', { listingId : listing.id });

...

$(this).on('listingUpdated', function(e, data) {
  // do something with data.listingId
});
```
