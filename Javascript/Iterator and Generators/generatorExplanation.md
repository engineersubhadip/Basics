1. A Generator function returns a iterator `basically returns an object`.

2. A Generator function is NEVER executed immediately whenever it is called.


<-: Syntax :->

function* outer(){
      console.log("In the Starting");
      yield 1;
      yield 2;
      console.log("In the Middle");
      yield 3;
      yield 4;
}

let value = outer(); -> This will return us an iterator.

console.log(value.next()); 

-> This will return "In the Starting" and

-> {value : 1, done: false} :- So basically whenever we encounter a `yield` keyword the execution of the Generator function stopped there. Whatever is written after the `yield` keyword none of them will be executed. And whatever value we are yielding in this case `1`, that value we are returning as the return value of the iterator. Return type of the Iterator, in this case `{value : 1, done: false}`.


console.log(value.next());

-> This will return {value : 2, done : false} :- We halted at line 10. Since we are again calling value.next() we resumed after line 10.
We encountered `yield 2`.

Conclusion till this point :-> Whenever we are doing `value.next()` we are executing the function `outer()`. In the first call, we executed line 9 and line 10. Since, line 10 is a `yield` keyword, so we did not executed anything beyond that. The next time when we did `value.next()` we resumed executing the outer function from line 11 onwards.


console.log(value.next());

-> This will return "In the Middle" and {value : 3, done : false}. We stopped previously at 11. Now we resumed from 12.

console.log(value.next());

-> {value : 4, done: false}


console.log(value.next());

-> {value : undefined, done : true}

Note:-

If somewhere in the function we have a return keyword . That line will be the last to execute in the form of {value : returnValue , done:`true`}.

Beyond that if we have any other `yield` or `console.log`. Then none of them will be executed. Even if you keep calling `iteratorObject.next()` it will throw us {value : undefined, done : true}.