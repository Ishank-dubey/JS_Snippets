

function argumentsToArray(){
var args = Array.prototype.slice.call(arguments);
var args1 = [].slice.call(arguments);

var args2 = Array.from(arguments);
var args3 = [...arguments];
}