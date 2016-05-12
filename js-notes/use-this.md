
说明：JavaScript 中的 this 含义得多，可以是全局对象、当前对象或者任意对象，取决于函数的调用方式。函数的调用有以下几种方式：作为对象方
法调用，作为函数调用，作为构造函数调用，和使用 apply 或 call 调用。

>注意：转载需加 wangfeng 创建 From：https://github.com/islittle/Web-Developer/blob/master/js-notes/use-this.md

##JavaScript-this

###作为对象方法调用
函数也是对象，函数fn1可以作为一个对象的属性，此时该函数被称为该对象的方法，在使用这种调用方式时，this 被自然绑定到该对象。
```
var obj = {
	number: 0,
	fn1 : function(){
       console.log(this)
	}
}
obj.fn1()//this 绑定到当前对象
```

###作为函数调用
函数可以直接被调用，此时 this 绑定到全局对象。在浏览器中，window 就是该全局对象
```
function fn1(){
console.log(this);
}
fn1();//window
或者
(function(){
console.log(this);
})()//window

//内部声明另外一个函数要用变量替代
function fn1(){
console.log(this);
var that = this;
var fn2 = function(){
console.log(this)
}
fn2()
}
fn1();
//window
//window
```

###作为构造函数调用
JavaScript 是使用基于原型（prototype）的继承方式, 构造函数也很特殊，如果不使用 new 调用，则和普通函数一样。new=后this 绑定到新创建的对象上。
(继承)
```
function fn1(a){
this.a = a;
this.run = function(){
console.log(a);
console.log(this);
}
}
function fn2(){};
fn2.prototype = new fn1('1');
var fn3 = new fn2();
fn3.run();
//1
//object
```
###使用 apply , call , bind调用 
在 JavaScript 中函数也是对象，对象则有方法，apply 和 call 就是函数对象的方法。允许切换函数执行的上下文环境（context），即 this 绑定
的对象
(继承)
```
function fn1(a){
this.a = a;
this.run = function(){
console.log(a);
console.log(this);
}
}
function fn2(a){
fn1.apply(this,arguments)
};
var fn3 = new fn2('1');
fn3.run();
//1
//obj
//apply可以换成call,bind但是参数不一样，结果一样。
```

