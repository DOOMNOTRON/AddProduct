var VideoGame = (function () {
    function VideoGame() {
    }
    return VideoGame;
}());
window.onload = function () {
    var addBtn = document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
};
function addVideoGame() {
    resetErrorMessages();
    if (isAllDataValid()) {
        var game = getVideoGame();
        displayGame(game);
    }
}
function getById(id) {
    return document.getElementById(id);
}
function getVideoGame() {
    var game = new VideoGame();
    var inpuTitle = getById("title");
    game.title = inpuTitle.value;
    var priceInput = getById("price");
    game.price = parseFloat(priceInput.value);
    var ratingInput = getById("rating");
    game.rating = ratingInput.value;
    var digitalOnly = getById("online");
    game.isDigitalOnly = digitalOnly.checked;
    return game;
}
function displayGame(myGame) {
    var dispalyDiv = getById("display");
    var gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;
    var gameInfo = document.createElement("p");
    var notDigitalDisplay = " not";
    if (myGame.isDigitalOnly) {
        notDigitalDisplay = "";
    }
    gameInfo.innerText = "".concat(myGame.title, " has a rating of ").concat(myGame.rating, ", and it costs $").concat(myGame.price.toFixed(2), ". It is").concat(notDigitalDisplay, " digital only.");
    dispalyDiv.appendChild(gameHeading);
    dispalyDiv.appendChild(gameInfo);
}
function isAllDataValid() {
    resetErrorMessages();
    if (isTextPresent("title", "A title is required.")) {
        if (isTextPresent("price", "A price is required.")) {
            if (IsInputANumber("price", "Must be a valid number")) {
                if (isRatingSelected()) {
                    return true;
                }
            }
        }
    }
    else {
        return false;
    }
}
function IsInputANumber(id, errMsg) {
    var txtBox = getById(id);
    var txtBoxValue = txtBox.value;
    if (isNaN(parseFloat(txtBoxValue)) || parseFloat(txtBoxValue) <= 0) {
        var errSpan = txtBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}
function isTextPresent(id, errMsg) {
    var txtBox = getById(id);
    var txtBoxValue = txtBox.value;
    if (txtBoxValue == "") {
        var errSpan = txtBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}
function isRatingSelected() {
    var ratingInput = getById("rating");
    var errMsg = "Must select a rating";
    if (ratingInput.value == "Please choose a rating.") {
        var errSpan = ratingInput.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}
function selectARating(id, errMsg) {
}
function resetErrorMessages() {
    var allSpans = document.querySelectorAll("form span");
    for (var i = 0; i < allSpans.length; i++) {
        var currSpan = allSpans[i];
        if (currSpan.hasAttribute("data-required")) {
            currSpan.innerText = "*";
        }
        else {
            currSpan.innerText = "";
        }
    }
}
