const fs = require("fs");

const fileToRead = fs.readFileSync(process.argv[2]).toString().split("\n");

console.log(fileToRead.length - 1);

// alternative

fs.readFileSync(process.argv[2], "utf-8").split("/n").length - 1;
