function helloWorld() {
	console.log(`Hello World!!!`);
    let abc;
}

helloWorld.power=2;

helloWorld();
console.log(helloWorld.power);
console.log(helloWorld.prototype);

function createUser(usernmae,score) {
    this.usernmae = usernmae;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printScore = function(){
    console.log(`score is ${this.score}`);
}

// const user1=createUser('raushan',20);
// const user2 = createUser('ujjawal',30);
// createUser.printScore(); //  this occur error


const user1 = new createUser('raushan',20); // use new keyword is safe
const user2 = new createUser('ujjawal',30);
user2.printScore();
