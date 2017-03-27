function clone(theObj){
var outObj = {};
 for(var prop in theObj){
 if(theObj.hasOwnProperty(prop)){
    if(typeof theObj[prop] == 'object' && Object.keys(theObj[prop])){
         outObj[prop] = clone(theObj[prop]);
    }else{
         outObj[prop] = theObj[prop];
    }
 
 }
 
 }
 return outObj;
}