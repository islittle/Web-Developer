说明：大家对input光标居中的写法应该有很多种，对光标的识别解析讲解也到处可查，在这里我只总结一下自己觉得不错的。仅供参考。

注释：转载需加 wangfeng 创建

第一个方法：（IEhack方法）<br/>
input{ <br/>
    font-size: 14px;<br/>
    height: 40px; <br/>
    line-height:40px\9;<br/>
}<br/>
<br/>
第二个方法：（webikit内核重定义）<br/>
input{ <br/>
    font-size: 14px;<br/>
    height: 40px; <br/>
    line-height: 40px;<br/>
}<br/>
@media screen and (-webkit-min-device-pixel-ratio:0) { input{ line-height: 100%; } }<br/>

——————————————————————————————————————————————————————————————————————————————————————————————————————————》
这里加一个去掉input autocomplete的背景色的问题。（这里改成了#fff）
input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #fff inset;
    color: #ccc
}

input:-webkit-autofill,input:focus:-webkit-autofill {
    -webkit-text-fill-color: #ccc
}
