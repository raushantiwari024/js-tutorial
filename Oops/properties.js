// const mathProps = Object.getOwnPropertyDescriptor(Math,'PI');

// console.log(mathProps);
// Math.PI = 3;
// console.log(mathProps);

// const employee = {
// 	id: 1,
// 	name: 'Raushan',
// 	email: 'abc@example.com',
// 	designation: 'Senior Developer',
// };

// console.log(employee);
// console.log(Object.getOwnPropertyDescriptor(employee, 'id')); //{ value: 1, writable: true, enumerable: true, configurable: true }

// Object.defineProperty(employee, 'id', {
// 	writable: false, //value can not be change
//     enumerable:false
// });
// console.log(Object.getOwnPropertyDescriptor(employee, 'id')); //{ value: 1, writable: false, enumerable: true, configurable: true }
// employee.id = 2;
// console.log(employee.id);

// for (let [key,value] of Object.entries(employee)) {
//     console.log(`${key} : ${value}`);    
// }

const name = 'Raushan';

