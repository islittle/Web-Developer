注释：sass的编译有很多可以用sass --watch sass：./css直接编译，可以用koala图形界面编译，也可以用compass。但是都是有前提的，下
面看一下compass。具体你选择哪个看自己的爱好。
注意：转载 wangfeng 创建
<h2>compass的安装和使用</h2>
1.rubyinstaller安装

sass 需要运行在Ruby环境下，下载好最新版本rubyinstaller，我的是Ruby200-x64,安装好。

2.安装sass、compass

开始 -> Ruby200-x64 ->  Start Command Prompt with Ruby

输入以下命令：npm install compass或者全局安装npm install compass（这是已经安装好了npm）
也可以：gem install compass

然后等待自动下载安装compass及其依赖模块（包括sass）。



3.建立项目文件夹

安装完compass后，我们来创建一个compass项目文件夹。我想把该文件夹放在 路径为E:/mywork/test 下面，

依次输入以下指令:

e:                              

cd mywork                 

compass create test//项目文件夹



4.编译运行sass文件

sass文件就是普通的文本文件，它可以直接使用css语法，文件后缀名为.scss（Sassy CSS）。

首先编辑好一个sass文件，名为test.scss。指定到刚刚创建的Compass中的sass文件夹。



E:\mywork\test\sass>

执行命名 sass test.scss test.css，可以看到sass文件夹中多了个test.css文件，编译成功。


5.config.rb的说明
注意：文件中的井号这里用//代替了
require 'compass/import-once/activate'                  
//Require any additional compass plugins here. （额外的插件存放的地方）                         

//Set this to the root of your project when deployed:（这个设置你的项目的根当部署）                   
http_path = "/"                               
css_dir = "css"                           
sass_dir = "sass"                                 
images_dir = "images"                                 
javascripts_dir = "javascripts"                                         
                                                          
//You can select your preferred output style here (can be overridden via the command line):                                 
output_style = :nested   （编译输出的类型，expanded（扩展式）nested （嵌套式）compact（紧凑式）compressed（压缩式））
                          
//To enable relative paths to assets via compass helper functions. Uncomment:                                               //relative_assets = true （相对路径关闭）                                                                      
                                        
//To disable debugging comments that display the original location of your selectors. Uncomment:                            
line_comments = false （取消line的说明）                              


//If you prefer the indented syntax, you might want to regenerate this                          
//project again passing --syntax sass, or you can uncomment this:                             
//preferred_syntax = :sass                                
//and then run:                               
//sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass                                
（这里是自定义语法）                                      

6.其他

编译时可以用到的命名(以test.scss为例)：

sass test.scss     (在屏幕上显示.scss文件转化的css代码)

sass test.scss test.css (将显示结果保存为相应的.css文件)

compass compile (在命令行下切换到项目目录后再运行,会将sass下所有的scss文件都编译)

compass watch (在命令行下切换到项目目录后再运行，compass将会实时监控 sass目录的文件变化，只要你一保存文件，立即将相应文件编译为 css 文件。)

命令行取消输出的css文件中的一行一行的注释：compass watch --no-line-comments 或 compass compile --no-line-comments

查看compass版本：compass -v

输出压缩的css文件：编译命令 compass compile --output-style compressed 或在config.rb中设置 output_style =:compressed

重新编译未变动的文件：compass只编译发生变动的文件，如果你要重新编译未变动的文件，需要使用 --force参数。compass compile --force
