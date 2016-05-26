
>错误检查

转载需加 wangfeng 创建 来源：https://github.com/islittle/Web-Developer/new/master/js-notes/window-onerror.md

##window.onerror

```
window.onerror = function(errorMessage, scriptURI, lineNumber,columnNumber,errorObj) {
       console.log("错误信息：" , errorMessage);
       console.log("出错文件：" , scriptURI);
       console.log("出错行号：" , lineNumber);
       console.log("出错列号：" , columnNumber);
       console.log("错误详情：" , errorObj);
    }
```
