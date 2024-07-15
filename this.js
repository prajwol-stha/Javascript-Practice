const chai1 = function () {
let username = "hitesh"
console.log(this.username);
}

const chai2 =  ()=> {
let username = "prajwol"
console.log(this);
}

chai1()
chai2()

