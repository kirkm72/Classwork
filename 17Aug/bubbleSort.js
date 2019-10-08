const unsortedArr = [5,9,21,56,13];

for (let i=0; i<unsortedArr.length; i++){
    for (let j=i; j<unsortedArr.length; j++){
        if(unsortedArr[j] > unsortedArr[j+1]){
            let tempval='';
            tempval = unsortedArr[j+1];
            unsortedArr[j] = unsortedArr[j+1];
            unsortedArr[j+1] = tempval;
        }
        console.log(unsortedArr);
    }
}