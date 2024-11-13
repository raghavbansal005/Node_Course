const fs = require("fs");

// Reading a file
let fileContent = fs.readFileSync("file.txt", "utf-8");
console.log(fileContent);

// Writing a file
// if the file name that is passed does not exist then a new file will be created with its name and the data will be written on that file.
fs.writeFileSync("file3.txt", "This is the data for file3.");
console.log("File is written.");

// Append a file
// appendFileSync method adds new data to a previously written file.
fs.appendFileSync("file.txt", " This is the appended data in file.1.");
console.log("File is appended.");

// Delete a file
fs.unlinkSync("file3.txt");
console.log("File is deleted.");

// Directories
// Create a directory
// fs.mkdirSync("myDirectory");

// Check the content in the directory
let folderPath =
  "C:\\Users\\raghav\\Desktop\\Udemy_Course\\NodeModuleSystem\\myDirectory";
let folderContent = fs.readdirSync(folderPath);
console.log(folderContent);

// Check wheather directory exist or not
let doesExist = fs.existsSync("myDirectory");
console.log(doesExist);

// Delete Directory
fs.rmdirSync("myDirectory");
console.log("Directory is been deleted");
