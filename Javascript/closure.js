function outer(){
      let count = 0;
      function inner(){
            count+=1;
            console.log(count);
      }
      return inner;
}

let res = outer();
console.log(res);
res();
res();