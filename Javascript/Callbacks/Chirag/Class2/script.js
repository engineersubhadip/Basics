const fs = require("fs");

fs.readFile("f1.txt",function f1(f1err,f1data){
    if(f1err){
        console.log("Error from File 1 is",f1err);
    }else{
        console.log("Data from File 1 is",f1data);
        fs.readFile("f2.txt",function f2(f2err,f2data){
            if(f2err){
                console.log("Error from File 2 is",f2err);
            }else{
                console.log("Data from File 2 is",f2data);
                fs.readFile("f3.txt",function f3(f3err,f3data){
                    if(f3err){
                        console.log("Error from File 3 is",f3err);
                    }else{
                        console.log("Data from File 3 is",f3data);
                    }
                })
            }
        })
    }
})