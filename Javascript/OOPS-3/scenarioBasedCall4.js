// Method Borrowing:
// Let's say you have two objects user1 and user2, both containing a method greet which logs a greeting message. How would you borrow the greet method from user1 and execute it in the context of user2 using the call method?

let user1 = {
    name:"Tharun",
    greet:function(){
        console.log(`${this.name} says hi! and we are inside user1`);
    }
}

let user2 = {
    name:"Jaiswal",
    greet:function(){
        console.log(`${this.name} says hi! and we are inside user2`);
    }
}

user1.greet.call(user2);

// By saying `user1.greet` we are able to access the function `greet` inside user1. Now by saying `.call(user2)` we are setting the context of `this` inside the function `greet` of user1 to user2. Meaning `this` keyword of the function `greet` of `user1` will now point to `user2`. 
// Now since 'this` keyword inside the function `greet` of `user1` is now pointing to `user2`. Hence we are accessing the name from user2. which is `Jaiswal` and print the rest `says hi! and we are inside user1`