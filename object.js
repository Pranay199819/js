// copy object 
// let person = {
//     firstName: 'Pranay',
//     lastName: 'Nivalkar'
// };
//  spread operator allows us to copy all elements from the existing array or object into another array or object.
// let p1 = {
//     ...person
// }
// console.log(p1);

// let p2 = Object.assign({},person)
// console.log(p2);
// copy array using spread operator

// let arr1 = ['one', 'two'];
// let arr2 = [...arr1, 'three', 'four', 'five'];

// console.log(arr2); 
// const obj1 = { x : 1, y : 2 };
// const obj2 = { z : 3 };


// const obj3 = {...obj1, ...obj2};

// console.log(obj3);
// copy data using object.assign
// let pranay = {
//     height : '150cm',
//     weight : '50kg'
// }
// let abc = Object.assign({waist : '28'},pranay)
// console.log(abc);


// let abc = { name : 'atharv'}
// let xyz = {...abc}
// Object.assign({},abc)
// xyz.name = 'manas';
// console.log(abc);
// console.log(xyz);

// it will fail when nested object is there 

let developer = {
    name : 'pranay',
    skils : {
        primary : 'full stack',
        secondary: 'C'
    }
}
// let developer2 = {...developer}
let developer2 = JSON.parse(JSON.stringify(developer));
developer2.name = 'atharva';
developer2.skils.primary = 'front end';
console.log(developer);
console.log(developer2);