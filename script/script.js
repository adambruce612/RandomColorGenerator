const displayHex = document.getElementById("display-hex");
let body = document.querySelector("body");

// Function to get a random number
function randomNum(num) {
    return Math.floor(Math.random() * num);
}

function numOrLetter() {
    return randomNum(2);
}

function getNumber() {
    return randomNum(10);
}

function getLetter() {
    return randomNum(6);
}

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

document.addEventListener('click', newColor, false);