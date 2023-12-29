const promiseOne = new Promise((resolve, reject) => {
	// DO an async task

	setTimeout(() => {
		console.log('Async task completed');
		resolve();
	}, 1000);
});

promiseOne.then(() => {
	console.log('Promise consumed');
});

new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log('Async task 2');
		resolve();
	}, 1000);
}).then(() => {
	console.log(`Async 2 resolved`);
});

const promiseThree = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve({ username: 'Raushan', email: 'abc@gmail.com' });
	}, 1000);
});

promiseThree.then((user) => {
	console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
	setTimeout(() => {
		const error = false;
		if (!error) {
			resolve({ username: 'sdsdf', password: 'sdfsdfsdf' });
		} else {
			reject('Something went wrong');
		}
	}, 1000);
});

promiseFour
	.then((user) => {
		console.log(user);
		return user.username;
	})
	.then((username) => {
		console.log(username);
	})
	.catch((error) => {
		console.log(error);
	})
	.finally(() => console.log(`The promise is resolve or rejected`));

const promiseFive = new Promise((resolve, reject) => {
	setTimeout(() => {
		const flag = false;
		if (!flag) {
			resolve('Success Five');
		} else {
			reject(`Oops, Something went wrong`);
		}
	}, 1000);
});
consumePromiseFive();

async function consumePromiseFive() {
	try {
		const response = await promiseFive;
		console.log(response);
	} catch (error) {
		console.log('E: ', error);
	}
}

fetch('https://api.github.com/users/raushantiwari024').then((response)=>{
    return response.json();
}).catch((errer)=>{
    console.log(error);
})
.then((response)=>{
    console.log(response);
}).catch((errer)=>{
    console.log(errer);
})

fetchData();

async function fetchData() {
	try {
		const response = await fetch(
			'https://api.github.com/users/raushantiwari024'
		);
		const data = await response.json();

		console.log(data.name);
	} catch (error) {
		console.log('E : ', error);
	}
}
