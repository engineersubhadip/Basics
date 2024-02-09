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


// bmwSuperCar -> {model:"BMW",color:"Red",getDetails:f,features:["f1","f2"],price:230000}
// bmwSuperCar object is built from the Blueprint of SuperCar Class.
// So inside the prototype we will have the constructor function of SuperClass.
// Parent on SuperClass will be Car . So inside the Prototype of SuperClass we will have constructor function of Car.
// Car Class will be built on top of Native JS Object. So inside the prototype of Car we will have Native JS Object's functionalities

// {model:"BMW",color:"Red",getDetails:f,features:["f1","f2"],price:230000, Prototype : constructor of SuperClass -> Prototype : constructor of Car -> Prototype of Object}