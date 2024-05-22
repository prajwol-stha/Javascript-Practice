// scope and closures and lexical scope
function one(){
    const username="Prajwol";
    function two(){
        const website="youtube"
        console.log(`In the function two, username ${username} is accessed. `)
    }
    // console.log(website); //cannot be accessed
    two();
}
one()