
>字符串截取，大家都经常在用，但是substring、substr和slice具体不同，我们来详细说明一下。

*注意：转载请说明来源 wangfeng 创建*

# substring-vs-substr-vs-slice

## substring

```
substring(start,end)
```

+ substring 方法返回字符串包括 start 处的字符，但不包括 end 处的字符。
+ 如果 start 与 end 相等，那么该方法返回的就是一个空串（即长度为 0 的字符串）。
+ 如果 start 比 end 大，那么该方法在提取子串之前会先交换这两个参数。
+ 如果 start 或 end 为负数，那么它将被替换为 0。


## substr

```
stringObject.substr(start [, length ])
```

+ 如果start为负数，则start=str.length+start,或者是倒数

+ 如果 length 为 0 或负数，将返回一个空字符串。

+ 如果没有指定该参数，则子字符串将延续到stringObject的最后。

## slice

```
stringObject.slice(start,end)
```

+ 允许使用负数作为参数,但不交换这两个参数位置
