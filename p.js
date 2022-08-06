// var myMoney = 90000;


// if(myMoney > 80000 ){
//  console.log("Mac kinbo");
 

// } else if(myMoney > 60000){
//     console.log("gamming laptop kinbo");
// } else if(myMoney > 40000){
//     console.log("lenevo yoga");
// } else if (myMoney > 20000){
//     console.log("second hand laptop");
// }
// else{
//     console.log("mobile deai kaj chalabo");
// }


// var statement = ["aske amar mon valo nai"];

// for (i=0 ; i < 40 ; i++){

//     for(j=0; j< statement.length; j++){
//         var j = statement[j]
//         console.log(j);
//     }
// }


// for(i=58; i<98 ; i++){
//     console.log(i);
// }

// var learnTillnow = ["a" , "b", "c","d"];
// console.log(learnTillnow.indexOf("d"));
// for(i=0 ; i < learnTillnow.length;i++){
    
//     console.log(learnTillnow[i]); 
    
// }


// // for(i=30; i< 87; i++ ){
// //     console.log(i);

// //     if(i === 44){
// //         break
// //     }
// // }


// var myBooksPrice = [100,300,98,150,30,500,40,400,20]

// for(i=0; i< myBooksPrice.length; i++){
   
//     var dam200Erbesi = myBooksPrice[i]
//     if (dam200Erbesi > 200) {
//         continue;

//     }
//     console.log(myBooksPrice[i]);
// }

//   ২. এমন  একটা  প্রোগ্রাম  লিখো   যেখানে  একটা  নম্বর  ইনপুট  করলে  কনসোল এ বলে  দিবে  যে  এইটা  জোর  নাকি  বিজোড় 
// var inputNumber = 3;

// if(inputNumber%2 == 0){
//     console.log("This number is even number" + inputNumber);
// } else if(inputNumber%2==1){
//     console.log("This number is odd number" + inputNumber);
// }

// else{
//     console.log("janinavi");
// }


var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

// // ৬.উপরে এর  এরে  থেকে যেখানে  ৫ টা  ফ্রেন্ড  এর  নাম  এর  মধ্যে   বড়ো  নাম  কোন  ফ্রেন্ড  এর  খুঁজে  বের  করা 


var longestName = friends[0];

for(i=0; i < friends.length; i++){
      var name = friends[i];
    
    if (name.length > longestName.length ) {
      longestName = name
    }
     
     
}

console.log(longestName);



// var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

// // // ৭. উবের  পরের  এরে  থেকে  ডুপ্লিকেট  নম্বর  গুলা  বাদ  দিয়ে  উনিক  নম্বর  গুলা বের  করতে    হবে 
//   var noDoblicate; 




var numbers = [1, 2, 3, 3, 80, 4, 5, 6, 7, 8, 9, 10,50];

var largestNumber= numbers[0];

for(i=0; i< numbers.length;i++){
   
  if(numbers[i] > largestNumber ){
   largestNumber = numbers[i]
   
  }

  
}
console.log(largestNumber);




// var numbers = [2,3,1,5,4]

// for(i=1 ; i<numbers.length;i++ ){

//   for(j=0;j<i-1 ;j++){
//     if(numbers[i] < numbers[j]){
//       var temp = numbers[i]
//       numbers[i] = numbers[j];
//       numbers[j] = temp;
//     }
//   }
//   console.log(numbers[i]);
// }






// ৪.এমন  একটা  প্রোগ্রাম  লিখো  যেখানে   নম্বর  ইনপুট  করলে  বলে  এইটা  লিপ ইয়ার  কি  না ?


// var inputYear=2012;

// if(inputYear%4 ==0){
//   console.log( inputYear + " This year is leapyear");

// } else {
//   console.log(inputYear + " This year is  not leapyear");
//  }



// . ১-৫০ এর  মধ্যে  ৩ এবং ৫ দিয়ে  বিভাজ্য  সংখ্যা  গুলা  বের  করো 


// for(i=1; i<50 ; i++){
 
//      if (i%3==0 && i%5==0) {
      
//        console.log(i);
//      }

   

// }
