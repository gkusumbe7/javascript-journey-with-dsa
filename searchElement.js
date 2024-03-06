let newArr = [5,2,65,47,89,25];
let checkNum = 65;
let indexCheck = null;

for(let i = 0 ; i < newArr.length ; i++){
    if(newArr[i] === checkNum){
        indexCheck = i;
    }
}
console.log(indexCheck);
// console.log(newArr.indexOf(checkNum));
// console.log(newArr.splice(0,3))
