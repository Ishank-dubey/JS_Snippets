var aNumber = 1221, anArrayOfNumbers=[], anArrayOfDigits=[];
while(aNumber){
        anArrayOfDigits.push(aNumber%10);
        aNumber = (aNumber - aNumber%10)/10;
    }
    
    var array = [], done=[];
    allCombinations(anArrayOfDigits);
    
    function allCombinations(arg){
    var digit, anIndex;
    for(anIndex=0;anIndex<arg.length;anIndex++){
        digit = arg.splice(anIndex,1)[0];
        done.push(digit);
        if(arg.length==0){
        array.push(done.slice());
        }
        allCombinations(arg);
        arg.splice(anIndex,0,digit);
        done.pop();
    }
    return array;
    
    }
    
    
    var aNum, anOuterIndex=0;
    for(anOuterIndex=0;anOuterIndex<array.length;anOuterIndex++){
      var aNewNum=0;
      for(anIndex=0;anIndex<anArrayOfDigits.length;anIndex++){
        aNewNum = aNewNum + array[anOuterIndex][anIndex]* Math.pow(10,anArrayOfDigits.length-1-anIndex);
    }
    anArrayOfNumbers.push(aNewNum);
    }
    
    
    
    var aFilteredArray = anArrayOfNumbers.filter(function(element, index, self){
        return index== self.indexOf(element);
    });
    
    console.log(aFilteredArray);
    