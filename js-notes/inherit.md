
##继承

继承用法我们都知道用途很多而且很方便，下面我就写一个简单的继承。

>转载需加 wangfeng 创建

第一种方法：
```
function A(name, position) {
    this.position = position ? position : '技术';
    this.name = name ? name : '小王'
    this.say = function() {
        alert('姓名：' + this.name + '；职位：' + this.position);
    }
}
function B() {}
B.prototype = new A('little', '前端');
var C = new B();
C.say();
```

第二种方法：

```
function A(name, position) {
    this.position = position ? position : '技术';
    this.name = name ? name : '小王'
    this.say = function() {
        alert('姓名：' + this.name + '；职位：' + this.position);
    }
}
function B(name, position) {
	A.apply(this,arguments);
}
var C = new B('little', '前端');
C.say();
```
