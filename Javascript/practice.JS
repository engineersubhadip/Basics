var teacher = "Peter";

function fun() {
  var teacher = "Parker";

  let content = "JS";

  if(content == "IJS"){
    
    var hours = "120+";
  }
  // * Here we are trying to access hours outside of the Block Scope
  // * During the parsing phase, we will also enter inside the Block Scope
  // * And we will try to assign Scope to the variables/function.

  // * During the Execution Phase we will check if we can enter the Block scope or not.
  // * Lets say if we get a FALSY Value for the Block Scope then we will not enter the Block Scope.
  console.log(teacher,content,hours);
}

fun();

console.log(teacher);



















// {

//   function fun(){
//     console.log("123")
//   }

// }


// fun();