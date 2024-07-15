class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password    
    }

    addCourse(){
        console.log(`New course was added by ${this.username}.`)
    }
}

const teacherOne=new Teacher("Bishwa","bishwa@gmail.com","123")

teacherOne.addCourse();
teacherOne.logMe();

const userOne=new User("UserOne")

// userOne.addCourse(); //do not have access
userOne.logMe(); 