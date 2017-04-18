/**
 * The Arrow button attaches 'this' with the upper function context
 */


let PageHandler = {
id: "123456",
init: function() {
document.addEventListener("click", function(event) {
alert('test');
this.doSomething(event.type); // error if .bind not used as 'this'  points to the function it self
}.bind(this), false);
},
doSomething: function(type) {
console.log("Handling " + type + " for " + this.id);
}
};


PageHandler.init();

/*
 * using the Arrow function to avoid the .bind
 * */
let PageHandler = {
		id: "123456",
		init: function() {
		document.addEventListener("click", (event)=> {
		alert('test with Arrow function');
		this.doSomething(event.type); // no need to use .bind
		}, false);
		},
		doSomething: function(type) {
		console.log("Handling " + type + " for " + this.id);
		}
		};


		PageHandler.init();