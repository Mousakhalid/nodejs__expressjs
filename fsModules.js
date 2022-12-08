// Sync file system
const { readFileSync, writeFileSync } = require("fs");
console.log("Start In");
const first = readFileSync("./content/text.txt", "utf8");
const second = readFileSync("./content/test.txt", "utf8");
// console.log(first, second);
writeFileSync(
  "./content/readFile.txt",
  `Here is the result: ${first} & ${second}`,
  { flag: "a" }
);
console.log("Done WIth This Task");
console.log("Starting the next task");
