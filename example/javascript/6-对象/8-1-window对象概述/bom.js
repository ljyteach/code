//在浏览器中window对象是全局对象。
//alert(typeof window);

//在全局执行环境中定义变量，其实是给全局对象window定义一个属性。
//var abc = "hello";
//alert(window.abc);

//同理，在全局执行环境中定义函数，这个函数时window对象的方法
/*
function winFun(){
	alert("hello");
}
window.winFun();
*/
