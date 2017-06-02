
> iphone safari 无痕模式 localStorage对象仍然存在，但是setItem会报异常：QuotaExceededError，getItem和removeItem方法直接无视

#iphone-localstorage-quota-exceeded-error-issue

>注意：转载者需要表明来源 wangfeng 创建

如果要适配 Safari 下的无痕浏览模式，可以HTML最开始判断下是否处于 Safari 的无痕浏览模式中：

```
// 不是 Safari 无痕模式并且能用 localStorage
function canSetLocalStorage() {
  var _localStorage = window.localStorage || localStorage;
  if(!_localStorage){
      return false;
  }
  try {
      _localStorage.setItem('isPrivateMode', '1');
      _localStorage.removeItem('isPrivateMode');
      window.isPrivateMode = false;
  } catch(e) {
      window.isPrivateMode = true;
  }
}

```
