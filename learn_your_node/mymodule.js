const fs = require("fs");
const path = require("path");

module.exports = (dir, fileType, callback) => {
  fs.readdir(dir, (error, data) => {
    if (error) {
      return callback(error);
    }
    data = data.filter((file) => {
      return path.extname(file) === "." + fileType;
    });
    callback(null, data);
  });
};
