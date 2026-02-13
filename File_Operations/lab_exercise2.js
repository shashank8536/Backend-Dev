const fs = require("fs");
const readline = require("readline");

const file = process.argv[2];
if (!file) {
  console.log("Usage: node logAnalyzer.js <logfile>");
  process.exit(1);
}

let total = 0;
let errors = 0;

const stream = fs.createReadStream(file);
const rl = readline.createInterface({ input: stream });

rl.on("line", line => {
  total++;
  if (line.toLowerCase().includes("error")) errors++;
});

rl.on("close", () => {
  console.log("Log Summary:");
  console.log("Total lines:", total);
  console.log("Error lines:", errors);
});