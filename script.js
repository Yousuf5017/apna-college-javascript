// let mode = "dark";
// let color;
// if (mode === "dark"){
//     color ="black";
// }
// else if(mode === "blue"){
//     color =  "blue";
// }else if(mode === "pink"){
//     color = "pink"
// }else{
//     color = "white";
// }
// console.log(color);
// let age = 90;
// let result = age > 18 ? "adult" : "not adult";
// console.log(result)
// let num = prompt("enter a number")
// if (num % 5 == 0 ){
//     console.log(num , "is multiple of 5")
// }else{
//     console.log(num, "is not multiple of 5")
// }
// let score = 20;
// let grade;
// if (score >= 90 && score<=100){
//     grade = "A";
// }else if (score >= 70 && score<=89){
//     grade = "B";
// }else if (score >= 60 && score <=69){
//     grade = "C";
// }else if (score >= 50 && score <=59){
//     grade = "D"
// }else{
//     grade = "Fail"
// }
// console.log(grade)
// // class 3
//  for (let i = 1; i<=5; i++){
//     console.log("yousuf")
//  }
// for (let i = 1; i <=5; i++){
//   console.log("Khan")
// }
// let i = 1;
// while(i <= 10){
//     console.log("sami2");
//     i++;
// // }
// for (let i=0; i<=5; i++){
//    console.log('yousuf')
// }
// let i =1;
// while(i <= 10){
//     console.log("sami");
//     i++;
// // }
// let i = 1;
// do{
//     console.log("sami");
//     i++;
// }while(i <= 10)
// let student = {
//     name: "Yousuf",
//     age: 20,
//     cggpa: 7.5,
//     isPass:true,
// };
// console.log(student);
// for (let count = 1; count<=100; count++){
//     console.log(count)
// // }
// let str = "Apna College";
// console.log(str[0]);
// let obj = {
//     item:"pen",
//     price: 10,
// };
// console.log( "the cost of", obj.item , "is" ,  obj.price , "rupees");
// let fullname = prompt("enter your name");
// let username = "@" +fullname 
// console.log(username)
// for (let idx=0; idx<Array.length; idx++){
//     console.log(heroes[idx])
// }
// let items = [250, 645, 300, 900, 50];

// let i =0;
// for(let val of items){
//     console.log(`value at index ${i} = ${val}`);
//     let offer = val/10;
//     items[i] = items[i] -offer;
//     console.log(`value after offer${items[i]}`)
//     i++;
// }
// let fooditems = ["potato", "apple", "mango", "banana"];
// console.log(fooditems);
// fooditems.pop();
// console.log(fooditems);
// console.log(fooditems);
// console.log(fooditems.toString())
// let samifamily = ["Amin","Sadaf", "Ayesha" , "Ali", "Biba"];
// console.log(samifamily);
// console.log(samifamily.slice(1,3))
// let companies = ["Bloomerg" , "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// companies.splice(2,1,"Ola")
// companies.push("Amazon")
// console.log(companies)
// function myfunction(msg){
//     console.log(msg);
// }
// myfunction("I love JS");
// function sum(x,y){
//     s = x + y;
//     return s; 
// }

// let val  = sum(3 , 4);
// console.log(val)
// function sum(x,y){
//     s= x + y;
//     return s;
// }
// let val = sum (3,4)
// console.log(val)
// function mul(a,b){
//     return a*b;
// };
// const printHello = () =>{
//    console.log("hello")
// };
// printHello()
// function countVowels(str) {
//     let count = 0;
//    for(const char of str){
//     if(
//         char === "a" ||
//         char === "e" ||
//         char === "i" ||
//         char === "o" ||
//         char === "u" 
//     ){
//       count++
//     }
//    }
//    console.log(count )
// }
// function countVowels(str){
//     let count = 0;
//     for(const char of str){
//         if(
//         char === "a" ||
//         char === "e" ||
//         char === "i" ||
//         char === "o" ||
//         char === "u" 
//     ){
//         count++
//     }
//     }
//     console.log(count)
// }
// const countVow =  (str) =>{
// let count = 0;
// for(let char of str){
//     if(
//         char === "a" ||
//         char === "e" ||
//         char === "i" ||
//         char === "o" ||
//         char === "u" 
//     ){
//         count++
//     }
//     console.log(count)
// }
// }

// let arr = [1,2,3,4,5]
// arr.forEach((val) =>{
//    console.log(val) 
// })
// let num = [2,3,4,5,6]
// num.forEach((num) =>{
//    console.log(num*num)
// })
// let nums = [2,3,4,5,6]
// nums.map ((val) =>{
//     console.log(val)
// })
// let num = [1,2,3,4,5,6];
// const output = num.reduce((res,cur) =>{
//     return res + cur;
// })
// console.log(output)
// let marks = [20, 30, 40, 50, 60, 70, 80 , 90, 100, 101, 102 , 103]
// let finalmark = marks.filter((val) =>{
//     return val > 80;

// })
// console.log(finalmark)
// let heading = document.getElementById("heading")
// console.log(heading)

// let headings = document.getElementsByClassName("heading");
// // console.log(headings)
// console.log(headings)
// let para = document.getElementsByTagName("p")
// console.log(para)
// let elements = document.querySelector("p")
// console.log(elements)
// let first = document.querySelectorAll("#myid")
// console.log(first)
// let divs = document.querySelector("div")
// console.log(divs)
// let heading = document.querySelector("h2");
// console.log(heading)
// let id = div.getAttribute("id")
// console.log(id)
// let div = document.querySelector("div");
// div.style.backgroundColor = "black";
// div.style.color = "white"
let newbtn = document.createElement("button");
console.log(newbtnx)