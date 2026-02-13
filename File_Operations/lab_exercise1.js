const fs = require("fs");
const path = require("path");

const [, , command, ...args] = process.argv;

if (!command) {
  console.log("Usage: node fileManager.js <read|write|copy|delete|list> <args>");
  process.exit(1);
}

switch (command) {
  case "read": {
    const file = args[0];
    fs.readFile(file, "utf8", (err, data) => {
      if (err) return console.error(err.message);
      console.log(data);
    });
    break;
  }

  case "write": {
    const [file, ...content] = args;
    fs.writeFile(file, content.join(" "), err => {
      if (err) return console.error(err.message);
      console.log("File written successfully");
    });
    break;
  }

  case "copy": {
    const [src, dest] = args;
    fs.copyFile(src, dest, err => {
      if (err) return console.error(err.message);
      console.log("File copied successfully");
    });
    break;
  }

  case "delete": {
    const file = args[0];
    fs.unlink(file, err => {
      if (err) return console.error(err.message);
      console.log("File deleted successfully");
    });
    break;
  }

  case "list": {
    const dir = args[0] || ".";
    fs.readdir(dir, (err, files) => {
      if (err) return console.error(err.message);
      files.forEach(f => console.log(f));
    });
    break;
  }

  default:
    console.log("Invalid command");
}