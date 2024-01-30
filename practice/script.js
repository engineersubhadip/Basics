let obj = {
    a : function(){
        function b(){
            console.log(this);
        }
        b();
    }
}

obj.a();