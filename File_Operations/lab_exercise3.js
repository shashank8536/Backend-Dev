const fs = require("fs");
const path = require("path");

const [,, dir1, dir2] = process.argv;
if (!dir1 || !dir2) {
  console.log("Usage: node syncTool.js <dir1> <dir2>");
  process.exit(1);
}

function syncDirectories(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });

  const files = fs.readdirSync(src);

  files.forEach(file => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);

    const stat = fs.statSync(srcPath);

    if (stat.isDirectory()) {
      syncDirectories(srcPath, destPath);
    } else {
      if (!fs.existsSync(destPath) ||
          fs.statSync(destPath).mtimeMs < stat.mtimeMs) {
        fs.copyFileSync(srcPath, destPath);
        console.log("Synced:", destPath);
      }
    }
  });
}

try {
  syncDirectories(dir1, dir2);
  console.log("Sync completed");
} catch (err) {
  console.error("Error:", err.message);
}