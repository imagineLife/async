/*
	Part 5
	using promise.all to away many promises
*/

const fetch = require("node-fetch");

async function getGHData(ghEndpoint){
	const url = `https://api.github.com${ghEndpoint}`
	const userResponse = await fetch(url)
	return await userResponse.json();

}


async function showUserAndProfile(userName){
	
	//promise.all aggregates many promises,
	//and returns a single promise
	//if both promises work, a single promise is returned
	//if one or both promise fails,
	//a failed promise is returned

	//STORING the promise.all result in a var
	const [user, repos] = await Promise.all([

		//takes an array of promises
		getGHData(`/users/${userName}`),
		getGHData(`/users/${userName}/repos`)
	])

	// console.log('user.name')
	// console.log(user.name)
	// console.log('repos')
	// console.log(repos.length)
}

showUserAndProfile('imagineLife')