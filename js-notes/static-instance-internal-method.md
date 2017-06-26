
>转载请标注来源 和 [王峰](https://islittle.github.io/)创建

## 静态方法
static 关键字用来定义一个类的一个静态方法。调用静态方法而不实例化其类，不能通过一个类实例调用静态方法。静态方法通常用于为一个应用程序创建工具函数。

```
var BaseClass=new Function;
//定义静态方法
BaseClass.f1 = function(){
     alert(' This is a static method ');  
}  
//执行
BaseClass.f1();//This is a static method
// 实例化一个新对象
var instanceClass1 = new BaseClass();  
// 被实例对象调用,证明无效
instanceClass1.f1();//instanceClass1.f1 is not a function
```

不过改成下面就不同了：

```
var BaseClass = new Function;
var Class1 = BaseClass;
//定义静态方法
BaseClass.f1 = function(){
     alert(' This is a static method ');  
}
Class1.f2 = function(){
     alert(' This is a static method too ');  
}  
Class1.f1();// This is a static method
BaseClass.f2(); //This is a static method too
// BaseClass和Class1可以互调用f1和f2静态方法，说明这两个函数是一样的
```

## 实例方法
利用JavaScript的prototype原型

```
var BaseClass = function (){
	this.f1 = function () {
		alert('Defined by the "this"')
	}
};
var instanceClass1 = new BaseClass;
//定义静态方法
BaseClass.prototype.f1 = function(){
     alert('Defined by the "BaseClass.prototype"');  
}
instanceClass1.f1 = function(){
     alert('Defined by the "instanceClass1"');  
}
instanceClass1.f1();
// 三个f1方法都可以执行，不过，优先级是instanceClass1.f1>BaseClass.prototype.f1>this.f1
```

## 内部方法

```
var BaseClass = function() {  
    var f1 = function() {  
        alert("Internal method");  
    };  
    var f2 = function() {  
        alert("call Internal method");  
        f1();  
    };  
    this.f3 = function(){  
        f2();  
    }  
};  
var instanceClass1 = new BaseClass; 
instanceClass1.f3(); // 用闭包调用f1,f2的内部函数
```
