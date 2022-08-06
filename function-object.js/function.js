
// function declaration

// function startFan() {
//     console.log('stand up');
//     console.log('Walk towards the switch');
//     console.log("press the switch");
// }

// // startFan();


// function bringSingara(money) {
//     console.log( "taka disen: " , money);

//     console.log("ei nen singara");
// }

//  var taka = 300;
// // bringSingara(300);

// function add(num1, num2) {
//      console.log("going to add : ", num1,num2);
// }

// // add();


// function sum(a,b,c,d,e) {
//     console.log(a,b,c,d,e);
//     var sum = a+b+c+d+e;
//     console.log(sum);
// }

// sum(15,18,20,25,50)


function add(number1,number2) {
    console.log(number1,number2);

    var sum = number1 + number2;
    // console.log(sum);
    return sum;
}

var total = add(80,20);
// console.log("total", total);
// add(45,15);

function bringSingara(money) {
    var singaraPrice = 10;
    var quantity = money/ singaraPrice;

    return quantity;
}

var moneGiven = 150
var singaras= bringSingara(moneGiven);

console.log("eating singaras :",singaras);


function getAverage(assignment1,assignment2, assignment3) {
     const total = assignment1+assignment2+assignment3;
     const average = total / 3;
     return average;
}

const assignment1Marks = 60;
const assignment2Marks = 58;
const assignment3Marks = 59;

var myAvarage = getAverage(assignment1Marks,assignment2Marks,assignment3Marks);

console.log( 'my average so far: ',myAvarage);
