const User = {
    _username : 'Raushan',
    _password : 'Password',

    get username(){
        return this._username;
    },

    set username(value) {
        this._username = value;
    },

    get password(){
        return this._password;
    },

    set password(value) {
        this._password = value;
    }
}

const tea = Object.create(User);

console.log(tea.password)