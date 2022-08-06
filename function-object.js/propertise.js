var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen:25
}

//  when you know the specific property name, use dot notation
var penCount = shoppingCart.pen;

// alterntive system

var penCount2 = shoppingCart["pen"];

var propertyName = 'mouse';

var propertyValue = shoppingCart[propertyName];
// console.log(propertyName,":",propertyValue);

var propertise = Object.keys(shoppingCart);
var propertiseValue = Object.values(shoppingCart)
// console.log(propertise);
// console.log(propertiseValue);

console.log(shoppingCart);




//  set property vlues

shoppingCart.mouse = 15;

console.log(shoppingCart);

shoppingCart["mouse"] = 29;

console.log(shoppingCart);

shoppingCart[propertyName] = 89;

console.log(shoppingCart);
