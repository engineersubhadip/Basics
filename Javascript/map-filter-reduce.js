// ! Age Difference between the Youngest and the Oldest

const input = [
      {
        name: "John",
        age: 13,
      },
      {
        name: "Mark",
        age: 56,
      },
      {
        name: "Rachel",
        age: 45,
      },
      {
        name: "Nate",
        age: 67,
      },
      {
        name: "Jennifer",
        age: 65,
      },
    ];



let outputYoungest = input.reduce(function (acc,curr){
      if (curr.age < acc){
            acc = curr.age;
      }
      return acc;
},100)

let outputOldest = input.reduce(function (acc,curr){
      if (curr.age > acc){
            acc = curr.age;
      }
      return acc;
},0)

console.log(outputOldest - outputYoungest);