/*
	Part 5
	using promise.all to away many promises
*/

const fetch = require("node-fetch");

async function getGHUser(ghEndpoint){
	const url = `https://api.github.com${ghEndpoint}`
	const userResponse = await fetch(url)
	return await userResponse.json();

}


async function showUserAndProfile(userName){
	
}

showUserAndProfile('imagineLife')