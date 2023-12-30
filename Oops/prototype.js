// const name = `Raushan   `;

// console.log(name.trueLength());


let heros = [`thor`,`ironman`];

let heroPower = {
    thor:`hammer`,
    ironman:`sling`,
    getThorPower:function() {
        console.log(this.thor);
    }
}

Object.prototype.fun = function(){
    console.log(`present in all object`);
}// function injected to object prototype

heros.fun()

Array.prototype.Welcome=function(){
    console.log(`Welcome to js`);
}// Function inserted to Array prototype

heros.Welcome();
// heroPower.Welcome()

//  Inheritance

const User = {
    name:'Raushan'
}


const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User;

//  modern syntex

Object.setPrototypeOf(TeachingSupport,Teacher);





let anotherName = 'chai Aur Code';

String.prototype.trueLength = function() {
    console.log(`Length of string is ${this.trim().length}`);
}

anotherName.trueLength();
// 'Hello'.trueLength();