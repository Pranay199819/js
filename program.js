// let array = [2,6,5,7,5,15]

// for(let i = array.length; i--;){
//   console.log(array[i]);
// }
//  console.log(array);

// let array = [7,29,36,49,67,293]

// let prime =[]

// function is_prime(number){
//     let pranay = number / 2 ;
//     for (let j = 2; j<= pranay;j++){
//         if((number % j) == 0){
//             return false
//         }
//     }
//     return true;
// }
//  for (let i = 0; i < array.length; i++) {
//      if(is_prime(array[i])){
//          prime.push(array[i])
//      }
     
//  }
//  console.log(prime);

// function isPrime(number)
//  { 
//    if (number <= 1)
//    return false;

//    // The check for the number 2 and 3
//    if (number <= 3)
//    return true;

//    if (number%2 == 0 || number%3 == 0)
//    return false;

//    for (var i=5; i*i<=number; i=i+6)
//    {
//       if (number%i == 0 || number%(i+2) == 0)
//       return false;
//    }

//    return true;
//  }
// console.log(isPrime(293));

// bubble sort
// let array  = [10,33,225,6,20,-29]
// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//         if (array[j] > array[j + 1]) {
//             let tmp = array[j];
//            array[j] =array[j + 1];
//            array[j + 1] = tmp;

//            console.log(array[i]);
//         }
       
//     }
// }

// insertion sort
// let array=[10,33,225,6,20,-29]
// for (let i = 0; i < array.length; i++) {
  
//     for (let j = i + 1; j >= 0; --j) {
//       if (array[j] >= array[i]) {
//         break;
//       }
//       if (array[j] < array[i]) {
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//         i = i - 1;
//       }
//     }

//   }
// console.log(array);

// let n = 12;
//  for(i=1;i<=12;i++){
//      console.log(n + "*" +i + "=" + n*i);
//  }
// let number = 66;

// for(let i = 0;i<= number;i++){
//     if(number == i*i){
//        console.log(number + 'is a perfect square');
//     }
//     else{
        
//     }
   
// }

// let Years_Printed = 0;
// var Current_Year = 2017; 

// function leapYears() {
//     while (Years_Printed < 20) { //instead of "30", you can have a var howManyLeapYears for how many leap years we want printed
//         if ((Current_Year % 4 === 0)) {
//             console.log(Current_Year);
//             Years_Printed++;
//             Current_Year++;
//         } else {
//             Current_Year++;
//         }
//     }       
// }

// leapYears();

// let array = [2,22,33,45,54,2, 232, 45,22,111,33,232,111,54];
// let result = {}
// for(let i = 0; i < array.length; i++){
//     result[array[i]]=i;
//     var pranay = Object.keys(result)
// }
// console.log(pranay);
// function getUnique(array){
//          let uniqueArr = []
//          for(let i of array){
//              if(uniqueArr.indexOf(i) == -1){
//                  uniqueArr.push(i)
//              }
    
//          }
//          console.log(uniqueArr);
//      }
//      getUnique(array);

// let num = 60;
// let isPerfectSquare = num => {
//    let i = 1;
//    while(i * i <= num){
//       if(i * i !== num){
//          i++;
//          continue;
//       };
//       return true;
//    };
//    return false;
// };
// console.log(isPerfectSquare(num));

// let user = "Pranay"

// console.log(user + ' Greets!!');

// let user = "pranay"
// if(user == "Alice" || user == "Bob"){
//     console.log(user + ' Greest !!');
// }
// else{
//     console.log('not an user');
// }

// let user_num = 3
// let sum = 0
// for (let i = 0; i < user_num; i++) {
//     sum +=user_num   
// }
// console.log(sum);

// let num = 100
// let result = []
// for (let i = 2; i < num; i++) {
//     let count = 0
//     // console.log(i);
//     for (let j = 2; j < i; j++) {
//         if(i % j == 0){
//             count++
//             break
//         }

//     }
//     if(count == 0){
//         result.push(i)
//         // console.log(i + 'is prime');
//     }
// }

// console.log(result);

// concat

// let ar1 = ['a','b','c']
// let ar2 = [1,2,3]
// let result = []

// ar1.concat
// function concatArr(ar1 ,ar2) {
// for (let i = 0; i < ar1.length; i++) {
//     result.push(ar1[i])
// }
// for (let i = 0; i < ar2.length; i++) {
//     result.push(ar2[i])
// }
//     ar1.forEach(element => {
//         result.push(element)

//     });
//     ar2.forEach(element => {
//         result.push(element)

//     });
//     console.log(result);

//    }
//        let conarr = ar1.concat(ar2)
//     console.log(conarr);


// // concatArr(ar1,ar2)
// array1 = [1,3,5];
// array2 = ["pranay","pramod","nivalkar"];
// result = []

// function alterCon(array1,array2) {
//     for (let i = 0; i < array1.length; i++) {
//         result.push(array1[i])
//         for (let j = 0; j < array2.length; j++) {
//             if (j == i) {
//                 result.push(array2[i])
//             }  
//         }

//     }
//     console.log(result);
// }

// alterCon(array1,array2)
// array = [44,1,8,100,221,-4]


