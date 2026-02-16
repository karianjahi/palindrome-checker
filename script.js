const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const palindromChecker = (possiblePalindrome) => {
    let splits = [];
    for (let character of possiblePalindrome) if (/[a-zA-Z0-9]/.test(character)) splits.push(character);
    const alphaNum = splits.join("").toLowerCase();
    const alphaNumReverse = (alphaNum.split("").reverse().join(""));
    if (alphaNum === alphaNumReverse)
        return `${possiblePalindrome} is a palindrome`;
    return `${possiblePalindrome} is not a palindrome`;
};



// tests
// console.log(palindromChecker("Sunilam al inus"));
// console.log(palindromChecker("Japheth Wahome can't even blame anyone for what has happened to him"));

const handleCheck = () => {
    if (textInput.value.length === 0) {
        alert("Please input a value");
        return ;
    }
    result.textContent = palindromChecker(textInput.value);
};


// Click
checkBtn.addEventListener("click", handleCheck);

// Enter key
textInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") handleCheck();
  
});