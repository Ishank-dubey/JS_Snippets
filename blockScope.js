for(var i=0;i<5;i++){
(function(i){
setTimeout(function(){console.log(i);},i);
})(i)
}

/*Will print on the last value of i*/

for(var i=0;i<5;i++){
	
	setTimeout(function(){console.log(i);},i);

	}
