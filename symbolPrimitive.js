/*How to use Symbol*/
let aSecret = Symbol('1234'),  anObj = {[aSecret]:"ishank"};
console.log(anObj[aSecret]);


/*Create a readonly computed property of symbol*/

let firstName = Symbol("first name");
//use a computed object literal property
let person = {
[firstName]: "firsrName"
};
//make the property read only
Object.defineProperty(person, firstName, { writable: false });
let lastName = Symbol("last name");
Object.defineProperties(person, {
[lastName]: {
value: "lastName",
writable: false
}
});
let aSymbol = Symbol.for("last name");
console.log(person[firstName]); // "firsrName"
console.log(person[aSymbol]); // "lastName"


/*Symbol.for - to retrive the same Symbol*/
let aSymbol = Symbol.for("middle name");
person[aSymbol] = 'troy';
console.log(person[Symbol.for("middle name")]);//troy
console.log(person[Symbol("middle name")]); //undefined
console.log(Symbol.keyFor(aSymbol)); // middle name



/*Lack of coersion*/
let aString = Symbol.for('testKey') + ""; // Err...Cannot convert a Symbol value to a string


/*
 * Object.keys() and Object.getOwnPropertyNames() will not retrive the Symbol properties use-
 * Object.getOwnPropertySymbols()
 * */


/*Override the instanceof with the help of Symbol.hasInstance
 * Till ES5 it was hidden nad was for internal uses*/

Object.defineProperty(Object, Symbol.hasInstance,{
	value:function(arg){
		return false;
	}
});

//console.log({} instanceOf Object);



