// let firstName = 'Olaiya';
// let lastName = 'Everjoy';
// console.log(firstName);

// let fullName = firstName + ' ' + lastName;

// console.log(fullName);

// console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase();
// console.log(result); 


// const names = [ 'femi', 'everjoy', 'olaiya' ];

// for(let i = 0; i < names.length; i++){
// //     console.log(names[i]);
// let html = `<div>${names[i]}</div>`
// console.log(html);
// }

// const password = 'password';
// if(password.length >= 12){
//     console.log('that password is super strong');
// } else if (password.length <=8){
//     console.log('password is not strong enough');
// }

// let i  = 0;
// while(i <= 5){
//     console.log('loop is ', i);
// i++;    
// }
// const numbers = [ 10, 20, 0, 30, 40, 50 ];


// for(let i = 0; i < numbers.length; i++){
//     if (numbers[i] === 0)
//         continue;
    
//     console.log('The numbers are: ',numbers[i]);
    
//     if (numbers[i] === 40){
//         console.log('congrats on the highest score')
//         break; 
//     }
    
// }

// const grade = 'B';

// switch(grade){
    
//     case 'A':
//         console.log('you got a grade A');
//         break;
//     case 'B': 
//         console.log('you got a grade B');       
//         break;
//     case 'C':
//         console.log('you got a grade C');
//         break;
//     case 'D':
//         console.log('you got a grade D');
//         break;       
//     case 'E':
//         console.log('you got a grade E');
//         break;       
//     default:
//         console.log('not a valid grade');

// }

// let age = '40'

// if(true){
//     let age = '20';
//     console.log('This is the perfect age ',age);
// }

// console.log('This is the perfect age ',age);

//functions: are reusable blocks of code that perform an action or are used to store a value

// function greet(){
//     console.log('Hello dear!')
// };

// greet();

// const adds = function greet(){
//     console.log('How are we today?')
// };

// add();


// const news = function(name = 'shaun', time = 'night'){
//     console.log(`good ${time} ${name}`)
// };

// // news('shaun', 'night');
// news();


//we want the function to return a value and not just store the value inside the var calcArea
// const calcArea = function(radius){
//     let area = 3.14 * radius**2;
//     return area;
// }

// const area = calcArea(5);
// console.log(area);

// const greets = function(){
//     return 'hello world!';
// }
// const results = greets();
// console.log(results);




// const greet = () => 'hello world';
// const result = greet();
// console.log(result);

// const bill = function(products, tax){
//     let total = 0;
//         for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     };
// }

// const bill = (products, tax) =>{ // products is the array of prices, while tax is the percentage tax rate. 
//     let total = 0;
//     // let products = [10, 20, 30]; the reason why we can't do this is beacuse we have identified product and tax
//     // let tax = [0.2];
//         for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;// products[i]: is the price amount and to get the tax we multipy the product price and tax.
//     };
//     return total;  // sends final total back (main purpose of a function)
// };
// console.log(bill([10,20,30], 0.2)); // calculation: 10 + 10*2 = 12 and so on.

//methods and call back functions

// const names = 'everj';

// let result = names.toUpperCase();
// console.log(result);

let people = ['shaun', 'aaron', 'luigi', 'caston','emma'];

people.forEach((person, index) => {
    console.log(`${index} - hello ${person}`)
});