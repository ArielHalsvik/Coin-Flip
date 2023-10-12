// Random number generator
function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// "Click me" button function
function clickMe() {
    let results = randomNumber(1, 2);
    console.log(results);
    // Heads
    if (results === 1) {
        document.getElementById("coin").innerHTML = "<img src='./img/heads.jpg'></img>";
    // Tails
    } else {
        document.getElementById("coin").innerHTML = "<img src='./img/tails.jpg'></img>";
    };
};

// "Reset" button function
function reset() {
    document.getElementById("coin").innerHTML = "";
};