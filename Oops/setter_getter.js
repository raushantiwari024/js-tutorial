
class User {
    constructor(username,password) {
        this.username = username;
        this.password = password;
        console.log('constructor');
    }

    get username() {
        return this._username;
    }

    set username(username) {
        this._username = username;
    }

    get password() {
        console.log('pass getter');
        return this._password;
    }

    set password(password) {
        this._password = password;
        console.log('pass setter');
    }

    hello() {
        console.log('Hello World');
    }
}

const user1 = new User('Raushan','password');

// user1.hello();
console.log(user1.username);