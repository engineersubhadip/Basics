function* fetchNextElement(){
      console.log("The starting ...");
      yield 2;
      console.log("In the Middle...");
      yield 3;
      yield 4;
      yield 5;
      console.log("About to End...");
}

let result = fetchNextElement();

console.log("The first value is",result.next());
console.log("The second value is",result.next());
console.log("The third value is",result.next());
console.log("The forth value is",result.next());
console.log("The fifth value is",result.next());
console.log("The sixth value is",result.next());
console.log("The seventh value is",result.next());
