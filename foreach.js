const languages=["js","python","java","C","Rust"]

// languages.forEach(function(val){
//     console.log(val);
// })

// languages.forEach((item)=>{
//     console.log(item);
// })

function printMe(item,i){ 
    console.log(item,i)//i is the key
}

languages.forEach(printMe)