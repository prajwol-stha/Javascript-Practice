//scope and closures and lexical scope
// function one(){
//     const username="Prajwol";
//     function two(){
//         const website="youtube"
//         console.log(`In the function two, username ${username} is accessed. `)
//     }
//     // console.log(website); //cannot be accessed
//     two();
// }
// one()

//hoisting
console.log(addOne(5))
function addOne(num){
    return num+1;
}

// console.log(addTwo(5))// gives error
const addTwo=function(num){
    return num+2;
}
console.log(addTwo(5))// runs


