function reverStrInChunk(str, k){
 
 let output='', subStr = '', index=0, revStr,
 res = str.substring(index, k), remStr;
 revStr = res.split("").reverse().join("");
 
remStr = str.substring(k, str.length);
 
if(remStr.length>3){ 
 return revStr+" "+reverStrInChunk(remStr,k);
 }
else if(remStr.length<=3) {
 return revStr+" "+ remStr.split("").reverse().join("")
}
  
}

var aStr = reverStrInChunk('xyzabc',3);

console.log(aStr);