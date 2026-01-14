const fs = require("fs");

fs.readFile("Input.txt", "utf-8", (err, data) => {
    if (err) {
        console.log("Error reading file:", err);
        return;
    }

    const words = data.trim().split(/\s+/);

    const wordCount = words.length;

    const result = `Total number of words: ${wordCount}`;

    fs.writeFile("Output.txt", result, (err) => {
        if (err) {
            console.log("Error writing file:", err);
            return;
        }
        console.log("Counting of words have been done sucessfully");
    });
});
