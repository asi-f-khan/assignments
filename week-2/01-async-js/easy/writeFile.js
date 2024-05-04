var fs = require("fs");

fs.writeFile("a.txt", "Hello, Asif", (err) => {
  if (err) {
    console.error("Error writing to file:", err);
    return;
  }
  console.log("File written successfully. You can check file also.");
});
