const fetch = require("node-fetch");

const getGHUser = (userName) => {
	const url = `https://api.github.com/users/${userName}`
	fetch(url).then(res => res.json())
		.then(resData => {
			console.log('resData')
			console.log(resData)
			
		})
}

getGHUser('imagineLife')