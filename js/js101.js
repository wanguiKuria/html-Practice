 // Doing basic things and practice in javascript-- JS101..Variables,primitive types,functions, arrays


 console.log("Hey there!");
//lets declare variables(loosely typed)
var name="somebody";
let second_name="Kuria";
let number=8;
let sum= number+8;

console.log(sum);
if(sum>3){
    console.log("Sum is greater than 3");
}
else{
    console.log("smaller");
}
let Students=['Dan','Pam'];

console.log(Students.length);
console.log(Students[0]);
console.log(Students[1]);
let test= 4+6+"5";
console.log(test)

//call a function
function hello(){
    console.log("Hi")
}
hello();

console.log(5===5);
 
 
 
           // more practice
 //declaring variables and initializing variables
 let name= "Esther";//can be re-assigned
 const pi= 22/7;// cannot change/be re-assigned
 var age;//can be re-assigned


  //alert statement
 alert("This is a popup on the browser"); // different from console.log()


 //declaring an array and populating it---from the quizes
 let arr=["one",2,3,4];
console.log(arr[3]-arr[0]); //log to the console


 //defining a function and providing implementation for it
function user(){
    console.log("a user");

    //declaring a variable inside a function

    let name="Esther"; }

 // defining an arrow function - ES6
const user = () => {

    console.log("a user");  }


 //calling a function
user();


 //defining a function
function sum(num1,num2){
    return num1+ num2;
    
}
 sum(6,'2');
 // logging to the browser console
   console.log(3+4+"5");
  
   let j=8;
   let i=10;
  console.log(j);

function test(){
    console.log(name);
    let name="Mulwa";
}
test();

   function greeting(){
       console.log("Hello ma'am");
    }


    numbers=[20,50,30,25,45,100,1,1,2,3,4,5,6,7,8,9,10]; //array of numbers
//sorting the array
numbers.sort();
console.log(numbers);
