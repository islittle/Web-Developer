
>querySelectorAll返回值的问题，经常会被认为为一个数组，如果要取值遍历的话，会用forEach进行遍历，但是运行结果会报语法错误。因为返回值是一个
类数组的对象，需要转化一下才可以运算。

##querySelectorAll
```
var returnList = document.querySelectorAll('p');

returnList.forEach(function(p){
 console.log(p)
})
//Uncaught TypeError: returnList.forEach is not a function(…)

//解决办法：
[].slice.call(returnList).forEach(function(p){
 console.log(p)
})
//es6解决办法：
Array.from(returnList).forEach(function(p){
 console.log(p)
})

```
