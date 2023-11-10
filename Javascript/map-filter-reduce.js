function f(ele){
      return ele > 0;
}

const input = [1, -4, 12, 0, -3, 29, -150];

const output = input.filter(f).reduce(function(acc,curr){
      acc = acc + curr;
      return acc;
},0)

console.log(output);