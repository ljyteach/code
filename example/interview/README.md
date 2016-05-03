## HTML && CSS
*****************

### 1、HTML文档声明有声明作用，声明种类有哪些？

### 2、行内元素有哪些？块级元素有哪些？你对CSS的盒模型如何理解？

### 3、CSS引入的方式有哪些?

### 4、CSS选择符有哪些？哪些属性可以继承？优先级算法如何计算？内联和important哪个优先级高？

### 5、如何让一个盒子水平和垂直都居中

### 6、HTML5新增了哪些标签？CSS3新增了哪些属性？

### 7、说一下你了解的css hack技术。

### 8、说一下viewport属性的作用。

### 9、在CSS中，哪个属性会让元素脱离文档流？

### 10、如何水平居中一个position:fixed的元素？

### 11、css设置透明度的写法有几种，请列举。

### 12、单位rem的参考对象是什么？

### 13、是否理解HTML5离线存储。

### 14、css中清除浮动的方法有哪些？

### 15、列举使用css3实现元素的动画效果。

### 16、写一个简单的flexbox布局。

### 17、你了解的浏览器兼容问题有哪些，如何解决？


## javascript
*****************
### 1、看看下面alert的结果是什么（如果报错，写出错误信息）？

题目一
``` js
function b(x, y, a) {
  arguments[2] = 10;
  alert(a);
}
b(1, 2, 3);
```
题目二
``` js
for(var i =0,j=0;i<6,j<10;i++,j++){
  k = i + j;
}
alert(k);
```
题目三
``` js
var a = 1;
(function(){
  alert(a);
  var a = 2;
})()
```
题目四
``` js
var result = typeof(null);
alert(result);
```

题目五
``` js
function Student(name){
  this.name = name;
  this.move = function(){
    alert(this.name + "准备移动了");
  }
}
Student.prototype.move = function(){
  alert(this.name + "开始移动了");
}
var st = new Student("李四");
st.move();
```

### 2、下列表达式的返回值分别是什么？
``` js
null == undefined;
NaN == NaN;
“5” == 5;
false == 0;
true == 1;
```

### 3、用js如何实现继承，请写出示例代码。

### 4、js中的对象有几种创建方式。

### 5、以下代码哪一个会报错？
``` js
var a = ( );
var a = [ ];
var a = { };
var a = / /;
```

### 6、以下代码哪一个可以匹配一个正整数？
``` js
^[1-9]\d*$
^[1-9]+$
^[0-9]\d+$
^[1-9]\d+$
```

### 7、document对象有哪些查询节点的方法？

### 8、javascript中有哪些数据类型？

### 9、原始类型和引用类型有哪些区别？

### 10、什么是事件冒泡？如何阻止事件冒泡？

### 11、什么事闭包？用文字说明并写出示例代码。

### 12、说说你对原型和原型链的理解。

### 13、obj对象有att属性，以下方法哪一个可以正确的获取属性值。
``` js
obj.att;
obj("att");
obj["att"];
obj{"att"};
obj["a"+"t"+"t"];
```
### 14、请列出你了解的javascript全局函数（浏览器环境）。

### 15、说出js中数组有哪些方法，并编写一个通用程序，删除数组的重复元素。

### 16、求两个正整数的最大公约数。

### 17、javascript如何实现数据类型检查。

### 18、如何动态加载js脚本。

### 19、写出一个邮箱验证的正则表达式。

### 20、写出javascript中捕获异常的方法。

### 21、描述一下你对”作用域链”的理解。

### 22、列举javascript中有哪些内置对象，并写出如何创建这些对象。

### 23、使用过哪些js框架和库，它们主要都是用来做什么的，优势和劣势分别都是什么？

### 24、null和undefined有什么区别？

### 25、window.onload与jQuery(document).ready()有什么区别。

## 综合试题
*****************
### 1、如果让你来制作一个访问量很高的大型网站，你会如何来管理所有CSS文件、JS与图片（这是一个与优化相关的问题）？

### 2、请说出实现图片轮播效果的原理。

### 3、请简单说明jQuery中的事件委托。

### 4、你对ajax了解多少，请说明。

### 5、get与post两种方法有什么区别？

### 6、“同步”和“异步”有什么区别？

### 7、你对跨域请求了解多少？如何实现跨域请求？

## 项目相关

### 1、以前项目中的代码如何管理。

### 2、你在项目中负责哪些工作。

### 3、你在以前的项目中出现过哪些问题，你是如何解决的。