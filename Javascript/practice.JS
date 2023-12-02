// The task is to print 1 after 1sec ; 2 after 2sec...

function timer(){
  let count = 1;
  function newFun(){
    let newCounter = count;
    let delay = count*1000;

    setTimeout(() => {
      console.log(newCounter, "and the delay is", delay);
    }, delay);

    count += 1;
  }
  return newFun; // Fix: Return newFun instead of callback
}

let value = timer();

value();
value();
value();
value();
