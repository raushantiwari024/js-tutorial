function fun() {
	console.log("Hello");
	console.log(this);
}

const localFun = function () {
	console.log(`Local function`);
	console.log(this);
};

const arrowFun = () => {
	console.log(`Arrow function`);
	console.log(this);
};

// fun();
// localFun();
// arrowFun();

//+++++++++++  Immediately invoked Function expression

(function fun() {
	console.log(`Hello World`);
})();

console.log('abdaf');


