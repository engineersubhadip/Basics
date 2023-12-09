let hm = {};
let array = ['a', 'b', 'c', 'd', 'e','e'];

for (let i = 0; i < array.length; i++) {
  if (hm[array[i]] === undefined) {
    hm[array[i]] = 1;
  } else {
    hm[array[i]] += 1;
  }
}

console.log(hm);
