//this is a comment
//arithmetic-operators
let a=5;
let b=4;

console.log("a+b=",a+b)
console.log("a-b=",a-b)
console.log("a*b=",a*b)
console.log("a/b=",a/b)
console.log("a%b=",a%b)
console.log("a**b=",a**b)

//unaryoperator
a++;
console.log(a)
b--;
console.log(b)

//assignmentoperators
// = += -= *= %= 
a+=4 //

//comparisonoperators
// == != ===(equal & type) !==(not equal & type)
// > < >= <= 

//logicaloperators
// &&(AND) ||(OR) !(NOT)

//conditions

let age=25;
if(age>=18){
    console.log("you can vote");
}
else{
    console.log("you cannot vote");
}

//oddoreven

let n = 10;
if (n%2==0){
    console.log(n, "is even")
}
else{
    console.log(n,"is odd")
}

//mode

let mode="dark";
let color;

if(mode==="dark"){
    color="black";
}
else if(mode==="white"){
    color="blue";
}
else{
    color="pink";
}

//ternaryoperators
//condition ? true output : false output

let result = age>18 ? "adult":"not adult";
console.log(result)
