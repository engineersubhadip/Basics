// Mimicking the concept of Iterators :-

function fetchNextValue(array){
      let index = 0;
      function next(){
            if (index == array.length){
                  console.log({value:undefined,done:true});
            }
            console.log({value:array[index],done:false});
            index+=1;
      }
      return {next};
}

let nextVal = fetchNextValue([12,13,14,12,92,77]);

nextVal.next();
nextVal.next();
nextVal.next();
nextVal.next();
nextVal.next();
nextVal.next();
nextVal.next();
nextVal.next();
nextVal.next();
nextVal.next();
nextVal.next();
nextVal.next();
nextVal.next();
nextVal.next();
