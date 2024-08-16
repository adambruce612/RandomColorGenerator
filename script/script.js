const displayHex = document.getElementById("display-hex");
const copyBtn = document.getElementById("copy-btn");
const body = document.querySelector("body");

// Function to get a random number
function randomNum(num) {
    return Math.floor(Math.random() * num);
}

// Returns a 0 or 1 to decide if to use number or letter array
function numOrLetter() {
    return randomNum(2);
}

// Returns a random number from the numbers array
function getNumber() {
    return randomNum(10);
}

// Returns a random letter from the letters array
function getLetter() {
    return randomNum(6);
}

// Creates random hex code number and calls setBackground function and displayHexCode function
function newColor()
{
    let backgroundColor = "#";
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const letters = ['a', 'b', 'c', 'd', 'e', 'f'];

    for(let i = 0; i <= 5; i++)
    {
        if (numOrLetter() == 0)
        {
            backgroundColor += numbers[getNumber()];
        } 
        else 
        {
            backgroundColor += letters[getLetter()];
        }
    }
    setBackgroundColor(backgroundColor);
    displayHexCode(backgroundColor.toUpperCase());
}

function setBackgroundColor(color)
{
    console.log(color);
    body.style.backgroundColor = color;
}

function displayHexCode(color)
{
    displayHex.innerText = `Hex Code: ${color}`;
}

function copyHexCode() {
    navigator.clipboard.writeText(displayHex.value);
}

document.addEventListener('click', newColor, false);

copyBtn.addEventListener('click', function(Event) {
    Event.stopPropagation();
});