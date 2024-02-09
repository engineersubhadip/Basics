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

console.log(bmwCar);