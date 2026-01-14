function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// Export all functions
module.exports = {
    capitalize,
    reverseString,
    countVowels
};
