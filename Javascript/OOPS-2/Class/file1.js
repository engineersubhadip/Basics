class Car1{
    constructor(model,color){
        this.model = model;
        this.color = color;
        this.getDetail = function(){
            return `Model is ${this.model} and Color is ${this.color}`;
        }
    }
};

let bmwCar = new Car1("BMW","Red");

console.log(bmwCar); // bmwCar is an object created from the Class Car.

console.log(bmwCar.color);

console.log(bmwCar.model);

console.log(bmwCar.getDetail()); // We are doing a method invocation at this point. So the value of "this" inside the function will point to the object through which the method is getting called


class Car2{
    constructor(model,color){
        this.model = model;
        this.color = color;
    }

    getDetail(){ // This will be saved inside the Prototype
        return `Model is ${this.model} and color is ${this.color}`;
    }
};

let bmwCar2 = new Car2("BMW","Red");

console.log(bmwCar2); // -> {model : BMW, color : Red}

console.log(bmwCar2.model); // BMW

console.log(bmwCar2.color); // Red

console.log(bmwCar2.getDetail()); // JS checked in the first level that the function is not present. So it went inside Prototype and found the function.

console.log(Car2);


class Car3{
    constructor(model,color){
        this.model = model;
        this.color = color;
        this.getDetail = function(){ // It will be created as a key inside the top most object
            return `Model will be ${this.model} and color will be ${this.color}`;
        }
    }

    getDetail(){ // This will be saved inside the Prototype
        return `Model is ${this.model} and color is ${this.color}`;
    }
};

let bmwCar3 = new Car3("BMW","Red");

console.log(bmwCar3);

console.log(bmwCar3.getDetail()); // It will execute line 51. Because, that function is present as a key inside the top most object. Whereas, the method getDetail in line 55 will be present inside the prototype of the object bmwCar3