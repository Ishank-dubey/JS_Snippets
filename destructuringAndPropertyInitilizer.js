let node = {
type: "Identifier",
name: "foo"
}, 
name1= 'tue', 
type1="3",
node2 = {type:'1',name:'2',value:'3'},
node3 = {type1, 
		name1}; //Shorthand initilization, the name1 and type1 must be present in the scope

let { type, name, value = true } = node; //Destucturing with default values

({ type, name, value = true } = node2);  //Destructuring assignment
const aVar = 4;
console.log(type); 
console.log(name); 
console.log(value); 

/*
 * A way to swap 2 variables values using ES6 vdestructuring 
 */

let a = 10, b = 11;

[a,b] = [b,a];


/*
 * Destructuring an Array
 */

let node = {
		type: "Identifier",
		name: "foo",
		loc: {
		start: {
		line: 1,
		column: 1
		},
		end: {
		line: 1,
		column: 4
		}
		},
		range: [0, 3]
		};
		let {
		loc: { start },
		range: [ startIndex ]
		} = node;
		console.log(start.line); // 1
		console.log(start.column); // 1
		console.log(startIndex); // 0
		
/*
 * Destructured parameters
 * */		
		
		function setDemo(name='test', value='value',
				{
				secure = false,
				path = "/",
				domain = "example.com",
				expires = new Date(Date.now() + 360000000)
				} = {}
				) {
				// All the arguments are having default  values
				}
		
		
		
		