let array = [2,3,4,5,2,3];


function callback(element){
    return element*element;
}

function mapMimic(array,callback){
    let result = [];
    for (let i=0; i<array.length; i++){
        let value = callback(array[i]);
        result.push(value);
    }
    return result;
}

let output = mapMimic(array,callback);
console.log(output);