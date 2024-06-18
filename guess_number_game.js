document.getElementById("guess").onclick = function() {
    var randomNo = Math.floor(Math.random() * 10) + 1;
    var userInput = parseInt(document.getElementById("inputbox").value);

    if (userInput === randomNo) {
        alert("Your guess is correct!");
    } else {
        alert("Nope!! Try again. I was thinking of number " + randomNo);
    }
};

