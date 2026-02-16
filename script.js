const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");

checkBtn.addEventListener("click", ()=> {
    if (textInput.value.length === 0)  alert("Please input a value");
});