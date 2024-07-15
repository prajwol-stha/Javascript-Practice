function setUsername(username){
    this.username=username    
}

function createUser(username,email,password){
    setUsername.call(this,username)
    this.email=email
    this.password=password
}

const prajwol=new createUser("Prajwol","prajwolid@gmail.com","123")

console.log(prajwol)