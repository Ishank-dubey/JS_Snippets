/*Multi-line Strings*/

console.log(`\`` === '`');// --> true
		
/*Express interpolation*/
var a = 10, b=11;		
var aSimpleStr = "I am addition"+(a+b)+"\n"+"that is multiplication"+(a*b);

//Using the $ syntax
var aTempString = `I am addition ${a+b}
					that is multiplication ${a*b}`;
	
	