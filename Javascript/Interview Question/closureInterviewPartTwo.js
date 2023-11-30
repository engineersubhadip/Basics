// * We want to print 1 after 1s, 2 after 2s ...


function timer(){
      let count = 1;
      function callback(){
            let delay = count*1000;
            let currTime = new Date().getTime();

            while (new Date().getTime() < currTime + delay){
                  // * Do Something
            }

            console.log(count);
            count+=1;
      }
      return callback;
}

let value = timer();

value();
value();
value();
value();