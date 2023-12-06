1. `Iterator` Object has 3 properties (`value`, `done` and `next()`).

Using the function `next()` we access the `value` property which stores the next value in the collection.

The `done` property tells us if we have / have not consumed all the values in our collection.
If `true` it means all the values are consumed.
If `false` it means the values are still left to be consumed.

So basically when we call the next function, we get {value : XYZ, done : true/false}

Syntax for Iterators :-

function outerFunction(array){
      let index = 0;
      function next(){
            if (index == array.length){
                  console.log({value:undefined,done:true});
            }
            console.log({value : array[index], done : true});
            index+=1;
      }
      return {next}  -> This line is basically demonstrating the fact that we are returning an object inside which there is a function `next()`
}

let result = outerFunction([12,134,44,21,82]);

Here `result` is an `iterator object` which has a function `next()`.

When we do `result.next()` it will return us an object {value : XYZ, done : true/false}.