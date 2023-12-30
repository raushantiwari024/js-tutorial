class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Logged in user ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course is added by ${this.username}`);

    }
}


const chai = new Teacher('Raushan','abc@example.com','password');

chai.addCourse();