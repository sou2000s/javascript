/* 
1) Write a function called foo() which prints “foo” and a function called bar() which prints
“bar”. Call function bar() in the foo() function after printing. What will be the output? Now call
the foo() to see the output.


*/

function foo() {
    console.log("foo");
   
    bar()

}
// foo();
function bar() {
    console.log("bar");
}


/* 
2) Write a function called make_avg() which will take an three integers and return the
average of those values.

*/

function make_avg(num1,num2,num3) {
     
    
    const total = num1+num2+num3;

    const make_avg = total/ 3;

    return make_avg;
}

 var average = make_avg(6,6,6);


//  console.log(average);



// No return + Has parameter
function odd_even(number) {
     
    if (number % 2 ==0) {
        console.log("this is a even number");
    } else if(number%2 !=0 ){
    console.log("this number is a odd number");
    }

    // return even;
   
}

 odd_even(3);

// Has return + Has parameter

function odd_even(number) {
    
}


/* 

5) You are in a hurry to go to your school on time. But when you are crossing the road, the
traffic signal is red coloured. In this situation, if you try to cross the road, you may be in
danger.If you notice a yellow coloured traffic signal, you should stop. If you notice a green
coloured traffic signal, you should cross the road. So write a JS code, where there is a
variable called signal. Its value can be green, yellow or red & we will get different activities as
output depending on the variable. So, hurry up.

*/


var signal = "green";

if (signal === "red") {
    console.log("you may be in danger");
} else if(signal === "yellow"){
    console.log("you should stop.");
} else if (signal === "green") {
    console.log("you should cross the road.");
}
 else{
    console.log("signal kharap");
 }


//  pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা : এবং pepperoni প্রিন্ট করবা।

 const pizza = {

    toppings: ['cheese', 'sauce', 'pepperoni'],
   
    crust: 'deep dish',
   
    serves: 2
   
   }

  var toppings= Object.values(pizza["toppings"]);

   for(var i = 0; i< toppings.length;i++){
     if (toppings[i] === "pepperoni") {
         console.log(toppings[i]);
     }
}


// ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। 



function namta(number) {
    var i=1;
    // let finalresult;
    while (i<10) {

        var result = i * number;
         var mini = i++;
        // console.log(i ,"X",number ,"=", result);
        console.log( mini,"X",number,"=",result);
    }
   
    
      
}

const inputNumber = 12;

const namta13 = namta(inputNumber);
//  console.log(namta13);
/* 


৩. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে।



*/

function fullname(firstName,lastName) {
    const fullname = firstName+" "+lastName;
    
    return fullname;
}

const firstName = "Souparna";
const lastName = "Mahato";


var fullname = fullname(firstName,lastName);

console.log(fullname);


/* 
একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।


*/
// const  inputNumber = 5;

// function square(number) {
    
//     const result = number * number ; 
//     return result
// }

// var sruareResult = square(inputNumber);

// console.log(sruareResult);







function multiplication(n) {
    var namtaContainer = "";
    var i =1;
    while (i<=10) {
        // namtaContainer+=n + "X" +i+ "=" + i*n + "\n";
        i++  
    }
    return namtaContainer;
}

var namta = multiplication(13);
console.log(namta);









