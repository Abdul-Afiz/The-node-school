const [a, b, ...num] = process.argv;

const result = num.reduce((a, b) => a + Number(b), 0);

console.log(result);

//their solution

let count = 0;

for (let i = 2; i < process.argv.length; i++) {
  count += Number(process.argv[i]);
}

console.log(count);
