for(var i=0;i<5;i++){
(function(i){
setTimeout(function(){console.log(i);},i);
})(i)
}

/*Will print on the last value of i*/

for(var i=0;i<5;i++){
	
	setTimeout(function(){console.log(i);},i);

	}



/*const variables*/

const aVar = {1:'11'}, aVar1 = 2;
aVar[1] =2;
console.log(aVar);// Ok
aVar1 = 3;//Error