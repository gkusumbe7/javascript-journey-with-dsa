let numberArray = [1,2,3,4,5,6];
let positionIs = 4;

// let deleElementIs =numberArray[positionIs]; 

for(let i = positionIs ; i < numberArray.length ; i++){
    
    numberArray[i] = numberArray[i+1]; 
      
} 
numberArray.length = numberArray.length -1;

console.log(numberArray);

console.log(numberArray.indexOf(positionIs));
