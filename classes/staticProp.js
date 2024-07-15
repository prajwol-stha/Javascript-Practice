class User {
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username:${this.username}`)
    }

    static createId(){
        //static ->stops from being this method accessed
        return `123`
    }
}

const prajwol=new User("Prajwol")
// console.log(prajwol.createId()) //cannot be used when used static
 
class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email= email
    }
}

const Bishwa= new Teacher("Bishwa","bishwa@gmail.com")
// console.log(Bishwa.createId()); //cannot access