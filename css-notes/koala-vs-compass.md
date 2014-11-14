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


    
