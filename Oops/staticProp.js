

class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        return `Usernmae :  ${this.username}`;
    }

    static createID() {
        return '123';
    }
}

const user=new User('Raushan');

// console.log(user.createID());    // Access static member using instance occurs error
// console.log(User.createID());   //  static member is only accessed by class name

class Teacher extends User {
    constructor(username, password) {
        super(username);
        this.password = password;
    }

}

const teacher=new Teacher('Raushan','password');

console.log(teacher.createID());//Occure error, reference line no. 20

