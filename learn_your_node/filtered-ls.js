const { readdir } = require("fs");
const path = require("path");

const folder = process.argv[2];
const ext = "." + process.argv[3];

readdir(folder, { withFileTypes: ext }, (err, list) => {
  if (err) console.log(err);
  list.forEach((file) => {
    if (file.name.endsWith(ext)) {
      console.log(file.name);
    }
  });
});

// alternative 2

readdir(folder, { withFileTypes: ext }, (err, list) => {
  if (err) console.log(err);
  list.filter((e) => e.name.endsWith(ext)).forEach((e) => console.log(e.name));
});

// alternative 3

readdir(folder, function (err, files) {
  if (err) return console.error(err);
  files.forEach(function (file) {
    if (path.extname(file) === ext) {
      console.log(file);
    }
  });
});
