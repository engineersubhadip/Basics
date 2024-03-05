function outer(){
    var x = 10;
    function inner(){
        console.log(x);
        var x = 20;
    }
    return inner;
}

var closureFunc = outer();

closureFunc();