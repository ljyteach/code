### 顺序
1. 没有模板的情况将数据添加到网页中。
2. 安装express: npm install express
3. 安装jade: npm install jade
4. 设置express的模板引擎为jade: app.set("view engine","jade");
5. 设置模板目录：app.set("views","目录名"); 默认在views文件夹下查找jade文件
6. 使用jade模板显示json数据。
7. 引入js、css和图片。

### 了解模板
1. 将后台的数据插入模版中，再发送给客户端，用户看到的就是动态处理之后的html页面
2. 如果没有模板，每一次向客户端发送页面的时候，都要处理html（拼接html标签）。
3. 有了魔板，后台就可以将焦点专注到数据和业务逻辑上。

### jade书写格式（语法）
1. 通过缩进来控制父子级关系
2. 标签和文本用空格分开
3. #id
4. .class
5. a(href="test.html",id="haha")
6. 多行文本，每一行之前用|，或标签后紧跟.
7. 支持原生html语法
8. 单行注释：// 会编译到html中
9. 多行注释：//-  不会编译到html 注释掉下一级别缩进
10. 声明变量 - var num = 1;
11. 使用变量 title #{num}
12. 关于变量：变量一般都是后台的数据传给jade模板的
13. 循环语法：for in , each
14. 分支语法：if else
15. 代码块重用 mixin 传参（类似于函数）
16. 模板的继承 block extends
17. 模板的包含 include 可以引入html


### 编译jade
1. npm安装jade到全局
2. jade xxx.jade可以将jade文件编译成html文件。
3. jade -P xxx.jade 编译成标准格式的html
4. jade -P -w xxx.jade 实时编译
5. 在线编译http://html2jade.org/
