function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data"),1000);
  })
}

async function logData() {
  const result = await fetchData();
  console.log(result);
}

logData();
console.log("End");