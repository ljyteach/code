### 第二天、DOM树状结构与盒模型

#### 树状结构的概念
*家谱就是一个简单的树状结构，电脑里的文件夹结构也是树状结构。*
+ 节点的概念
+ 父级节点
+ 子集节点
+ 同级节点
+ 祖先节点
+ 子孙节点

*参照第一天的例子讲解树状结构*

#### 练习：画出上节课制作的网页的树状结构。

#### 分析第三天练习图的树状结构

##### 示例代码 [链接]()
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style type="text/css">

    </style>
</head>
<body>
    <div id="header">
        <div class="nav"></div>
        <div class="banner"></div>
    </div>
    <div id="container">
        <div class="left-col"></div>
        <div class="center-col"></div>
        <div class="right-col"></div>
    </div>
    <div id="footer"></div>
</body>
</html>
```

#### 练习：为上面的代码添加样式，使其结构与设计稿相相同（只用div）
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style type="text/css">

    </style>
</head>
<body>
    <div id="header">
        <div class="nav"></div>
        <div class="banner"></div>
    </div>
    <div id="container">
        <div class="left-col"></div>
        <div class="center-col"></div>
        <div class="right-col"></div>
    </div>
    <div id="footer"></div>
</body>
</html>
```

#### 盒子模型

##### 上面是盒模型
**有两个相邻的盒子，每个盒子都装着一块巧克力。翘巧克力与盒子内部的距离就是内边距，用padding属性控制，两个盒子之间的距离就是外边距，用margin属性值控制，盒子的厚度就是边框,用border属性控制,如果这样的布局用html和css显示出来，就是css的盒模型了。**
+ margin 外边距
+ padding 内边距
+ border 边框

##### 示例代码 [链接]()
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style type="text/css">
        *{
            margin:0;
            padding:0;
        }
        .box{
            width:300px;
            height:300px;
            border:1px solid red;
            float:left;
        }
        .box1{
            padding-top:20px;
            padding-bottom:20px;
            margin-right:20px;
        }
        .box2{
            margin-left:50px;
        }
    </style>
</head>
<body>
    <div class="box box1">
        <h1>内容1</h1>
    </div>
    <div class="box box2">
        <h1>内容2</h1>
    </div>
</body>
</html>
```

#### 练习：给上一节的练习代码添加内容。

#### 补充练习：将各个设计稿都用DOM结构和盒模型的知识排出来。

*第二天结束*
