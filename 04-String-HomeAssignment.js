function lengthOfTheLastWord(s){

    const trimmedString = s.trim();
    console.log(trimmedString);
    //Split the string
    const words = trimmedString.split(' ');
    console.log(words);
    //last word
    console.log(words.length)
    const lastword = words[words.length-1]
    console.log(lastword);
    // length of last word
    return lastword.length;

}
let lengthOflastOne =lengthOfTheLastWord("Hello World")
console.log(lengthOflastOne);

let lengthOflastOne1=lengthOfTheLastWord(" fly me to the moon ")
console.log(lengthOflastOne1);

//
function isAnagrams(str1, str2) {
    try {
        // Validate inputs
        if (typeof str1 !== "string" || typeof str2 !== "string") {
            throw new Error("Both inputs must be strings.");
        }
        // Helper function to normalize and sort characters
        const normalize = (str) =>
            str
                .toLowerCase()                // Ignore case
                .replace(/[^a-z0-9]/g, "")    // Remove non-alphanumeric characters
                .split("")                    // Convert to array
                .sort()                       // Sort characters
                .join("");                    // Join back to string

        return normalize(str1) === normalize(str2);
    } catch (error) {
        console.error("Error:", error.message);
        return false;
    }
}
console.log(isAnagrams('listen', 'silent'));
console.log(isAnagrams('Hello', 'world'));  