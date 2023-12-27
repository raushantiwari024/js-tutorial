let name = "Raushan  Tiwari";
let home_place = "Manjharia";

number = 4234234; //   In js we can declare a variable without any type and its type will be dynamiclly typed

console.table([name, home_place, number, typeof number]);

console.log(typeof null);   // Object
console.log(typeof undefined);  //undefined

let str='12ff'; //  it is a n number with alphabet

let num=Number(str);    // convrting string to number, here number has a string part but iw will not occur erro

console.log(num);   //  NaN means not a number 
console.log(typeof num);    //number

console.log(null>0);
console.log(null==0);
console.log(null>=0);
console.log();
console.log(undefined==0);
console.log(undefined>0);
console.log(undefined>=0);

// Primirive data type are 7

// 7 types :: String Number Boolean null undefined Symbol BigInt

let s1=Symbol('abc');   //it is of symbol type data
let bi=2342342342352n;  //number followed by n is called bigint number
console.log(typeof bi); //bigint

//  Reference (Non-Primitive)

//  types  :  Object function Array

let arr=[23,4,34,54,4554,45];
console.log(typeof arr);    //Object
let myObj={
    'name':'Raushan',
    'Number':9608411621n
};

let fun1=()=>{
    console.log('Hwllo World!!!');
}