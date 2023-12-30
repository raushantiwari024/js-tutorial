
// class User {
//     constructor(username,email,password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword() {
//         return `${this.password}abc`;
//     }

//     changeUsername() {
//         return `${this.username.toUpperCase()}`;
//     }
// }

// const chai = new User('Raushan','abc@example.com','password');

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// Behind the scene

function User(username,email,password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function() {
    return `${this.password}abc`;
}

User.prototype.changeUsername = function() {
    return `${this.usernmae.toUpperCase()}`;
}


const tea = new User('Raushan','abc@example.com','password');

console.log(tea.encryptPassword());