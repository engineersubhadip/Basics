let obj = {
    a : function(){
        function b(){
            console.log(this);
        }
        b();
    }
}

let x = obj.a;
x();