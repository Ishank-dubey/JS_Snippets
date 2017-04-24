//Event Loop and Job queue

/*Callback Hell*/

readFile('fileTest.txt',function(error, contents){
	if(err){
		throw error;
	}
	method1(function(){
		method2(function(){
			method3(function(){
				//..
			})
		})
	})
})


/*Basic Promise*/
let promise = new Promise(function(resolve, reject) {
console.log("Promise");
resolve();
});
promise.then(function() {
console.log("Resolved.");
});
console.log("Hi!");


/*Settled Promises*/
let promise = Promise.resolve(42);
promise.then(function(value) {
console.log(value); // 42
});
let promise = Promise.reject(42);
promise.catch(function(value) {
console.log(value); // 42
});


/*Non Promise thenables*/
let thenable = {
		then: function(resolve, reject) {
		resolve(42);
}
};


let p1 = Promise.resolve(thenable);
p1.then(function(value) {
console.log(value); // 42
});