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