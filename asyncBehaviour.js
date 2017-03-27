function haltFor(seconds, callBack){

var aDate = new Date();
aDate = aDate.getTime();
var aNewDate = new Date();
aNewDate = aNewDate.getTime();
var clearObj = {}; 
clearObj.clearFunction = function(){
clearTimeout(aId);
} 

var aId = setTimeout(function(){
while((aNewDate - aDate) < 1000*30){
aNewDate = new Date();
aNewDate = aNewDate.getTime();
console.log(aNewDate);
}
if(typeof callBack == 'function')
callBack();
},seconds*1000);
return clearObj;
}

var aFunc;

function aFunc(){
console.log('CB');
}
var aCancel = haltFor(10, aFunc);
//aCancel.clearFunction();

