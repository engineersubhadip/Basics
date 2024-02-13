let a = [1,[2,3,[4],5,6]];

let b = [];

function fxn(arr){
    for (let i=0; i<arr.length; i++){
        if (typeof arr[i] === "number"){
            b.push(arr[i]);
        }else{
            fxn(arr[i]);
        }
    }
}

fxn(a);

console.log(b);