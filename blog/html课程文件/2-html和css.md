### 第一天、HTML&CSS基础

首先让学员创建一个html文件，直观的看到html代码，然后再具体说html是什么。

#### 制作第一个hello网页
+ 使用sublime新建html文件，然后生成html模板。
+ 修改title，添加h1标签：hello world 这是我的第一个网页。
+ 在浏览器中打开。

到这里，我们已经完成了一个网页的制作，虽然什么都没有，但是我们已经用代码体会到了什么是html。那么继续看下面的问题。

#### html代码展示，明确学习html的目的（编辑网页内容）
超文本标记语言：它是一门标记（标签）语言，语言由一个个标签组成。浏览器会把html代码解释成网页。也就是说平时大家看到的所有网页，都是由html组成的。那么如何查看网页的html代码呢，可以在浏览器页面点击右键，然后查看源代码，或者按F12在查看器中看html代码。

#### html文档由哪几部分组成？html中有哪些常用的标签？
*html文档的组成-从模板讲起*
+ 文档声明（浏览器渲染方式，目前记住这么写就可以了）
+ html标签（最外层标签，lang是标签属性，可以指定网页的主要语言，关于元素属性，日后再讲解。）
+ head标签 文档的头部，描述了文档的各种属性。例如标题，编码。
+ body标签 网页要展示出来的内容，都放在body标签中。

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>

</body>
</html>
```

*标签都是有语义的，html中的常用标签和属性，如下*
+ h1 h2 h3 h4 h5 h6 标题标签
+ p 段落：如果需要显示文章，就把文章的段落放到p标签中。
+ ul li 列表
+ a 超链接
+ img 插入图片
+ src属性
+ div 容器：我们在网页制作的过程中，可以把独立的版块放在一个div标签中。
+ id属性
+ class属性

#### 练习：制作一个没有样式的网页示例
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <h1>我的第一个网页</h1>
    <h2>选择题</h2>
    <h3>第一题</h3>
    <p>你喜欢哪一个水果？</p>
    <ul>
        <li>A:香蕉</li>
        <li>B:苹果</li>
        <li>C:鸭梨</li>
        <li>D:水蜜桃</li>
    </ul>
    <h3>第二题</h3>
    <p>你喜欢哪一项运动？</p>
    <ul>
        <li>A:篮球</li>
        <li>B:足球</li>
        <li>C:排球</li>
        <li>D:乒乓球</li>
    </ul>
    <h3>第二题</h3>
    <p>你喜欢哪一张图片？</p>
    <ul>
        <li>A:<img src="images/1.jpg"></li>
        <li>B:<img src="images/3.jpg"></li>
        <li>C:<img src="images/5.jpg"></li>
        <li>D:<img src="images/7.jpg"></li>
    </ul>
</body>
</html>
```


#### 什么是css，css能做什么？
*层叠样式表，可以通过css定义html在浏览器中显示的样式，例如字体、颜色等*

##### 示例代码 [链接]()
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style type="text/css">
        /*内联样式，嵌入样式，外部样式，这里使用嵌入样式*/
        #first-css{
            color:red;
        }
        /*语法：选择器{属性名：属性值}*/
    </style>
</head>
<body>
    <h1 id="first-css">hello css</h1>
</body>
</html>
```

#### 如何定义样式:
+ 将样式写在style标签中（定义样式三种方法的一种）
+ 通过选择器选择元素
+ 使用css属性定义样式

*css通过设置元素样式，使html变得丰富多彩，那么，如何设置html元素的样式呢，首先需要找到这个元素，然后改变（设置）这个元素的样式。通过选择器可以选择元素，通过css属性可以设置样式。*

#### css常用选择器
+ \* 选择所有元素（通配符）
+ #id 通过id属性值选择元素（html的id属性值不能重复，id选择器）
+ .class 通过class属性值来选择元素（类选择器）
+ element 元素选择器
+ selector selector 层级选择器

##### id与class的区别：
+ id是唯一标示符，class是一类的名称。
+ 大结构用id命名，内部结构用class命名。

##### css常用属性
``` html
<style type="text/css">
    #id{
        color:red;
        background-color: red;
        width:100px;
        height: 100px;
        font-size: 15px;
        border:1px solid red;
        /*不常用的属性和值可以查手册，没有必要背下来。*/
    }
</style>
```
*技巧：不常用的，但是用文档很快就能找到的内容不要背*

##### 示例代码 [链接]()
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style type="text/css">
        /*通用选择器*/
        /**{color:red;}*/
        h1{
            color:red;
        }
        #my-id{
            color:blue;
        }
        .my-class{
            color:yellow;
        }
        #list li{
            color:green;
        }

    </style>
</head>
<body>
    <h1>标签（元素）选择器</h1>
    <h2 id="my-id">id选择器</h2>
    <h3 class="my-class">class（类）选择器</h3>
    <ul id="list">
        <li>香蕉</li>
        <li>苹果</li>
        <li>鸭梨</li>
    </ul>
    <ul>
        <li>足球</li>
        <li>篮球</li>
        <li>羽毛球</li>
    </ul>
</body>
</html>
```

