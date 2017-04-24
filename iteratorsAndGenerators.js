/*Idea behind Iterator is the next element to be available w/o the need to maintain 
 * an index
 * */
function sampleIterator(obj){
	let index =0 , done = true, value, length = obj.length;
	return {
		next:function(){
			done = (index >= length);
			value = !done ?obj[index++]: undefined;
			return {
				done:done,
				value:value
			};
		}
	}
}


var iterator1 = sampleIterator([1, 2, 3]);
console.log(iterator1.next()); // "{ value: 1, done: false }"
console.log(iterator1.next()); // "{ value: 2, done: false }"
console.log(iterator1.next()); // "{ value: 3, done: false }"
console.log(iterator1.next()); // "{ value: undefined, done: true }"



/*Generator - to o/p an iterator*/
function *createIterator(items) {
	for (let i = 0; i < items.length; i++) {
	yield items[i];
	}
	}
	let iterator2 = createIterator([1, 2, 3]);
	console.log(iterator2.next()); // "{ value: 1, done: false }"
	console.log(iterator2.next()); // "{ value: 2, done: false }"
	console.log(iterator2.next()); // "{ value: 3, done: false }"
	console.log(iterator2.next()); // "{ value: undefined, done: true }"
	// for all further calls
	console.log(iterator2.next()); // "{ value: undefined, done: true }"
	//Creating an arrow function that is also a generator is not possible
	
	
	
/*Using for-of loop*/	
	let values = [1, 2, 3];
	for (let num of values) {
	console.log(num);
	}	


/*To check if an object is iterable*/
	function isIterable(object) {
		return typeof object[Symbol.iterator] === "function";
	}
	

/*To create Iterables*/	
// developer defined objects are not iterable can do - 
	
	let collection = {
			items: 'name',
			 * itr() {
			for (let item of this.items) {
			yield item;
			}
			},
			*[Symbol.iterator](){
			 for (let item of this.items) {
			yield item;
			}
			}
			};



			var itr = collection.itr();
			console.log(itr.next());//Object {value: "n", done: false}


			for(let i of collection){
				console.log(i);     //n //a  //m  //e
				}

			
/*Built-in Iterators for Array, Set, Map*/			



			let colors = [ "red", "green", "blue" ];
			let tracking = new Set([1234, 5678, 9012, 1234]);
			let data = new Map();
			data.set("title", "ES 6");
			data.set("format", "ebook");
			data.set("1", "ebook1");
			data.set(1, "ebook123");


			for (let entry/*[key, value]*/ of data.entries()) { // Destructuring can be done [key, value] 
				console.log(value);
				}
			
			
			// arr.values() is not supported in Chrome, IE but FF Gecko
			//https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/values
			for (let value of colors.values()) {
				console.log(value);
				}
             
			
			for (let value of tracking.values()) {
			console.log(value);
			}

			for (let value of data.values()) {
			console.log(value);
			}
	
	
/*for-of to have Unicode chars*/	
			var message = "A𠮷B";
			for (let c of message) {
			console.log(c=='𠮷');
			}


			for(let i=0,len=message.length;i<len;i++){
			console.log(message[i]=='𠮷');
			} // Will treat the Unicode as two units

			
/*Using Spread operator to get another iterable*/
			
let bigNo = [100,101], smallNo = [2,3,4,5], allN0 = [0,...smallNo,...bigNo];			
for(let val of allN0.entries()){
	console.log(val);
	}



/*Iterators with input arguments in next()*/
function *createIterator() {
	let first = yield 1;
	let second = yield first + 2; // 4 + 2
	yield second + 3; // 5 + 3
	}
	let iterator = createIterator();
	console.log(iterator.next()); // "{ value: 1, done: false }"
	console.log(iterator.next(4)); // "{ value: 6, done: false }"
	console.log(iterator.next(5)); // "{ value: 8, done: false }"
	console.log(iterator.next());
	// first .next()'s argument will be ignored if supplied for a reason
	// next() and throw() are both help to iterate

	
	
/*Generators with return*/
	function *createIterator() {
		yield 1;
		return 42;
		}
		let iterator = createIterator();
		console.log(iterator.next()); // "{ value: 1, done: false }"
		console.log(iterator.next()); // "{ value: 42, done: true }"
		console.log(iterator.next()); // "{ value: undefined, done: true }"	
	

		
/*Generator Delegation*/
		function *createNumberIterator() {
			yield 1;
			yield 2;
			return 3;
			}
		function *createRepeatingIterator(count) {
			for (let i=0; i < count; i++) {
			yield "repeat";
			}
			}	
		function *createCombinedIterator() {
			let result = yield *createNumberIterator();
			yield result;
			yield *createRepeatingIterator(result);
			}
			var iterator = createCombinedIterator();
console.log(iterator.next()); // "{ value: 1, done: false }"
console.log(iterator.next()); // "{ value: 2, done: false }"
console.log(iterator.next()); // "{ value: "repeat", done: false }"
console.log(iterator.next()); // "{ value: "repeat", done: false }"
console.log(iterator.next()); // "{ value: "repeat", done: false }"
console.log(iterator.next()); // "{ value: undefined, done: true }"



/*Generator of Iterator*/
function *createNumberIterator() {
	yield *[10,30];
	yield 2;
	return 3;
	}


var anIter = createNumberIterator();
console.log( anIter.next());//{value: 10, done: false}
console.log( anIter.next());//{value: 30, done: false}
console.log( anIter.next());//{value: 2, done: false}
console.log( anIter.next());//{value: 3, done: true}			
			
		
		
			
			
			
			
			
			