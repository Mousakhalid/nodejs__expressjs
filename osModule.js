// NodeJs Built-in Module
const os = require("os");
// info about user
const user = os.userInfo();
console.log(user);
// method to return systems uptime in second
console.log(`System up time is : ${os.uptime()} in seconds`);
const currentOs = {
  opertingSys: os.type(),
  releaseDate: os.release(),
  totalMem: os.totalmem(),
  freeMemory: os.freemem(),
};
console.log(currentOs);
console.log(os.EOL);
console.log(os.arch());
console.log(os.constants);
console.log(os.cpus());
console.log(os.devNull);
console.log(os.endianness);
console.log(os.getPriority());
console.log(os.homedir());
console.log(os);
console.clear();
