var Arr = [1, 7, 2, 8, 3, 4, 5, 0, 9];

for (var i = 1; i < Arr.length; i++)
    for (var j = 0; j < i; j++)
        if (Arr[i] < Arr[j]) {
          var x = Arr[i];
          Arr[i] = Arr[j];
          Arr[j] = x;
        }

console.log(Arr);




var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];


for(var i=0; i< numbers.length;i++){

    for( var j=0; j < numbers.length; j++){
   
       if (i !== j) {

          if (numbers[i] === numbers[j]) {
                numbers.splice(j,1)   
          }
       }

    }
}

console.log(numbers);

var statement =["aska amar mon valo nai"] 
for (i=0 ; i < 5 ; i++){

    for(j=0; j< statement.length; j++){
        var j = statement[j]
        console.log(j);
    }
}