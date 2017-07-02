var fs = require("fs");
var input = process.argv[2];

fs.readFile(input, "utf8", function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: \n" + data.toString());
});