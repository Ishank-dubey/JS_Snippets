
/*Class like in EcmaScript 5*/
function Person(name) {
this.name = name;
}
Person.prototype.getName = function() {
console.log(this.name);
};
var person = new Person("Brendan Eich");
person.getName(); // outputs "Brendan Eich"
console.log(person instanceof Person); // true
console.log(person instanceof Object); // true


/*Class basics*/

class Person{
	constructor(name){//Special function else all are concise functions 
		this.name = name;//Best place to declare Own Properties
	}
	getName(){
		alert(this.name);
	}
}
let person = new Person("Brendan Eich");
person.getName(); // outputs "Brendan Eich"
console.log(person instanceof Person); // true
console.log(person instanceof Object); // true
console.log(typeof Person); // function
console.log(typeof Person.prototype.getName); // function- but yes with a class the .prototype is a read-only thing


/*So what's the difference between the function way and the class way?*/
let PersonType2 = (function() {
	"use strict";
	const PersonType2 = function(name) { // So that PersonType2 could'nt be assigned to other object by mistake
	// make sure the function was called with new
	if (typeof new.target === "undefined") {
	throw new Error("Constructor must be called with new.");
	}
	this.name = name;
	}
	Object.defineProperty(PersonType2.prototype, "getName", {
	value: function() {
	// make sure the method wasn't called with new
	if (typeof new.target !== "undefined") {
	throw new Error("Method cannot be called with new.");
	}
	console.log(this.name);
	},
	enumerable: false, // Will not be visible in a for in loop
	writable: true,  // Writable
	configurable: true // Can be deleted via delete getName
	});
	return PersonType2;
	}()); // Hoisting is like the let


/*class in expression*/
var aClass = class{
	constructor(name){
	this.name = name;
	}
	getName(){
	console.log(this.name);
	}
	}

	let aVar = new aClass('test');
	aVar.getName();
	
	
/*Singleton uses*/
let Person = new class{
	constructor(name){
		this.name = name;
	}
	getName(){
		console.log(this.name);
	}
}('troy')

Person.getName();



/*Generators in Class*/
class Collection {
	constructor() {
	this.items = [];
	}
	*[Symbol.iterator]() {
	yield *this.items;
	}
	}
	var collection = new Collection();
	collection.items.push(1);
	collection.items.push(2);
	collection.items.push(3);
	for (let x of collection) {
	console.log(x);
	}
	// Output:
	// 1
	// 2
	// 3
	
	
/*Old Static Way*/
	function Person(name) {
		this.name = name;
		}
	// static method
	Person.create = function(name) {
	return new PersonType(name);
	};
	// instance method
	Person.prototype.sayName = function() {
	console.log(this.name);
	};
	var person = Person.create("hector");

/*Using ES6 static keyword*/
	class Person {
		// equivalent of the Person constructor
		constructor(name) {
		this.name = name;
		}
		
		// equivalent of Person.prototype.sayName
		sayName() {
		console.log(this.name);
		}
		// equivalent of PersonType.create
		static create(name) {
		return new PersonClass(name);
		}
		}
		let person = PersonClass.create("Igememnon"); // static members accessbale only via class name not instance and 
		                                               // 
		
		

/*Old way of Inheritance*/
		function Rectangle(length, width) {
			this.length = length;
			this.width = width;
			}
			Rectangle.prototype.getArea = function() {
			return this.length * this.width;
			};
			function Square(length) {
			Rectangle.call(this, length, length);
			}
			Square.prototype = Object.create(new Rectangle());//
			var square = new Square(3);
			console.log(square.getArea()); // 9
			console.log(square instanceof Square); // true
			console.log(square instanceof Rectangle); // true
			
			
/*ES 6 inheritance*/
			class Rectangle {
				constructor(length, width) {
				this.length = length;
				this.width = width;
				}
				getArea() {
					return this.length * this.width;
					}
					}
					class Square extends Rectangle {
					constructor(length) {
					// equivalent of Rectangle.call(this, length, length)
					// this is error before super
					super(length, length);
					}
					}
					var square = new Square(3);
					console.log(square.getArea()); // 9
					console.log(square instanceof Square); // true
					console.log(square instanceof Rectangle); // true
					
					
					
/*Multiple Inheritance*/					
					let SerializableMixin = {
							serialize() {
							return JSON.stringify(this);
							}
							};
							let AreaMixin = {
							getArea() {
							return this.length * this.width;
							}
							};
							function mixin(...mixins) {
							var base = function() {};
							Object.assign(base.prototype, ...mixins);//merge the objects
							return base;
							}
							class Square extends mixin(AreaMixin, SerializableMixin) {
							constructor(length) {
							super();
							this.length = length;
							this.width = length;
							}
							}
							var x = new Square(3);
							console.log(x.getArea()); // 9
							console.log(x.serialize()); // "{"length":3,"width":3}"
							
			
/*Inheriting Built in Objects*/				
							class PrinceArray extends Array {
								
								}
								var colors = new PrinceArray();
								colors[0] = "Prisales";
								console.log(colors.length); // 
								
/*Derived Class can choose wat to return- self or parent*/
								class MyClass {
									static get [Symbol.species]() {
									return this;
									}
									constructor(value) {
									this.value = value;
									}
									clone() {
									return new this.constructor[Symbol.species](this.value);
									}
									}
									class MyDerivedClass1 extends MyClass {
									// empty
									}
									class MyDerivedClass2 extends MyClass {
									static get [Symbol.species]() {
									return MyClass;
									}
									}
									let instance1 = new MyDerivedClass1("paan"),
									clone1 = instance1.clone(),
									instance2 = new MyDerivedClass2("singh"),
									clone2 = instance2.clone();
									console.log(clone1 instanceof MyClass); // true
									console.log(clone1 instanceof MyDerivedClass1); // true
									console.log(clone2 instanceof MyClass); // true
									console.log(clone2 instanceof MyDerivedClass2); // false								
								
				
// Encapsulation, Inheritance, Abstraction, Multiple inheritance
/*Abstraction*/		

									// abstract base class
									class Shape {
									constructor() {
									if (new.target === Shape) {
									throw new Error("This class cannot be instantiated directly.")
									}
									}
									}
									class Rectangle extends Shape {
									constructor(length, width) {
									super();
									this.length = length;
									this.width = width;
									}
									}
									var x = new Shape(); // throws an error
									var y = new Rectangle(3, 4); // no error
									console.log(y instanceof Shape); // true									
		
		
	