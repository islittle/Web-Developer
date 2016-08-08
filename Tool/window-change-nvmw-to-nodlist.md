
#node 管理 版本 切换

>我们在window用得node时候一般都会选择nvmw来进行管理和切换，但是最近我发现一个问题，在配置好淘宝镜像，修改为win-x64文件夹地址，修改下载
源文件等等以后，发现302报错

```
C:\Windows\System32>nvmw install 4.4.4
Start installing node/v4.4.4 (x64) to D:\nvmw\v4.4.4
Download from https://npm.taobao.org/dist/v4.4.4/win-x64/node.exe, and save it as D:\nvmw\v4.4.4\node.exe
302 Found
Download D:\nvmw\v4.4.4\node.exe from https://npm.taobao.org/dist/v4.4.4/win-x64/node.exe failed
```

我找了各种解决办法，I have no idea what to do next。我在github的nvmw上也碰到了问题的发起者，作者没有回复。但是问题着给我回复了He 
changed to use Nodist。


##完全卸载Node.js

首先卸载Node.js应用程序

确认在C:\Program Files中没有Nodejs目录

确认在C:\Program Files (x86)没有Nodejs目录

删除C:\Users{User}\AppData\Roaming\npm这个目录

删除C:\Users{User}\AppData\Roaming\npm-cache这个目录

确认在环境变量中没有对Node.js和npm的引用


##安装Nodist
github：https://github.com/marcelklehr/nodist
load -》installer

```
> nodist
# Lists installed versions highlighting the active ones.
> nodist 4.x
# Sets the global node version.
> nodist local 4.x
# Sets the node version per directory (including all subdirectories).
> nodist env 4.x
# Sets the node version per terminal.
> nodist npm 3.x
# Globally activate npm 3

> nodist npm match
# Globally activates the npm version that corresponds to the active node version
# (the active node version may be the env, local or global version)
> nodist npm local 2.x
# Set the npm version for the current directory.
> nodist npm env 2.x
# Set the npm version for the current terminal environment.
call nodist env 4.x
# In a batch script use `call`.
> nodist dist
# Lists all available node versions.
> nodist r 4.x -- foo.js -s
# Runs a specific version without modifying any state.
> nodist + 4.x
# Just checks, if the version is installed and downloads it if not.

> nodist + all
# will install *everything*.
> nodist - 4.1.1
# Removes a version.
> nodist --help
# Displays a complete list of commands with examples.
```
