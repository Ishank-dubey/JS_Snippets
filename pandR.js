/*Proxy and Trap*/
//set trap
let target = {};
let proxy = new Proxy(target, {
set(trapTarget, key, value, receiver ){
    if(!trapTarget.hasOwnProperty(key)){
       if(isNaN(value)){
       throw new TypeError("NaN");
       }
    }
    return Reflect.set(trapTarget, key, value, receiver);
}

});
proxy.name = 1;

console.log(proxy.name); // 1
console.log(target.name); // 1

//get trap
let target = {
/*name:"iamn"*/
};
let proxy = new Proxy(target, {
get(trapTarget, key,  receiver ){
    if(!trapTarget.hasOwnProperty(key)){
       
       throw new TypeError("Not there");
       
    }
    return Reflect.get(trapTarget, key, receiver);
}

});
console.log(proxy.name);// TypeError


/*Trap for `property in object`*/
let target = {
		name:"mowgli",
		friend:"rama"
};
let proxy = new Proxy(target, {
	has(trapTarget, key) {
	if (key === "friend") {
	return false;
	} else {
	return Reflect.has(trapTarget, key);
	}
	}
	});
	console.log("friend" in proxy); // false
	console.log("name" in proxy); // true

	
/*Trap on `delete`*/	
	'use strict'//comment to remove the crash
	let target = {
			name: "arnold",
			value: 42
			};
			Object.defineProperty(target, "name", { configurable: false });
			console.log("value" in target); // true
			let result1 = delete target.value;
			console.log(result1); // true
			console.log("value" in target); // false
			// note: the following line throws an error in strict mode
			let result2 = delete target.name;
			console.log(result2); // false
			console.log("name" in target); // true

			
			let target = {
					name: "target",
					value: 42
					};
					let proxy = new Proxy(target, {
					deleteProperty(trapTarget, key) {
					if (key === "value") {
					return false;
					} else {
					return Reflect.deleteProperty(trapTarget, key);
					}
					}
					});
					// attempt to delete proxy.value
					console.log("value" in proxy); // true
					let result1 = delete proxy.value;
					console.log(result1); // false
					console.log("value" in proxy); // true
					// attempt to delete proxy.name
					console.log("name" in proxy); // true
					let result2 = delete proxy.name;
					console.log(result2); // true
					console.log("name" in proxy); // false			
			
			

