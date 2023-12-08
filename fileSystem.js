const fs = require("fs");

const createNewFile = fs.writeFile(filename, content, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("File created sucessfully")
});

const readFile = fs.readFile(filename, "utf8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data)
});

module.exports = {createNewFile, readFile}
