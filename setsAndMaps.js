/**
 * http://usejsdoc.org/
 */

/*Problems with the {} literal*/
let obj = {};

obj.count = 1;
obj[5] = 'value';
if(obj.count){
	console.log('property present');
}

console.log(obj['5']); // Same as console.log(obj[5]); - Coercing happens

let aNewKey1 = {}, aNewKey2 = {};

obj[aNewKey1] = 'test2';
obj[aNewKey2] = 'test3';

console.log(obj);


/*
 * new Set()
 */
let aSet = new Set([1,'1']);
console.log(aSet.size);//2
aSet.delete(1);
console.log(aSet.size);//1
aSet.delete("1");
console.log(aSet.size);//0

/*Eliminate duplicates form Array a.k.a convert Set into Array*/
function eliminateDuplicates(items) {
	return [...new Set(items)];
	}
	let numbers = [1, 2, 3, 3, 3, 4, 5],
	noDuplicates = eliminateDuplicates(numbers);
	console.log(noDuplicates); // [1,2,3,4,5]
	
/*Reference Stays use WeakSet if last reference left is that in Set only*/

	let set = new WeakSet(),
	key = {};
	// add the object to the set
	set.add(key);
	console.log(set.has(key)); // true
	// remove the last strong reference to key (also removes from weak set)
	key = null;
	console.log(set);
	
	
/* Maps */	
	let map = new Map([["name", "dub"], ["age", 25]]);
	map.forEach(function(value, key, ownerMap) {
	console.log(key + " " + value);
	console.log(ownerMap === map);
	});	// .set, .delete, .clear, .get, .has are available
/*WeakMap() to save the memory*/	
	

/*Handling private data*/
	var Person = (function() {
		var privateData = {},
		privateId = 0;
		function Person(name) {
		Object.defineProperty(this, "_id", { value: privateId++, writable:true });
		privateData[this._id] = {
		name: name
		};
		}
		Person.prototype.getName = function() {
		return privateData[this._id].name;
		};
		return Person;
		}());

		var aPerson = new Person("ishan");
		console.log(aPerson)

		var aPerson0 = new Person("ishanddd");
		aPerson0._id = 40;
		console.log(aPerson0._id);// Drawback being that the privateData will have references
		
		
		/**/
		let Person = (function() {
			let privateData = new WeakMap();
			function Person(name) {
			privateData.set(this, { name: name });
			}
			Person.prototype.getName = function() {
			return privateData.get(this).name;
			};
			return Person;
			}());


			var aPer1 = new Person("123");
			var aPer2 = new Person("1234");
			console.log(aPer1.getName());
			aPer2 = null;
			console.log(aPer1.getName());
			console.log(aPer1.getName());

			function Women(name) {
			this._name = name;
			}

			var aWomen = new Women("1234");
			console.log(aWomen._name);
            console.log(aPer1.getName());

	
	
	
	
