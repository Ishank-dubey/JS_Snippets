function flattenTheNestedArray(theArray){
    var aFlatArray = [], anIndex;
    for(anIndex in theArray){
       if(theArray.hasOwnProperty(anIndex)){
        if(theArray[anIndex].constructor === Array){
             for(let anInnerIndex in theArray[anIndex]){
                 if(theArray[anIndex].hasOwnProperty(anInnerIndex)){
                   let aValue = theArray[anIndex][anInnerIndex];
                   if(Number.isInteger(aValue))
                    aFlatArray.push(aValue);
                 }
             }
             }else {
                    let aValue = theArray[anIndex];
                    if(Number.isInteger(aValue))
                    aFlatArray.push(aValue);
             }
        }
    }
    return aFlatArray;
}