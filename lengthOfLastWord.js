/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let counter = 0;
    s = s.trimEnd();
    
    if (s.length == 1) return 1;
    
    for (let i = s.length - 1; i >= 0; i--) {
        counter++;
        if (s[i] == " ") {
            return counter - 1;
        }
    }
    
    return counter;
};

// Test cases
console.log(lengthOfLastWord("How are you doing today    ")); 
console.log(lengthOfLastWord("hello")); 
console.log(lengthOfLastWord("singleword")); 
console.log(lengthOfLastWord("   ends with spaces   "));
