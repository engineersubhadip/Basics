class Dummy{
    constructor(length){
        this.length = length
    }

    setBreadth(breadth){
        this.breadth = breadth;
    }
}

let rectangle = new Dummy(5);

console.log(rectangle);

rectangle.setBreadth(12);

console.log(rectangle);