/*
	Part 4
*/

const fetch = require("node-fetch");

async function getGHUser(ghEndpoint){
	const url = `https://api.github.com${ghEndpoint}`
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


async function showUserAndProfile(userName){
	const userEndpoint = (usr) => `/users/${usr}`
	const reposEndpoint = (usr) => `/users/${usr}/repos`

	//Option 1, make 2 requests
	// const ghUser = await getGHUser(userEndpoint(userName))
	// const ghUserRepos = await getGHUser(reposEndpoint(userName))	

	// console.log('ghUser')
	// console.log(ghUser)
	// console.log('ghUserRepos.length')
	// console.log(ghUserRepos.length)

	// /*
	// 	A PROBLEM - 
	// 		these are in series, not in parallel
	// 		the 2nd request ONLY RUNS after 1st is complete
	// 		can cause performance problems
	// */

	//Option 2, 
	const ghUserPromise = getGHUser(userEndpoint(userName))
	const ghUserReposPromise = getGHUser(reposEndpoint(userName))	

	const ghUser = await ghUserPromise;
	const ghUserRepos = await ghUserReposPromise;
	
	console.log('ghUser')
	console.log(ghUser)
	console.log('ghUserRepos.length')
	console.log(ghUserRepos.length)

	/*
		A PROBLEM - 
			these are in series, not in parallel
			the 2nd request ONLY RUNS after 1st is complete
			can cause performance problems
	*/
	
}

showUserAndProfile('imagineLife')