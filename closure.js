function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName; //if you return function, not only function, the whole scope of the function is returned
  }
  
const myFunc = makeFunc();
myFunc();
  