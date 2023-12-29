'use strict';

const user = {
	name: 'Raushan',
	password: 'password',
	home: 'Manjharia',
	number: '9608411621',
	showDetails: function () {
		console.log(this.name);
		console.log(this.password);
		console.log(this.home);
		console.log(this.number);
		console.log(this);
	},
};

// user.showDetails();
// console.log(user.name);

function userData(name, id, isLoggedIn) {
	this.name = name;
	this.id = id;
	this.isLoggedIn = isLoggedIn;
	console.log(this);
	return this;
}

// const callOne = userData('Raushan', 'raushantiwari024', true);
// const callTwo = userData('Ujjawal', 'ujjawaltiwari', false);//   override callOne data
//
// console.log(callOne);

const callOne=new userData('Raushan', 'raushantiwari024', true);    //new keyword create new instance
const callTwo=new userData('Ujjawal', 'ujjawaltiwari', false);

