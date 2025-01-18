console.log("Avishka");
let fullname="Avishka Srivastava";
console.log(fullname);
let age=24;
let price=99.99;
console.log(age,price);
x=null;
console.log(x);
y=undefined;
console.log(y);
//we use let(can be updated), const(cannot be updated) nowadays because they cannot be re-declared unlike var//
 let z=BigInt("1234");
 const student = {
    name: "Avishka Srivastava",
    years: 21,
    college: "VIT",
 }
 console.log(student);
 console.log(student["years"]);
 console.log(student.college);
 student["years"]=student["years"] + 1;
 console.log(student.years);
 console.log(student);