//  Stack(Primitive) and Heap(Non-Primitive) memory used in js

let name1 = "Raushan Tiwari";
let name2 = name1; // Here a copy of name1 assigned to name2 means, changing value of one doesn't effect value of another variable

/*

*/

let user={
    name:'Raushan',
    email:'raushan@gmail.com'
}

let usertwo=user;   //  Here reference of user assigned to usertwo and changing value of ane object reflect on another variable
// console.log(user.name);
// console.log(usertwo.name);  // both will be same

usertwo.name='abcd@gmail.com';  //  it will change value of both reference variable

// console.log(user.name);
// console.log(usertwo.name);

let hundreds=1000000;
console.log(hundreds);
console.log(hundreds.toLocaleString('en-IN'));

