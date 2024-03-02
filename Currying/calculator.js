// calculate("sum")(3)(4) -> 7
// calculate("substract")(5)(2) -> 3
// calculate("multiply")(3)(4) -> 12
// calculate("divide")(8)(4) -> 2

function calculate(operand){
    return function(val1){
        return function(val2){
            if (operand === "sum"){
                return val1+val2;
            }else if(operand === "substract"){
                return val1-val2;
            }else if(operand === "multiply"){
                return val1*val2;
            }else if(operand === "divide"){
                return Math.floor(val1/val2);
            }
        }
    }
}

let res1 = calculate("substract")(12)(14);

let res2 = calculate("multiply")(3)(9);

let res3 = calculate("divide")(41)(3);

let res4 = calculate("sum")(17)(18);


console.log("Res1 ->",res1); //-2

console.log("Res2 ->",res2); // 27

console.log("Res3 ->",res3); // 13

console.log("Res4 ->",res4); // 35
