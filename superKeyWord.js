/**
 * http://usejsdoc.org/
 */


//Adding computed property
var aProp = 'test';

var anObj = {
[aProp]:aProp
};
console.log(anObj);

//Get n Set
var receiver = {},
supplier = {
get name() {
return "file.js"
}
};
//console.log(Object.getOwnPropertyDescriptor(supplier,'name').get);


// 
'use strict'
var aOb1 = Object.create({aFun:function(){
alert('papa');
}});
aOb1.aFun = function(){
alert('boy');
}

//aOb1.aFun();

//Super works only inside 'Consise Methods'
let person = {
name:'person',
getGreeting() {
return this.name;
}
};


let dog = {
name:"dog",
getGreeting() {
return this.name;
}
};
let friend = {
name:'frinen',
getGreeting() {
console.log(this);
return Object.getPrototypeOf(this).getGreeting.call(this) + ", hi!";
}
};

let superfriend = {
name:'super frinen',
getGreeting() {
return super.getGreeting() + ", hi!";
}
};

let multiProto = Object.create(friend);

console.log(multiProto.getGreeting());
// set prototype to person
Object.setPrototypeOf(superfriend, person);
//console.log(superfriend.getGreeting());
Object.setPrototypeOf(friend, person);
//console.log(friend.getGreeting()); // "Hello, hi!"
//console.log(Object.getPrototypeOf(friend) === person); // true
// set prototype to dog
Object.setPrototypeOf(friend, dog);
//console.log(friend.getGreeting()); // "Woof, hi!"
//console.log(Object.getPrototypeOf(friend) === dog); // true


