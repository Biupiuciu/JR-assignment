//作业1. Let, Const 和 Var
const name="Alice";
if(true){
    const name="Bob";
    console.log(name);
}
console.log(name);

//var会被hoist 
//var允许redeclare =>可能会被不小心覆盖
//var的作用域更广 是函数作用域 即{}内也能访问 
//浏览器里全局var会被挂到window上 容易覆盖已有的全局属性


//作业2. 箭头函数 (Arrow Functions)
const add=(a,b)=>{return a+b}

//箭头函数没有自己的this 它的this继承于外层函数或作用域 
//无法通过call bind apply改变


//作业3: 模板字面量 (Template Literals)
let greeting=`Hello, ${name} ! Welcome to the course. 
HIIII`
console.log(greeting);


//作业4.解构赋值 (Destructuring)
const person={
    firstname:"Alice",
    age:15,
    city:"sydney"
}

const {firstname,age,city}=person;

function printPerson({firstname,age,city}){
    console.log(firstname);
}
printPerson(person);


//作业5. 默认参数（Default Parameters）
function calculateArea(width,height=width){
    return width*height;
}

console.log(calculateArea(30));

//作业6. Rest/Spread 运算符

function sum(...arr){
    return arr.reduce((acc,cur)=>acc+cur,0);
}

let arr1=[1,2];
let arr2=[3,4];
let arr=[...arr1,...arr2];

