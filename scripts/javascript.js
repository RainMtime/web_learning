// 赋值
var x = 1;
//字符串
'Hello,Wrold'
//数据类型-javaScript 不区分整数和浮点数，统一用Number表示,NaN  表示Not a Number
//Number类型

//字符串类型

//布尔值 （注意== 和 ===区别） 
// false == 0  // 结果是true
// fasle === 0 // 结果是false
// NaN ===NaN  // 结果是false
// null 和 undefined 

//数组类型 （javaScript 中的数组可以包括任何数据类型）
//[1,2,3.14,'hello',null,true]

//对象（JavaScript 对象是一组由key-value对组成的无序集合）
// key已定是字符串类型，值可以是任意数据类型
var person = {
    name:'Bob',
    age:20,
    tags:['js','web','mobile'],
    city:'Beijing',
    hasCar:true,
    zipCode:null
}
console.log(person.name);

// 变量
var a; // 申明了变量a，此时a的值为undefined
var $b = 1; // 申明了变量$b，同时给$b赋值，此时$b的值为1
var s_007 = '007'; // s_007是一个字符串
var Answer = true; // Answer是一个布尔值true
var t = null; // t的值是null

// 变量可以反复赋值，并且可以是不同类型
var aa = 'chunyu';
aa = 2;

//设计缺陷
//之前如果没用var 申明变量的话，变量会变成全局变量，这样多个js文件的话，如果有重名的变量的话，就会冲突
// 最新的标准是，要使用 strict模式，强制必须通过var 来声明变量。

//字符串详解（反引号，来确定字符串）
console.log(`多行
字符串
测试，哈哈`)

"She's pretty girl"

//字符串模版
var name = 'chunyu';
var age = 20;
var message = '你好,'+name+'haha' +age;
var mseeage2 = `你好 ${name}`

//操作字符串

var s = 'Hello world';

console(s[0]);

//字符串是不可变的，如果对字符串的某个索引赋值，不会有任何错误，但是，也没有任何效果
s[0] = 'Y' // 其实s仍然为 Hello world

s.toUppercase();
s.toLowerCase();

s.indexOf('world'); //返回7
s.substring(3,6); //从索引7开始结束


//数组详情，给数组的length 赋值的话，会倒是数组变化
var arr = [1,2,3];
arr.length = 6;
console.log(arr); // 输出 1 2 3 undefined undefined underfined

// indexOf ,slice 跟string indexof subString 类似
// push 和pop ，
// unshift 和shift
// sort
// reverse
// splice()方法是修改Array的“万能方法”，它可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素：
// concat()方法把当前的Array和另一个Array连接起来，并返回一个新的Array：
// join()方法是一个非常实用的方法，它把当前Array的每个元素都用指定的字符串连接起来，然后返回连接后的字符串：


//对象详情 javascript 默认表示对象方式 {}
var xiaoming = {
    name: '小米姑娘'
}
xiaoming.age = 10;
delete xiaoming.age //删除 age属性

//检测某一个对象是否有 某个属性例如(如果是继承得到的话，也会返回true)
'name' in xiaoming;  //true;
//检测是否是xiaoming对象的原生属性的话
xiaoming.hasOwnProperty('name');//true;

//条件判断
var age = 20;
if(age >=198){

}else{

}

//循环计算

for(var key in xiaoming){
    if(hasOwnProperty(key)){
     console.log(key);
    }
}

//Map 数据结构 (ES6 引入)
var names = new Map([['chunyu',24],['xiaojuan',19],['xiaonan',29]]);
console.log(names.get('chunyu'));
//empty map
var emptyMap = new Map();
emptyMap.set('chunyu',25);
// emptyMap.set()
emptyMap.delete('chunyu');

for(var key of emptyMap){
   //这里输出的是索引
}

for(var key in emptyMap){
    //这里输出的是值
}
//也可以直接使用
a.forEach(function (element,index,array){

})


// 函数相关
function abs(x){

    return 1;

    //如果没有return 语句，则类型是undefined类型
}

// 函数也是一个对象

var abss = function(x){
    return 2;
}

//