// Multiply(3)(2)(2) -> 12

function Multiply(a){
    return function(b){
        return function(c){
            return a*b*c;
        }
    }
}

let ans = Multiply(3)(2)(2);

console.log(ans);