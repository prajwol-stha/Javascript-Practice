let n=1991;
// let n=1001;
let copy=n;
let rev=0;
let r;
// while((n%10)!==0){
while(n>0){
    r=n%10;
    rev=rev*10+r;
    n=Math.floor(n/10);
    // n=~~(n/10);
    
}
console.log(rev);
console.log(rev==copy);