//! return an array of objects containing only the departments that have an average salary above 65000.
const employees = [
      { name: "John", salary: 50000, department: "IT" },
      { name: "Jane", salary: 60000, department: "HR" },
      { name: "Bob", salary: 55000, department: "IT" },
      { name: "Sophie", salary: 75000, department: "HR" },
      { name: "Mike", salary: 65000, department: "IT" },
      { name: "Emily", salary: 80000, department: "HR" },
      { name: "David", salary: 70000, department: "IT" },
    ];

// * Target One:- {"IT":[10,20,30]; "HR":[12,13,19]}

/**
 * Over here we will list all the salaries for every department
 */



const departmentSalaries = employees.reduce(function(acc,curr){
      let currentDepartment = curr.department;
      let currentSalary = curr.salary;

      if (!acc[currentDepartment]){
            acc[currentDepartment] = [currentSalary];
      }else{
            acc[currentDepartment].push(currentSalary);
      }

      return acc;
},{})

//  * Target Two:- {"IT" : 20, "HR": 30}

/**
 * At this section we will find out averages of all the departments
 */

const departmentAverage = Object.keys(departmentSalaries).reduce(function(acc,curr){
      let currentDepartment = curr;
      let currentSalary = departmentSalaries[curr].reduce(function(total,current){
            total = total + current;
            return total;
      },0)
      let currentAverage = Math.ceil(currentSalary/departmentSalaries[curr].length);

      acc[currentDepartment] = currentAverage;
      return acc;
},{})

// * Target Three:- [{department:"HR", average:71667}] :-
/**
 * At this section we will filter out the department with the highest average
 */

const highestAverageDepartment = Object.keys(departmentAverage).reduce(function(acc,curr){
      let currentDepartment = curr;
      let currentAverage = departmentAverage[curr];

      if (currentAverage > 65000){
            acc.push({'department':currentDepartment,'average':currentAverage});
      }
      return acc;
},[])

console.log(highestAverageDepartment);