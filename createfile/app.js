const fs = require("fs");

// READ
function readFile() {
    const data = fs.readFileSync("data.txt", "utf8");
    console.log("READ:", data);
}

// WRITE
function writeFile() {
    fs.writeFileSync("data.txt", "New log data\n");
    console.log("WRITE: Done");
}

// APPEND
function appendFile() {
    fs.appendFileSync("data.txt", "This line is appended log data\n");
    console.log("APPEND: Done");
}

// DELETE
function deleteFile() {
    fs.unlinkSync("data.txt");
    console.log("DELETE: Done");
}

// EXPORT ALL
module.exports = {
    readFile,
    writeFile,
    appendFile,
    deleteFile
};
