// Property based getter and setter

function User(username, password) {
	this._username = username;
	this._password = password;

	Object.defineProperty(this, 'username', {
		get: function () {return this._username},
		set: function (value) {
			this._username = value;
		},
	});

    Object.defineProperty(this, 'password', {
		get: function () {return this._password},
		set: function (value) {
			this._password = value;
		},
	});
}


const chai = new User('raushan','adff');
console.log(chai.password);
