function Foo(){
	getName=function(){
		alert(1);
	}
	return this;
}/*定义一个叫Foo的函数*/
Foo.getName=function(){
	alert(2);
};/*为函数Foo创建一个静态属性存储匿名函数*/
Foo.prototype.getName=function(){alert(3)};/*为Foo的原型对象创建一个getName函数*/
var getName=function(){alert(4)};/*通过函数变量表达式创建*/
function getName(){alert(5)};/*声明一个函数*/


Foo.getName();//2
getName();//4
Foo().getName();//1
getName();//1
new Foo.getName();//2
new Foo().getName();//3
new new Foo().getName();//3
