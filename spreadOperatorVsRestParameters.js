/*
 * Rest Arguments - the arguments are combined as an Array 
 * 
 */


aDemoRestArguments(1,2,3,4,54);

function aDemoRestArguments(arg1, ...rest){
	console.log(typeof arg1 +" "+arg1);
	console.log(typeof rest +" "+(rest.length));
    console.log(typeof arguments +" "+arguments.length);
} 

//NOTE: Can't have a named parameter after rest parameters


/*
 * Spread Parameters - the array must be split as seperate arguments
 */

let values = [-25, -50, -75, -100]
console.log(Math.max(...values)); // equivalent to console.log(Math.max(-25, -50, -75, -100));
