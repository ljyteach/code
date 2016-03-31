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

题目六
``` js
var a = 10;
function fun(){
  var a = 20;
  return (function(){
    return this.a;
  })()
}
var result = fun();
console.log(result)
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

### 16、javascript如何实现数据类型检查。

### 17、写出一个邮箱验证的正则表达式。

### 18、描述一下你对”作用域链”的理解。

### 19、列举javascript中有哪些内置对象，并写出如何创建这些对象。

### 20、null和undefined有什么区别？