// function mergesort(array){
//   let half = array.length / 2 ;
//   if(array.length < 2){
//       return array
//   }
//   let right = array.splice(0,half)
//   return (mergesort(right),mergesort(array))
  
// }
// console.log(mergesort(array));

//  let array =
//  [1,2,[3,4,[5,6,7,[8,9,10,11,[12,13,14,[15,16,[17,18]]]]]]]
 

//  for (let i = 0; i < array.length; i++) {
//    for (let j = 0; j < array.length; j++) {
//     console.log(array[j]);
     
//    }
   
   
     
//    }

// function sum(k,n)
// {
//     let sum = 0;
//     for (let i = 0; i <= n; i++) {
//         let p = 1;

//         for (let j = 0; j < n - i; j++) {
//             p = p * k;
//         }

//         for (let j = 0; j < i; j++) {
//             p = p * (k - 1);
//         }

//         sum = sum + p;
//     }
//     return sum;
// }
 

// let n = 3;
// let K = 3;
// console.log(sum(K, n));
   
//  let num = 10;
//  let n1 = 0;
//  let n2 = 1
// let sum = 0

// for (let i = 0; i < num; i++) {
  
//   console.log(sum);
//   sum = n1 + n2
//   n1 = n2
//   n2 = sum

// }
// let a = 0
// let b = 1;
//  let c;
//  while(a<10){
//    console.log(a + '');
//    c = a + b;
//    a=b
//    b=c
//  }

// let people = [
//   { name : "pranay", age :26},
//   { name : "atharv" , age : 24},
//   { name : "akash" , age : 27}
// ]
//  let result = people.reduce((gropedPeople, person) => {
//    let age = person.age
//    if(gropedPeople[age] == null) gropedPeople[age] = []
//    gropedPeople[age].push(person)
//    return gropedPeople

//  }, {})
//  console.log(result);

// let numbers = [13,2,5]

// let sum = numbers.reduce((total,number,index, array) =>{
//   console.log(array);
//   return total + number
// }, 0)
// console.log(sum);

// let orders = [
//   {amount : 400},
//   {amount : 800},
//   {amount : 200},
//   {amount : 100}
// ]
// var totalAmount = 0
// for(let i = 0;i<orders.length;i++){
//   totalAmount += orders[i].amount
// }
// console.log(totalAmount);

// let names = [11,15,14,15,20,22,25,20,80,90,80]

// let pranay = names.reduce((previous,current)=>{
//     if(current in previous){
//         previous[current]++
//     }
//     else{
//         previous[current]=1
//     }
//     return previous
// },{})
// console.log(pranay);

let object = [{
    name: "kiran",
    age: 25,
    city: "mumbai",
  balance: 300,
    interestOf: ["sports", "tv"],
    gender: "male",
    dressColor: "magenta",
    laptop: "dell"
}, {
    name: "akshay",
    age: 26,
    city: "pune",
  balance: 300,
    interestOf: ["sports", "swmming"],
    gender: "male",
    dressColor: "skyblue",
    laptop: "lenova"
}, {
    name: "abhi",
    age: 25,
    city: "mumbai",
  balance: 300,
    interestOf: ["sports", "tv"],
    gender: "male",
    dressColor: "yellow",
    laptop: "dell"
}, {
    name: "aditi",
    age: 25,
    city: "mumbai",
  balance: 300,
    interestOf: ["music", "tv"],
    gender: "female",
    dressColor: "blue",
    laptop: "dell"
}, {
    name: "amruta",
    age: 22,
    city: "mumbai",
  balance: 700,
    interestOf: ["sports", "tv"],
    gender: "female",
    dressColor: "red",
    laptop: "dell"
},
{
    name: "vaishnavi",
    age: 28,
    city: "thane",
  balance: 500,
    interestOf: ["sports", "tv"],
    gender: "female",
    dressColor: "black",
    laptop: "dell"
},
{
    name: "kiran",
    age: 25,
    city: "mumbai",
  balance: 300,
    interestOf: ["sports", "tv"],
    gender: "male",
    dressColor: "white",
    laptop: "dell"
},
{
    name: "kiran",
    age: 25,
    city: "mumbai",
  balance: 300,
    interestOf: ["sports", "tv"],
    gender: "male",
    dressColor: "green",
    laptop: "dell"
},
{
    name: "kiran",
    age: 25,
    city: "mumbai",
  balance: 500,
    interestOf: ["sports", "tv"],
    gender: "male",
    dressColor: "blue",
    laptop: "dell"
},
{
    name: "shoheb",
    age: 25,
    city: "mumbai",
  balance: 400,
    interestOf: ["sports", "tv"],
    gender: "male",
    dressColor: "red",
    laptop: "dell"
}]
// let pranay = object.filter(element => element.city == "pune").map(element => element.interestOf).sort()
// console.log(pranay);

// let array = object.map(element => {
//     return `${element.name} ${element.age}`
// })
// console.log(array);

// let rasika = object.reduce((element, a) => element + a.balance, 0)
// console.log(rasika);

// let pracks = object.reduce((element, a) => element = element > a.balance ? element : a.balance, 0).max();
// console.log(pracks);

// let temp = object.reduce((element,a) => element = element > a.name ? element : a.balance,0);
// console.log(temp);

let res = object.filter(element=> element.gender == "male").map(element => element.name).sort()
console.log(res);


