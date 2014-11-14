说明：sass的用户，它现在正在侵占我们的前端领域，日益状态，我们都知道compass和koala这个两个编译工具，对它的历史，对它的优势，
对于它的如何安装和操作，在搜索中你能得到不同的解决方案。那我下面我写一下，通过我的使用发现的几点问题，不知道大家有没有遇到？（个人的结果非
官方，仅供参考）        
      
1.中文编译的问题
在写sass或者修改的时候，为了更容易的让项目中其它人了解我们往往会写注释，中文的注释是我们中国开发者最容易最快的捕捉到信
息。但是编译的时候我们会遇到提示Syntax error: Invalid GBK character的问题。   
            
解决方法是：          
          
找到ruby的安装目录，里面也有sass模块，以我自己的为例，路径：C:\Ruby200-x64\lib\ruby\gems\2.0.0\gems\sass-3.4.7\lib\sass

在这个文件里面找到engine.rb，在所有的require XXXX 之后添加一行代码即可：
Encoding.default_external = Encoding.find('utf-8')        
这时用命令行或许就可以解决问题了，但是这时候我自己用koala还是会出现上面的提示问题。就需要下面的方法解决，在每一个有中文
注释的sass文件头部（包括被导入文件）加上@charset "UTF-8";     
          
2.编译extend的时候问题
extend是我们经常用到的写法，对于它的好处这里就不说了。直接进入主题。
@extend %class;这样的命令行和koala编译都没有问题。      
但是@extend .class;的时候，koala就好像不认识一样的跳过。
                             
3.css3加前缀问题              
@include prefixer($property, $value, $prefixes);                  
大家应该很熟悉吧，最常用的css3兼容写法。但是编译也是有问题的。  
找到_css3.scss文件
$prefixForOpera:              false !default; //opera从版本15开始转向webkit，所以默认为false，不输出o前缀
@include prefixer(border-radius, 3px, webkit moz o ms);     
编译结果：           
-webkit-border-radius: 3px;         
-moz-border-radius: 3px;            
-ms-border-radius: 3px;       
border-radius: 3px;               
改为ture后编译结果：        
-webkit-border-radius: 3px;         
-moz-border-radius: 3px;            
-o-border-radius: 3px;        
-ms-border-radius: 3px;       
border-radius: 3px;           
现在Opera新版用了webkit的内核，这个o的前缀可以省略了。但为了项目编码的一致性，你需要和项目人员共同设置。
            
4.compass自己的问题
不知道是为了规范自己的代码，还是对浏览器的解析问题，1.9和2.0的在解析上有发现了一下事情。
<table>
<tr>
	<td>定义</td>
	<td>1.9</td>
	<td>2.0</td>
</tr>
<tr>
	<td>#333 !default</td>
	<td>#333333;</td>
	<td>#333</td>
</tr>
<tr>
	<td>#fff !default</td>
	<td>white</td>
	<td>#fff</td>
</tr>
<tr>
	<td>#08c !default</td>
	<td>#0088cc;</td>
	<td>#08c</td>
</tr>
<tr>
	<td>#FCFCFC</td>
	<td>#fcfcfc</td>
	<td>#FCFCFC</td>
</tr>
<tr>
	<td>
	.progressListBar{       
	      &.investRights{}        
	}           
	</td>
	<td>.investRights.progressListBar{}</td>
	<td>.progressListBar.investRights{}</td>
</tr>
<tr>
	<td>#f5f5f5 !default</td>
	<td>whitesmoke</td>
	<td>#f5f5f5</td>
</tr>
</table>


    
