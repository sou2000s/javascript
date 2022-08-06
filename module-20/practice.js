// //  inch to feet / miles to kilometer
// function inchToFeet(inches) {
//     const feet = inches/12;
     
//     return feet;
// }


// const dadaIncehes = 144;
// const dadaFeet = inchToFeet(dadaIncehes);
// console.log(dadaFeet);


// function milesTokilometer(miles) {
//     const kilometer = miles*1.609;
//     return kilometer;
// }

// const dadaMiles = 50;
// const dadaKilometer = milesTokilometer(dadaMiles);
// console.log(dadaKilometer);

// //  odd even number

// function odd_even(number) {
//     if (number %2==0) {
//         return true;
//     } else if (number %2!==0) {
//         return false;
//     } else{
//         console.log("janina vi");
//     }
// }

// const inputNumber = 5;
// const oddOrEven = odd_even(inputNumber);

// console.log(oddOrEven);

// /* 
//   another way
// */

// function isEven(number) {
//     const remainder = number %2;
//     if (remainder === 0) {
//         return true
//     } else {
//         return false
//     }
// }

// const number = 2;
// const even = isEven(number);

// console.log(even);

// //  return odd numbers sum from an array


// function getSum(numbers) {
//     let sum = 0;

//     for (let i = 0; i<numbers.length;i++) {
//         const index = i;
//         const element = numbers[index];
//         sum = sum +element

//         // console.log(index, element,sum);
//     }
//     return sum;
// }


// function getOddNumbersOfAnArray(numbers) {
//     const oddNumbers=[];

//     for (let i = 0; i < numbers.length;i++){
//         const index = i;
//         const element = numbers[index];
//         if (element %2 !==0) {
//             oddNumbers.push(element)
//         }
//     }
//     return oddNumbers;
// }


// const myNumbers = [12,65,45,78,32,45,91];

// const oddnumbers = getOddNumbersOfAnArray(myNumbers)
// //  console.log(oddnumbers);

// const oddNumbersSum = getSum(oddnumbers)



// console.log( "odd number sum:",oddNumbersSum);


//  Find leap year from an array

function findLeapYear(years){
     let leapYeasList = [];
    for (let i = 0 ; i< years.length;i++){

          if (years[i] %4 ==0) {
            const leapYear = years[i] ; 
            leapYeasList.push(leapYear);
         
        }
    }
    
     return leapYeasList;
    
}


const yearArray = [2023,2024,2025,2028,2030];
const newArrayOfLeapyear= findLeapYear(yearArray);

console.log(newArrayOfLeapyear);


function houre_to_minute(houre) {
    
    const houreToMinute = houre * 60;

    return houreToMinute;
}

const finalResult =  houre_to_minute(5);
console.log(finalResult);




/* 3) Challenging: Write a function called make_avg() which will take an array of integers and
the size of that array and return the average of those values. */


function make_avg(array){
   let sum = 0;
    for (var i = 0; i< array.length; i++){
        sum = sum + array[i];
    }
     
    let avg = sum/5;
    return avg;
}


const inputArray = [2,5,8,3,6];

const average = make_avg(inputArray);

console.log(average);


