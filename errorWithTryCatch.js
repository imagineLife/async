/*
	Part 3
	error handling
	using a try/catch block
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

	return resBody;

}


async function showGHUser(userName){
	try{
		const ghUser = await getGHUser(userName);

		//if successful
		console.log('ghUser');
		console.log(ghUser)
	}catch(err){
		//if NOT successful, throws error automatically
		console.log(err)
	}
}

showGHUser('imagineLife')