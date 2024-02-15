let a = [1,[2,3,[4],5,6]];

let b = [];

function unzipArray(array){
    for (let i=0; i<array.length; i++){
        if (typeof array[i] === "number"){
            b.push(array[i]);
        }else{
            unzipArray(array[i]);
        }
    }
}

unzipArray(a);

console.log(b);