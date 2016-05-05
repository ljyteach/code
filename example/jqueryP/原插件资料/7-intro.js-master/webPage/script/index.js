 function startIntro(){
  var intro = introJs();
    intro.setOptions({
      steps: [
        { 
          intro: "你好，这是一个测试页面！"
        },
        {
          element: ".nav",
          intro: "这里是菜单栏！"
        },
        {
          element: ".logo",
          intro: "这里是LOGO！"
        },
        {
          element: ".banner-con",
          intro: "这里是图片展示区，提示显示在右侧！",
          position: 'right'
        },
        {
          element: '.container-con',
          intro: '这里是网页的内容，提示显示在上方！',
          position: 'top'
        },
        {
          element: '.footer',
          intro: "这里是页脚，提示仍然显示在上方！",
          position: 'top'
        },
        {
          intro: "非常感谢您的观看！<br />祝您愉快！",
        }
      ]
    });

    intro.start();
}
startIntro();