// Child process is a node module used to create sub proccess within a script you can perform different tasks with your script by jjust using some methods

const cp = require("child_process");

cp.execSync("calc"); // To open a calculator
cp.execSync("start chrome https://www.youtube.com/"); //To start chrome

console.log("Output:" + cp.execSync("node test.js"));
