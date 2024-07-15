const sentence="My name is akfjoajfofa Prajwol Shrestha."

// for (let i = 0; i < sentence.length; i!=undefined) {
    
// }

let words=sentence.split(" ")
console.log(words)
// console.log(words[0].length)
// console.log(words.length)

let longestWord=''
// for(let word of words){
//     if (word.length>longestWord.length){
//         longestWord=word
//     }
// }

for(i=0;i<words.length;i++){
    if (words[i].length>longestWord.length){
        longestWord=words[i]
    }
}

console.log(`The longest word is ${longestWord}`)
