'use strict';

const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

button.forEach((val) => {
	val.addEventListener('click', (e) => {
		if (e.target.id === 'gray') {
			body.style.backgroundColor = e.target.id;
		} else if (e.target.id === 'white') {
			body.style.backgroundColor = e.target.id;
		} else if (e.target.id === 'green') {
			body.style.backgroundColor = e.target.id;
		} else {
			body.style.backgroundColor = e.target.id;
		}
	});
});
