// Scenario 5: Function Borrowing

// You have a method calculateArea defined on an object rectangle, 
// but you also want to use the same method on another object square. 
// Use bind to create a new function calculateSquareArea that calculates the area of a square.

let rectangle = {
    length:100,
    breadth:50,
    calculateArea:function(){
        console.log("The area is "+(this.length*this.breadth));
    }
}

let square = {
    length:100,
    breadth:100
}

let calculateSquareArea = rectangle.calculateArea.bind(square);

calculateSquareArea();