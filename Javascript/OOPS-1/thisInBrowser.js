console.log(this); // Global/ Window Object :- All the functionalities given by the Browser lies in this object

// * Direct Invocation

function f(){
    console.log(this);
}

f(); // We still get the Global/Window Object

// * Method Invocation 

let obj = {
    name:"Patrick",
    company:"Jane Industries",
    sayHello:function(){
        console.log(this);
    }
};

obj.sayHello(); // This will give us the Parent Object itself

let result = obj.sayHello;

result(); // This is a DIRECT invocation. So it will be Global/Window Object as the output

let obj1 = {
    name:"Martha",
    company:"Stewart Industries",
    sayHello:function(){
        function gxn(){
            console.log(this);
        }
        gxn(); // This is a Direct Invocation. It will give us Global/Window Object
    }
};

let val2 = obj1.sayHello;

val2(); // This will return us Global/Window Object
