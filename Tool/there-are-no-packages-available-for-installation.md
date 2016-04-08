
##sublime error:There are no packages available for installation的提示窗解决办法

###1.打开控制台（ctrl+`,默认快捷键），查看错误

```
Package Control: Error downloading channel. URL error [Errno 10061] No connection could be made because the target machine actively refused it downloading https://sublime.wbond.net/repositories.json.
```

###2.解决办法

1.sulime2 在控制台输入

```
import urllib2,os,hashlib; h = '2915d1851351e5ee549c20394736b442' + '8bc59f460fa1548d1514676163dafc88'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); os.makedirs( ipp ) if not os.path.exists(ipp) else None; urllib2.install_opener( urllib2.build_opener( urllib2.ProxyHandler()) ); by = urllib2.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); open( os.path.join( ipp, pf), 'wb' ).write(by) if dh == h else None; print('Error validating download (got %s instead of %s), please try manual install' % (dh, h) if dh != h else 'Please restart Sublime Text to finish installation')
```

2.sublime3 在控制台输入

```
import urllib.request,os,hashlib; h = '2915d1851351e5ee549c20394736b442' + '8bc59f460fa1548d1514676163dafc88'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)
```

3.重启sublime

4.查看变化

以sublime2为例，Sublime Text\Data\Packages\Package Control\Package Control.sublime-settings中
```
"channels": [
		"https://sublime.wbond.net/repositories.json"
	],
```
改成
```
"channels": [
		"https://packagecontrol.io/channel_v3.json"
	],
```

>转载需要 wangfeng 创建
