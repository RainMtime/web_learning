// js 函数相关
function myFirstJsFun(){
    document.getElementById("demo").innerHTML = "我的第一个 javaScript 函数"
}

function add(a,b){

    if(a >b){
        return;
    }
    x = a+b;
    return x;
}

//js 对象
var person = {
    name:"CHUNYU",
    firstName:"Jin",
    age:50,
    eyeColor:"blue",

    // js函数
    fullName :function(){
        return firstName + "" +"name";
    }

}

//非严格模式下给未声明变量赋值创建的全局变量，是全局对象的可配置属性，可以删除。然后就不可在用
carname = "Sony";
delete carname;
console.log(carname);
