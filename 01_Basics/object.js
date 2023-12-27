/*
Object :- Objects in js are key and value pair object
to create a object curly braces ({}) is used
*/

//  Object literals

const mysym = Symbol("abcd");

const first_obj = {
	name: "Raushan",
	number: "9608411621",
	homo_place: "Manjharia",
	state: "Bihar",
	[mysym]: "symbol",
};

//  To access object element

// console.log(first_obj.name);

//  And squire notation is used

// console.log(first_obj['name']);
// console.log(first_obj[mysym]);
// console.log(first_obj);

// Object.freeze(first_obj);   //  it will freeze object and any change made on on object not reflected

// first_obj["name"] = "ujjawal";

// console.log(first_obj);

//  singleton object

const obj = Object(); // singleton object

const emp = {
	fullname: {
		first_name: "raushan",
		last_name: "Tiwari",
		toString() {
			return this.first_name + " " + this.last_name;
		},
	},
	address: "Manjharia",
};

// console.log(emp.fullname.toString());

const obj1={a:'1',b:'2'};
const obj2={c:'3',d:'4'};

//  concatination two Onject

let obj3=Object.assign({},obj1,obj2);
//  Or using spread object
// obj3={...obj1, ...obj2};
// console.log(obj3);

// console.log(Object.keys(obj3)); //[ 'a', 'b', 'c', 'd' ]
// console.log(Object.values(obj3));// [ '1', '2', '3', '4' ]
// console.log(Object.entries(obj3));// [ [ 'a', '1' ], [ 'b', '2' ], [ 'c', '3' ], [ 'd', '4' ] ]

// console.log(obj3.hasOwnProperty('c'));  //  true
// console.log(obj3.hasOwnProperty('e'));  //  false



