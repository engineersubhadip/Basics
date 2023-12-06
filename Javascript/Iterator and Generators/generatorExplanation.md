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
console.log(value.next());
