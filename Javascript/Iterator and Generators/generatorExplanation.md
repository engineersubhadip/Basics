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


<-: FINAL TAKEAWAY :->

1. Generator functions are a bit different than the normal functions.
2. When you call them they do not start their execution immediately.
3. When you call the `next()` function that is when you start the execution. And you momentarily halt the execution on the first `yield`. Then you call `next()` again, the `yield` that you last got after that you start execution until you meet the next `yield`.
4. If you put a `return` keyword that is like the last `yield` statement. Post which any `yield` or `console.log()` is actually going to work.
5. Lets say we have 2 `value.next()` and 2 yields one in line 5 and another in line 7. When we encounter the first yield we temporarily return from line 5. When we make the second `value.next()` we resume our operation from line 5 only.
6. Inside `value.next()` we are not passing any argument. So the default argument passed is `undefined`.