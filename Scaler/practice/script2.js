const contacts = [
    {
        firstName:"Kristian",
        lastName:"Vos",
        number:"unknown",
        likes:["Javascript","Gaming","Foxes"]
    }
]




function lookUpProfile(name, prop) {
    // Write your code here
    // Use console.log to output the result
    
    let result = contacts.filter(function(ele){
        if(ele.firstName === name){
            return true;
        }else{
            return false;
        };
    });
    
    if (result.length == 0){
        console.log("No such contact");
    }else{

        if(result[0][prop] == undefined){
            console.log("No such property");
        }else{
            console.log(result[0][prop]);
        }
    }
  
  }

  lookUpProfile("Kristian","lastName");