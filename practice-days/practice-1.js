
// ১. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে 
  
                 function celsiusToFarenheit(celsius) {
                      var  farenheit = ((celsius * 9/5) + 32);
                        return farenheit;
                 }

                 var celsius = 5;

                 var farenheit = celsiusToFarenheit(celsius)
                  console.log(farenheit);
  

// ২. একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে। 


               function farenheitToCelcius(farhenheit) {
                      var celsius = ((farhenheit - 32) * 5/9) ;

                      return celsius;
               }

               var farhenheit = 5;
               var celsius = farenheitToCelcius(farhenheit);

               console.log(celsius);

// ৩. কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে। 

        function grade(number) {
             if (number >= 80) {
                 console.log("A grade");
             } else if (number >= 60) {
                 console.log("B grade");
             } else if (number>=50) {
                 console.log("C grade");
             } else {
                console.log("Failed");
             }
        }

       var yourNumber = 20;
       grade(yourNumber);
        
          


// ৪. সুদের হিসাব করবে। জাস্ট হিসাব কেমনে করতে হয়। সেই চিন্তায় করবে। সুদ ভালো না খারাপ সেটা এখন চিন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলা থাকলে সেটা কিভাবে কোড এ লিখতে হয় সেই এঙ্গেল থেকে করার চেষ্টা করো। 


    //  function simpleInterest(p ,t,r) {
    //       var sI = (p*r*t) / 100;

    //       return sI;
    //  }

    //  var p = 1000;
    //  var t= 2;
    //  var r= 5;

    //  var interestAmount = simpleInterest(p,t,r);

    //  console.log(interestAmount);


    //  Compound interest

     function compoundInterest(p,r,n) {
          
        var compound_Interest = (p*(Math.pow((1 + r/100),n)) ) - p;
        return compound_Interest;
     }

     var p = 6000;
     var r= 9;
     var n= 2;
     
     var result = compoundInterest(p,r,n);

     console.log(parseFloat(result.toFixed(1)) );





    


// console.log(Math.pow(7, 2));