const path = require("path");
console.log(path.sep);
console.log(path.join("/content", "subfolder", "text.txt"));
const filePath = path.join("/content", "subfolder", "text.txt");
const baseFile = path.basename(filePath);
console.log(baseFile);
const absolute = path.resolve(__dirname,"/content", "subfolder", "text.txt");
console.log(absolute);
