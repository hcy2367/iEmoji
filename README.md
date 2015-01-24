# iEmoji
基于phonegap，ratchet，handlebars等技术架构开发的微表情APP，目前只支持安卓版

## 表情库
支持以下40个英文表情：
'blink', 'chill', 'chuckle', 'confused',
'cry', 'drooling', 'drowsy', 'embarrassed',
'flushed', 'grimace', 'grin', 'hellooo',
'hotkiss', 'hypnotized', 'inthedark', 'laugh',
'like', 'onfire', 'panic', 'pig', 'pleased',
'pucker', 'puke', 'scold', 'scowl', 'scream',
'sick', 'silence', 'skull', 'sleep', 'smile',
'smug', 'sneer', 'sniffle', 'sob', 'sobeye',
'strive', 'surprised', 'sweating', 'wantmoney', 'wink'

## 功能
* 表情搜索
* 表情下载
* 表情分享
* 摇一摇换表情

## 使用
初始化一个项目，将config.xml覆盖项目生成的config.xml，将www目录里的文件放到项目的根目录，添加插件列表，构建项目，测试项目，可以用模拟器，也可以连接你的手机，打开USB调试模式即可：

	$ cordova create test com.iEmoji.hello test
	$ cd test
	$ cordova plugin add org.apache.cordova.console | ...
	$ cordova platform add android | ios
	$ cordova build android | ios
	$ cordova emulate android | cordova run android


## 详情
由前期构思，到技术选型，到界面设计，到编码测试，再到发布，过程还是花了不少心思，详情请查看文章：[http://hcy2367.github.io/2015/01/23/phonegap-iEmoji.html](http://hcy2367.github.io/2015/01/23/phonegap-iEmoji.html)

## apk下载
链接：[http://pan.baidu.com/s/1i3HyRrf](http://pan.baidu.com/s/1i3HyRrf)


