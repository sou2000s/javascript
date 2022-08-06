        // Harry’s mom gave him money and asked him to buy some oranges and apples. Write a program to
        // help Harry calculate how much money the shopkeeper will return.
        // Input:
        // The first line of the input is the taka Harry’s mom gave him.
        // The second line is the cost of 1 kg of oranges and 1 kg of apples.
        // Output:
        // Print the result.

        // Practice Problem 1

        // Sample Input:
        // 1000
        // 700
        // Output:
        // 300



        //  solution


            // var taka = 1000;

            // var oranges = 400;

            // var apples = 300;

            // var totalPrice = oranges + apples;
           
            //  var harryReturn = taka - totalPrice;
            // console.log(harryReturn);

 
                   
            //  problem 2


            // Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and
            // Bangla of a student.
            // Input:
            // The first line of the input is the marks of the five subjects mentioned above, respectively.
            // Output:
            // Print the result in 2 decimal places.
            
            // Practice Problem 2
            
            // Sample Input:
            // 75.25, 65, 80, 35.45, 99.50
            // Output:
            // 71.04          


    // var Mathematics = 75.25;
    // var Biology = 65;
    // var  Chemistry= 80;
    // var Physics = 35.45;
    // var Bangla = 99.50;


    // var totalMarks = Mathematics + Biology + Chemistry + Physics + Bangla;

    // var average = parseFloat((totalMarks / 5).toFixed(2) ) ;
  
   
    // console.log(average);            




//     John’s teacher gave him two variables. Each variable contains a string. John’s teacher asked him to
// combine these two strings and print them in one line. Help John write the program.
// Input:
// The first and the second lines of the input contain the strings.
// Output:
// Print the result in one line.

// Practice Problem 3

// Sample Input:
// I am going to be
// an awesome web developer
// Output:
// I am going to be an awesome web developer

  

// var firstLine = "I am going to be"

// var secondLine = "an awesome web developer"

// var fullSectence = firstLine +" "+ secondLine;

// console.log(fullSectence);


    // Sarah’s mother is teaching her mathematics. She gave Sarah a number and asked her what the
    // remainder would be if she divided the number by 5. Help Sarah write the program.
    // Input:
    // The first line of the input contains the number.
    // Output:
    // Print the remainder.

    // Practice Problem 4

    // Sample Input:
    // 119

    // Output:
    // 4

    // var number = 119;

    // var remainder = (number % 5);
  
    // console.log(remainder);


    

    /* 
      for-loop while-loop practice
    
    
    */



     
 var dailyWork =["Rat 8 tai baje module unlock",
    "Fota-fot video dekhe practice",
    "Video dekhe notes nau",
    "Module ses hole nija nija practice koro", "kono kichu bujhta na parle" , 
]


for(var i=1 ;i<40 ;i++){
    
    
    for(var j=0; j<dailyWork.length;j++){
     
        var theDay= dailyWork[j]
        
    console.log(theDay);
     if (theDay === "kono kichu bujhta na parle") {
        console.log("support session join koro");
     }
   
    }

    }
   

// for (var index =0; index < dailyWork.length; index++){
//     console.log(index);

//     for(var i = 0; i<dailyWork.length; i++){
//         var theDay = dailyWork[i];

//         if (theDay === "kono kichu bujhta na parle") {
//              console.log("Support session join koro");
//         }
//     }
// }
    
    





//  reverse way

// for(i=4; i >= 0 ; i--){
//     var work = dailyWork[i];
//     console.log(work);

//     if (work === "kono kichu bujhta na parle") {
//         console.log("support session join koro");
//     }

   
    
    
// }
