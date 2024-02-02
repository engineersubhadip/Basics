// Prototype Chain Usage:
// Consider a scenario where you have a prototype object shape with a method area. You also have another object rectangle that has properties width and height, and it should inherit the area method from shape. How would you utilize the call method to link rectangle with shape?

let shape = {
    area:function(width,height){
        if (this.width != undefined && this.height != undefined){
            return this.width * this.height;
        }else{
            return "This function accepts width and height"
        }
    }
}

let rectangle = {
    width:25,
    height:12
}

let result = shape.area.call(rectangle);
console.log(result);