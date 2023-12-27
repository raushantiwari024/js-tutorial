// Array

let arr = [12, 32, 24, 54, 6, 56];

// console.log(arr);
// console.log(arr[2]);    // to display a specific element from arry

//  Array Methods

arr.push(11); //  To insert value into array
arr.pop(); //  To remove last element
arr.unshift(2); //  Insert value at first index and shift all element
// console.log(arr.shift());    //  Remove first element and shift all element
// console.log(arr);

arr.includes(5); //  To check a value is available is array or not

const newArr = arr.join(); //  To convert a array to string and it will support string functions, not array functions

// console.log(newArr);    //  12,32,24,54,6,56

//  slice   and     splice

// arr = [1, 2, 3, 4, 5];

// console.log("A : ", arr); //A :  [ 1, 2, 3, 4, 5 ]    //  This is original array

// const myArr1 = arr.slice(1, 3); //  This function return array of a given portion and doesn't change array
// console.log(myArr1); //  [ 2, 3 ]    //  Array of given range(1,3)
// console.log("B ; ", arr); //  B ;  [ 1, 2, 3, 4, 5 ]  //  Here we can see, array is not changed

// const myArr2 = arr.splice(1, 3); //  This function return array of a given range and remove that range from original array
// console.log("C : ", arr); //  C :  [ 1, 5 ] //  After splice(1,3) Original array is changed
// console.log(myArr2); //  [ 2, 3, 4 ]    //  elements that is removed from array


let arr1=[0,1,2,3,4,5];
let arr2=[10,11,12,13,14,15];
let arr3;
//let arr3=arr1.concat(arr2);     //  concat is used to concatination of two array and return, it doesn't modify original array

// console.log(arr3);  //   [ 0,  1,  2,  3,  4, 5, 10, 11, 12, 13, 14, 15 ]

//  Another way is to use SPREAD for concat two array

arr3=[...arr1,...arr2]; 
// console.log(arr3);  //   [ 0,  1,  2,  3,  4, 5, 10, 11, 12, 13, 14, 15 ]

let another_array=[12,32,[34,54,[65,87],[35,65,[87,90],4]],32,45];  // A recursive array
// console.log(another_array);

// //  To convert a recursive array to a normal array a flat() function is used;

// let new_another_array=another_array.flat(Infinity);
// console.log(new_another_array);


// console.log(Array.isArray('Raushan'));
// console.log(Array.from('Raushan'));     //  To convert into array from string

// console.log(Array.from({name:'Raushan'}));  //  Null

let score1=100;
let score2=200;
let score3=300;

// console.log(Array.of(score1,score2,score3));    //  of function is used ro convert multiple values into array



// const map=new Map();

// map.set('IN','India');
// map.set('USA','United State Of America');
// map.set('Fr','France')

// console.log(map);

// for(const [key,value] of map){
//     console.log(`${key} :- ${value}`);
// }


arr=[1,2,3,4,5,6,7,8,9];

// const list=arr.filter((item)=>item>4)
let list=[];
arr.forEach(element => {
    if(element>4){
        list.push(element);
    }
});

console.log(list);

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10
