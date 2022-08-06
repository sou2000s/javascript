var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen:25,
    shoes: 2
}
//  var sunglass = shoppingCart["sunglass"];
  
// shoppingCart.sunglass = 5
// console.log(shoppingCart);
const keys = Object.keys(shoppingCart);

// console.log(keys);

const value = Object.values(shoppingCart);

// console.log(value);


for(var i = 0; i< keys.length;i++){
    // console.log(keys[i]);

    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    console.log(propertyName, propertyValue);
}
