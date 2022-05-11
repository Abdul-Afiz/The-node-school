const http = require("http");
const url = process.argv[2];

http
  .get(url, (response) => {
    response.setEncoding("utf-8").on("data", (data) => {
      if (data) {
        console.log(data);
      }
    });
  })
  .on("error", console.log);

// alternative 2

http
  .get(url, function (response) {
    response.setEncoding("utf8");
    response.on("data", console.log);
    response.on("error", console.error);
  })
  .on("error", console.error);
