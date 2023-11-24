// https://www.scaler.com/help_requests/871219/?ref=join-call-now

Promise.resolve("foo")
.then(function fh1(val){
      return new Promise(function exec(res,rej){
            setTimeout(function (){
                  val += "bar";
                  res(val);
            },10000);
      })
})
.then(function fh2(val){
      setTimeout(function (){
            val += "baz";
            console.log(val);
      },1);
      return val;
})
.then(function fh3(val){
      console.log(val);
})

mtq:[]
callstack:[f()]

//! TEMP
{
      state:fulfill;
      value:foobar;
      onfulfill:[];
      onreject:[]
}

{
      state:fulfill
      value:foo;
      onfulfill:[fh1];
      onreject:[]
}

{
      state : pending;
      value:undefined;
      onfulfill:[fh2];
      onreject:[]
}

{
      state : pending;
      value:undefined;
      onfulfill:[fh3];
      onreject:[]
}

/////
{
      state : pending;
      value:undefined;
      onfulfill:[];
      onreject:[]
}
