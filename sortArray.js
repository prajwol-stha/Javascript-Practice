const arr=[3,6,8,2,9,0];
const sortedArr = arr.sort((a, b) => a - b);

// console.log('Using method: ',sortedArr)
console.log('Using loop: ')

function bubbleSort(arr){
for(let i=0;i<arr.length;i++){
    for(let j=0;i<arr.length-1;i++){
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
    return arr;
}
}

let sortedArr2=bubbleSort(arr);
console.log(sortedArr2);
