const path = require("path");

let ext = path.extname(
  "C:Users\\raghav\\Desktop\\Udemy_Course\\Node Module System\\file.txt"
);
let basename = path.basename(
  "C:Users\\raghav\\Desktop\\Udemy_Course\\Node Module System\\file.txt"
);
console.log(ext);
console.log(basename);
console.log(__filename);
console.log(__dirname);
