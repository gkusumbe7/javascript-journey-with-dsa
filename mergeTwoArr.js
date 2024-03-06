let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];
let mergeArr = [];

for(let i = 0 ; i < arr1.length ; i++){
     mergeArr[i] = arr1[i];
}
// console.log(mergeArr);
for(let i = 0 ; i < arr2.length ; i++){
    mergeArr[mergeArr.length] = arr2[i];
}
console.log(mergeArr);

// let newArrIS = [...arr1 , ...arr2];
// console.log(newArrIS);
