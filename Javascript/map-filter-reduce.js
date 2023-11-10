// ! Getting the Name Initials

function f(ele){
      return ele[0];
}

const input = "George Raymond Richard Martin";

const output = input.split(" ").map(f).reduce(function (acc,curr){
      acc += curr;
      return acc;
},"")

console.log(output);