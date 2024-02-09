class Car{
    constructor(model,color){
        this.model = model;
        this.color = color;
        this.getDetail = function(){
            return `Model is ${this.model} and Color is ${this.color}`;
        }
    }
};

let bmwCar = new Car("BMW","Red");

console.log(bmwCar); // bmwCar is an object created from the Class Car.

console.log(bmwCar.color);

console.log(bmwCar.model);

console.log(bmwCar.getDetail()); // We are doing a method invocation at this point. So the value of "this" inside the function will point to the object through which the method is getting called