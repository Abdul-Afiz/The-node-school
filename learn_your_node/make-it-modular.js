const dirReading = require("./mymodule");

const folder = process.argv[2];
const fileExt = process.argv[3];

const callback = function (err, list) {
  if (err) {
    throw err.message;
  }
  list.forEach(function (file) {
    console.log(file);
  });
};

dirReading(folder, fileExt, callback);
