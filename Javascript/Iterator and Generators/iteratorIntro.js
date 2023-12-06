function fetchNextElement(array){
      let index = 0;
      function next(){
            if (index == array.length){
                  console.log("The next element is",undefined);
            };
            console.log("The next element is",array[index]);
            index+=1;
      }
      return next;
}

let result = fetchNextElement([12,13,99,"Subhadip",32,85,38,30,3])

result();
result();
result();
result();
result();
result();
result();
result();
result();
result();
result();
result();
result();
result();