class Car{
    constructor(model,color){
        this.model = model;
        this.color = color;
        this.getDetail = function(){
            return `Model is ${this.model} and Color is ${this.color}`;
        }
    }
};

class SuperCar extends Car{ // SuperCar will inherit from Car
    constructor(model,color,features,price){
        super(model,color); // Invoking the Constructor of Car Class
        this.features = features;
        this.price = price;
    }
}

let bmwSuperCar = new SuperCar("BMW","Red",["f1","f2"],2300000);

console.log(bmwSuperCar);