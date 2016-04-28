
说明：在用原生绑定事件的时候需要注意可以为下面用法。

转载：需加 wangfeng 创建 和 链接

##Function.prototype.bind()

bind()方法会创建一个新函数，当这个新函数被调用时，它的this值是传递给bind()的第一个参数, 它的参数是bind()的其他参数和其原本的参数.

###语法

```
fun.bind(thisArg[, arg1[, arg2[, ...]]])
```

**thisArg**

当绑定函数被调用时，该参数会作为原函数运行时的 this 指向。当使用new 操作符调用绑定函数时，该参数无效。

**arg1, arg2, ...**

当绑定函数被调用时，这些参数加上绑定函数本身的参数会按照顺序作为原函数运行时的参数。

bind() 函数会创建一个新函数（称为绑定函数），新函数与被调函数（绑定函数的目标函数）具有相同的函数体（在 ECMAScript 5 规范中内置的call属性）。当目标函数被调用时 this 值绑定到 bind() 的第一个参数，该参数不能被重写。绑定函数被调用时，bind() 也接受预设的参数提供给原函数。一个绑定函数也能使用new操作符创建对象：这种行为就像把原函数当成构造器。提供的 this 值被忽略，同时调用时的参数被提供给模拟函数。

###例子
```
var a = function(){
console.log(arguments)
}
var b = a.bind(this,1,2,3,4,5)
b() // [1, 2, 3, 4, 5]
b(123) // [1, 2, 3, 4, 5, 123]
```