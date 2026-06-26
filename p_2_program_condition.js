// var number = 10.5;
// console.log(number);
// var number1 = parseInt(number);
// console.log(number1);
// var number2 = parseFloat('50.5');
// console.log(number2);
// console.log(typeof number);


// var number3 = 10;
// var number4 = 40;
// var total = number3 + number4;
// console.log(total);

// var subtraction = number3 - number4;
// console.log(subtraction);

// var multiply = number3 * number4;
// var div = number3 / number4;
// console.log(multiply, '\n', div);

// var mod = number3 % number4;
// console.log(mod);

// console.log('10' + 10);
// console.log('100'- 10);
// console.log('5' * 4);
// console.log('10' / 2);
// console.log('10' % 3);

// var x = '1000';
// console.log(typeof x);
// var num = Number(x);
// console.log(typeof num);
// console.log(num);

// let y = isNaN('50');
// console.log(y);

// let z = isNaN(50);
// console.log(z);

// let s = isNaN("Hello");
// console.log(s);

console.log(10 == '10')
console.log(10 === '10')

number = 50;
if(number % 2 == 0){
    console.log("Even Number.");
}else {
    console.log("odd number");
}


const price = 4999;
if(price >= 5000){
    // discount 10% 
    let disc = price *  10 / 100;
    let payAble = price - disc;
    console.log("After 10% discount ",payAble);
}else if( price >=2500){
    // discount 5 %
    let disc = price * 5 /100;
    let payAble = price - disc;
    console.log("After 5 % discount",payAble);
}
else {
    console.log("Without discount ",price);
}

//                 Grading point calculator
marks = 23
if(marks >= 80){
    console.log("A+");
}else if(marks>=70){
    console.log('A');
}else if(marks >= 60){
    console.log("A-");
}else if(marks >= 50){
    console.log("B");
}else if(marks >= 40){
    console.log("C");
}else if(marks >= 33){
    console.log("D");
}else {
    console.log("F");
}

//                foot to meters
var meter = 5.4 * 0.3048;
console.log("Feet to meter: ",meter)

//                BMI Calculator

const weight = 65 // kg
let height = meter // meter
const BMI = weight /  (height  *  height);
console.log("BMI", BMI);
if (BMI >= 30){
    console.log("Obese");
} else if(BMI <30 && BMI >=25){
    console.log("Over Weight");
}else if(BMI <25 && BMI >= 18.5){
    console.log("Normal Weight");
}else {
    console.log("Under Weight");
}