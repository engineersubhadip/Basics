const data = [{
    id: 1,
    type: "CREDIT",
    amount: 1000
    }, 
    {
    id: 1,
    type: "DEBIT",
    amount: 5000
    }, 
    {
    id: 1,
    type: "CREDIT",
    amount: 1000
    }, 
    {
    id: 1,
    type: "CREDIT",
    amount: 10000
    }, 
    {
    id: 1,
    type: "DEBIT",
    amount: 2000
    }];

let res1 = data.reduce(function(acc1,curr1){
    let currType = curr1.type.toLowerCase();
    let currAmount = curr1.amount;

    if (acc1[currType] === undefined){
        acc1[currType] = [currAmount];
    }else{
        acc1[currType].push(currAmount);
    }
    return acc1;
},{});


let res2 = Object.keys(res1).reduce(function(acc2,curr2){
    let currType = curr2;
    let currArray = res1[currType].reduce(function(acc3,curr3){
        return acc3+curr3;
    },0);
    acc2[currType] = currArray;
    return acc2;
},{});

console.log(res2);

