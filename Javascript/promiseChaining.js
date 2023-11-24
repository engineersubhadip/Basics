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