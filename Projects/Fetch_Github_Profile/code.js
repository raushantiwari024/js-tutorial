const img = document.querySelector('#image');
		const name = document.getElementById('name');
		const followers = document.querySelector('.followers');
		const bio = document.querySelector('.bio');
		const blog = document.querySelector('.blog');
		const repo = document.querySelector('.repo');
		const inputField = document.getElementById('inputField');
		const button = document.getElementById('button');
        fetchUserProfile();
		button.addEventListener('click', fetchUserProfile)
        
        function fetchUserProfile(e){
			const xhr = new XMLHttpRequest();
			const target_URL = `https://api.github.com/users/${inputField.value}`;
			//alert(target_URL);
			//     https://api.github.com/users/hiteshchoudhary
			xhr.open('GET', target_URL);
			xhr.send();

			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4) {
					const profile = JSON.parse(this.responseText);
					console.log(profile);
					console.log(img);
					console.log(name);
					img.src = profile.avatar_url;
					name.innerHTML = `${profile.name}`;

					bio.innerHTML = profile.bio;
					followers.innerHTML = profile.followers;
					repo.innerHTML = profile.public_repos;
					blog.innerHTML = profile.blog;
					console.log();
				}
			};
		};