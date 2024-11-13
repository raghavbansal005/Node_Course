const os = require("os");

console.log(os.arch()); // Architecture we have (64 or 32)
console.log(os.platform()); // Platform working with
console.log(os.networkInterfaces()); // Tells about the network detail
console.log(os.cpus()); // Tells us about everything about the cpu
console.log(os.totalmem()); // Tells us about the memory in the system
console.log(os.freemem()); // Tells us how much memory is free in the system
