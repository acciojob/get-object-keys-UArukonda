//your JS code here. If required.
const student = {
	name = "John"
}

function getKeys(obj){
	let keys = []
	for(let key in obj){
		keys.push(key)
	}
	return keys
}

console.log(getKeys(student))
