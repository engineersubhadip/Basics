// ! Details of Student with average score above 90

const students = [
      { name: "Alice", scores: [90, 85, 92] },
      { name: "Bob", scores: [75, 80, 85] },
      { name: "Charlie", scores: [90, 95, 85] },
      { name: "David", scores: [100, 100, 100] }
    ];


//* Target 1:- {Alice:85, Bob:90....}

const tarOne = students.reduce(function (acc,curr){
      let currentStudent = curr.name;
      let currentStudentTotal = curr.scores.reduce(function(sum,runVal){
            sum = sum + runVal;
            return sum;
      },0)
      let currentStudentAverage = currentStudentTotal/curr.scores.length;

      // ? Time to store the details of the Student
      acc[currentStudent] = currentStudentAverage;
      return acc;
},{})

function finalPush(acc,record){
      let currentName = record[0];
      let currentAverage = record[1];

      if (currentAverage > 90){
            acc.push({'name' : currentName, 'average': currentAverage});
      }
      return acc;
}

const tarTwo = Object.entries(tarOne).reduce(finalPush,[]);

console.log(tarTwo);
// const finalOutput = Object.keys(studentsAbove90).reduce(function (acc,curr){

// },[])

