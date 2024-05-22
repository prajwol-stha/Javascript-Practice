const arr=[3,6,8,2,9,0,4,99,92];
let i=0;
let count=0;

function counter(arr){
    while(arr[count]!=undefined){
        count++;
    }
    return count;
}

let length=counter(arr);
console.log('The array has length of ', length)