let student =[
      {name:"Smith",rollNumber:31,marks:80},
      {name:"Jenny",rollNumber:15,marks:69},
      {name:"John",rollNumber:16,marks:35},
      {name:"Tiger",rollNumber:7,marks:55}
     ];

function f(ele){
      let currentMarks = ele.marks;
      let currentRoll = ele.rollNumber;
      if (currentMarks > 60 && currentRoll > 15){
            return true;
      }else{
            return false;
      }
}

const output = student.filter(f);

console.log(output);