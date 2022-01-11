// let x = 10;
// let y = x;
 
// x= 20;
// console.log(x);

// let number = {value:10};

// function pranay(number){
//     number.value++
// }
// pranay(number)
// console.log(number);  // here we increment the number but it not incremnt primitive copies by their valuee 

// let number = {value : 10};
// function pranay(number){ // in this that number also point  to that reference.
//     number.value++
// }
// pranay(number) // when we call this function then object is passed by his reference
// console.log(number);
// example primitivies copy by value.
// let name = "pranay";
// console.log(name);

// let secondname = name;
// console.log(secondname);

// name = 'atharv';
// console.log(secondname);

// example of reference
// let person = {
//     age: 28,
//     name : 'omkar',
//     hobbies:['sports','trek']
// };
// console.log(person);
// let secondname = person;
// console.log(secondname);
// person.name = 'soham'
// console.log(secondname);

// let string = 'neoquant solutions'
// for(let i = string.length; i--;){
//  console.log(string[i]);
// }

 
// function reverse(str){
//     return str.split('').reverse().join('');
// }
// console.log(reverse("neoquant solutions"));

// let string = "neoquantsolutions";
// let pranay = {};


// for(let i = 0; i< string.length;i++){
//     let char = string[i];
//     if(!pranay[char]){
//         pranay[char]= 0;
//     }
//     pranay[char]++;
    
// }
// console.log(pranay);

let object = [
    {age : 15, name:"atharv"},
    {age : 16, name:"yash"},
    {age : 17, name:"jay"},
    {age : 18, name:"pranay"},
    {age : 19, name:"omkar"},
    {age : 20, name:"siddhesh"},
    {age : 21, name:"shrutik"},
    {age : 22, name:"soham"},
    {age : 23, name:"prasad"},
    {age : 24, name:"vikram"},
    {age : 25, name:"videsh"}
]


// let pranay = object.map(a =>{
//     return a.name
// })
// console.log(pranay);
for (let [key, value] of Object.entries(object)) {
    console.log( "age" + ":" +value.age);
  }
// let maxAge = Math.max(...object.map(a => a.age))
// console.log(maxAge);

// let minAge = Math.min(...object.map(a => a.age))
// console.log(minAge);

// let totalAge = object.reduce((previous,current) => current.age + previous ,0);
// console.log(totalAge);

// let pranay = object.map(a => a.name).sort().reverse()
// console.log(pranay);