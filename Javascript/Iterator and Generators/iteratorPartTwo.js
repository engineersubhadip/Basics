function nextElement(array){
      let index = 0;
      function next(){
            if (index == array.length){
                  console.log("The value is",undefined);
            }
            console.log("The value is",array[index]);
            index+=1;
      }
      return {next}; // Over here I am returning an object 
}

let result = nextElement([12,13,41,22,92,30]);

// So result is now an object which has a function next() inside it.

result.next()
result.next()
result.next()
result.next()
result.next()
result.next()
result.next()
result.next()
result.next()
result.next()