#### 练习：为之前制作的网页添加样式，使用下列属性
+ color 颜色值rgb
+ background-color
+ width height 长度值px
+ font-size

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style type="text/css">
        h1{
            color:red;
        }
        h2{
            background-color: yellow;
        }
        .question{
            background-color: green;
            color:white;
            font-size: 30px;
        }
        #first-img{
            width:80px;
            height:80px;
        }
    </style>
</head>
<body>
    <h1>我的第一个网页</h1>
    <h2>选择题</h2>
    <h3>第一题</h3>
    <p class="question">你喜欢哪一个水果？</p>
    <ul>
        <li>A:香蕉</li>
        <li>B:苹果</li>
        <li>C:鸭梨</li>
        <li>D:水蜜桃</li>
    </ul>
    <h3>第二题</h3>
    <p class="question">你喜欢哪一项运动？</p>
    <ul>
        <li>A:篮球</li>
        <li>B:足球</li>
        <li>C:排球</li>
        <li>D:乒乓球</li>
    </ul>
    <h3>第二题</h3>
    <p class="question">你喜欢哪一张图片？</p>
    <ul>
        <li>A:<img id="first-img" src="images/1.jpg"></li>
        <li>B:<img src="images/3.jpg"></li>
        <li>C:<img src="images/5.jpg"></li>
        <li>D:<img src="images/7.jpg"></li>
    </ul>
</body>
</html>
```


到这里，同学们已经完成了一个有内容的网页。但是同学们有没有发现一个问题，哪些元素自己占用了一行，哪些元素会和其他元素保持在一行。

#### 块元素、行级元素（行内元素、内联元素）、行级块元素
+ 块元素：h p ul li div 特点：独立成行
+ 行级元素：a 特点：不可以设置宽高 与其他行级元素在一行
+ 行级块元素：img 特点：可以设置宽高

##### 示例代码 [链接]()
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <h1>第一个h1标签</h1>
    <h1>第二个h1标签</h1>
    <p>第一个p标签</p>
    <p>第二个p标签</p>
    <ul>
        <li>第一个li</li>
        <li>第二个li</li>
        <li>第三个li</li>
    </ul>
    <a>第一个a标签</a>
    <a>第二个a标签</a>
    <img src="images/1.jpg" alt="">
    <img src="images/2.jpg" alt="">
</body>
</html>
```
那么有没有办法把两个块元素放到一行显示呢，肯定是可以的，具体方法如下

#### 元素浮动（float属性）
同学们已经知道了快元素独立成行，那如何让多个块元素可以在一行显示呢。

##### 示例代码 [链接]()
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style type="text/css">
        #list li{
            float:left;
            border:1px solid #f00;
            list-style: none;
        }
    </style>
</head>
<body>
    <ul id="list">
        <li>香蕉</li>
        <li>苹果</li>
        <li>鸭梨</li>
    </ul>
</body>
</html>
```

#### 练习：

##### 让多个有宽高的div浮动
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
            width:200px;
            height:200px;
            float:left;
        }
        .box1{
            background-color:red;
        }
        .box2{
            background-color:green;
        }
        .box3{
            background-color:blue;
        }
        .box4{
            background-color:black;
        }
        .box5{
            background-color:yellow;
        }
    </style>
</head>
<body>
    <div class="box box1"></div>
    <div class="box box2"></div>
    <div class="box box3"></div>
    <div class="box box4"></div>
    <div class="box box5"></div>
</body>
</html>
```

##### 使用float图片父级的li元素浮动。

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style type="text/css">
        #nav{
            list-style:none;

        }
        #nav li{
            float:left;
            width:80px;
        }

    </style>
</head>
<body>
    <ul id="nav">
        <li>主页</li>
        <li>视频</li>
        <li>图片</li>
        <li>新闻</li>
        <li>游戏</li>
    </ul>
</body>
</html>
```

#### 伪类选择器：hover
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style type="text/css">
        #nav{
            list-style:none;

        }
        #nav li{
            float:left;
            width:80px;
            text-align: center;;
            height:30px;
            line-height: 30px;
        }
        #nav li:hover{
            background-color: red;
        }

    </style>
</head>
<body>
    <ul id="nav">
        <li>主页</li>
        <li>视频</li>
        <li>图片</li>
        <li>新闻</li>
        <li>游戏</li>
    </ul>
</body>
</html>
```

*第一天课程结束，这一天学生了解到了什么是html，什么是css，并指导如何使用html和css制作一个简单的网页。目前因为没有学习DOM，所以网页的层级不多，下一节DOM课程，会深入学习元素之间是如何嵌套的。*
