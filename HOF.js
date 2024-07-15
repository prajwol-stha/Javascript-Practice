function salary(num){
    return num*.7
}

setTimeout(salary,300)

const mySalaries=[50,40,30,400,300]

// mySalaries.filter(n=>n>50).filter().map()
mySalaries.filter(salary).filter().map()