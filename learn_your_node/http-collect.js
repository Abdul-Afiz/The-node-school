const http = require("http");
const bl = require("bl");
const url = process.argv[2];

http.get(url, (res) => {
  res.pipe(
    bl((err, data) => {
      if (err) throw err;
      const number = data.toString().length;
      const text = data.toString();
      console.log(number + "\n" + text);
    })
  );
});

// Alternative solution

// http.get(process.argv[2], function (response) {
//   response.pipe(
//     bl(function (err, data) {
//       if (err) {
//         return console.error(err);
//       }
//       data = data.toString();
//       console.log(data.length);
//       console.log(data);
//     })
//   );
// });
