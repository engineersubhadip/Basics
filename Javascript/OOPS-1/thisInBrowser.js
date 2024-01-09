console.log(this); // Global/ Window Object :- All the functionalities given by the Browser lies in this object

// * Direct Invocation

function f(){
    console.log(this);
}

f(); // We still get the Global/Window Object