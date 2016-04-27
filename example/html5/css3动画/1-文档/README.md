### css3变形 tansform
1. 旋转 tansform:rotate(45deg) 旋转角度
2. 扭曲 tansform:skew(45deg,25deg)  x和y轴扭曲角度
3. 缩放 tansform:scale(1.5,2) 横向纵向缩放比例
4. 位移 tansform:translate(10px,100px) x和y轴位移像素
5. 远点 tansform-origin 设置远点位置

### css3动画 tansition
1. transition-property:过度或动态模拟的css属性
2. transition-duration:完成过度所需要的时间
3. transition-timing-function:指定过度函数
4. transition-delay:置顶开始出现的延时时间
5. transition:proterty duration function delay;放在一行的写法。

#### transition-timing-function
1. ease:默认值，元素样式从初始状态到终止状态速度由快到慢。
2. linear:从开始到结束速度不变
3. ease-in:速度越来越快
4. ease-out:速度越来越慢
5. ease-in-out:先加速，再减速

### keyframes 关键帧
1. @keyframes name 置顶动画名称
2. animation-name: 调用动画
3. animation-duration: 设置动画时间
4. animation-timing-function:设置动画函数
5. animation-delay:设置动画开始前延时时间
6. animation-iteration-count:播放次数，infinite无限循环
7. animation-direction:播放方向 normal循环播放 alternate奇数向反方向播放
8. animation-fill-mode:定义动画开始之前和结束之后执行的操作
