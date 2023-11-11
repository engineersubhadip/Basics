let student =[
      {name:"Smith",rollNumber:31,marks:80},
      {name:"Jenny",rollNumber:15,marks:69},
      {name:"John",rollNumber:16,marks:35},
      {name:"Tiger",rollNumber:7,marks:55}
     ];

const output = student.reduce(function(acc,curr){
      let currentMarks = curr.marks;
      acc = acc + currentMarks;
      return acc;
},0)

console.log(output);