var aArry = [];

for(var i=0;i<3;i++){
(function(i){
aArry.push(function(){
console.log(i);
});
})(i)

}
aArry[0]();
aArry[1]();
aArry[2]();



var aArray2 = [];
/*
 * No need to have the IIF if let is used
 * */
for(let j=0;j<3;j++){

aArray2.push(function(){
console.log(j);
});
}

aArray2[0]();
aArray2[1]();
aArray2[2]();