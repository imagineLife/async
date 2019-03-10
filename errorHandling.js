/*
	Part 2
	error handling
	wshat if user doesn't exist?!
*/

const fetch = require("node-fetch");

async function getGHUser(userName){
	const url = `https://api.github.com/users/${userName}`
	const myRes = await fetch(url)
	
	//WAS return await myRes.json
	//1. store res in var
	const resBody = await myRes.json()

	//2 make IF around myRes 
	if(myRes.status !== 200){
		//Throw error, passes to promis optional catch block
		throw Error(resBody.message)
	}


}

getGHUser('imagineLifeasdf').then(res => {
		console.log('res')
		console.log(res)
	
	//3. Add catch AFTER .then
	}).catch(err => {
		console.log(`getUser Error: ${err}`);
	})