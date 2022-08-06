// ১. আমি যদি বলি তিনটা ভেরিয়েবল ডিক্লেয়ার করতে হবে। সেটা তোমাকে পারতে হবে। 
var name = "Souparna Mahato";
var age = 22;
var degree = "graduation";


// ২. একটা লুপ লিখতে হবে যেটা ১ থেকে ১০০ পর্যন্ত যত সংখ্যা আছে সেটা দেখাবে 

     for(var i = 1 ; i<=100 ; i++){
        console.log(i);
     }

// ৩. ৫০ থেকে ৮০ এর মধ্যে যতো বিজোড় সংখ্যা আছে সেগুলাকে দেখাবে। 

    for(var i =50; i<=80;i++){

        if (i %2 !=0) {
            console.log(i);
        }
    }

// ৪. তিনটা সংখ্যা এর যোগ করতে পারবে এমন একটা ফাংশন লিখো 

function sum(num1,num2,num3) {
       var total = num1+num2+num3;

       return total;
}

 const totalSum = sum(1,2,3);

 console.log(totalSum);


