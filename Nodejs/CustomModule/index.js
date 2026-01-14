const stringUtils = require("./Stringutils");

const text = "nodejs is powerful";

console.log("Original:", text);
console.log("Capitalized:", stringUtils.capitalize(text));
console.log("Reversed:", stringUtils.reverseString(text));
console.log("Vowel Count:", stringUtils.countVowels(text));
