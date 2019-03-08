const fetch = require("node-fetch");

//'VANILLA' FETCH START
// const getGHUser = (userName) => {
// 	const url = `https://api.github.com/users/${userName}`
// 	fetch(url).then(res => res.json())
// 		.then(resData => {
// 			console.log('resData')
// 			console.log(resData)
// 		})
// }


//1. async
async function getGHUser(userName){
	const url = `https://api.github.com/users/${userName}`
	
/*
	2. Await
		wait till fetch completes
		takes a promise
		pauses fn execution till promise is settled
		IF rejected, throws rejected val
		IF resolved, returns resolve
		can assign to var, myRes

		plus await keyword
*/
	const myRes = await fetch(url)
	const userData = await myRes.json()

	console.log('userData')
	console.log(userData)
}

getGHUser('imagineLife')