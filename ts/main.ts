class VideoGame{
    title:string;
    price:number;
    rating:string;
    isDigitalOnly:boolean;
}


window.onload = function(){
    let addBtn = <HTMLElement>document.querySelector("input[type=button]");//"input[type=button]"
    addBtn.onclick = addVideoGame;
    //<input type="button" value="Add new video game"> send back to html
}

function addVideoGame(){

    resetErrorMessages();
    
    isTextPresent("title", "A title is required.");
    isTextPresent("price", "A price is required.");

    /*if(isAllDataValid()){
        let game = getVideoGame();
        displayGame(game);
    }*/
}

function getById(id:string){
    return document.getElementById(id);
}

/**
 * Gets all game date from the form
 * and returns it in a videoGame object
 */
function getVideoGame():VideoGame{

    // populate with data from the form
    let game = new VideoGame();
    let inpuTitle = <HTMLInputElement>getById("title");
    game.title = inpuTitle.value;

    let priceInput = <HTMLInputElement>getById("price");
    game.price = parseFloat(priceInput.value);

    let ratingInput = <HTMLSelectElement>getById("rating");
    game.rating = ratingInput.value;

    let digitalOnly = <HTMLInputElement>getById("online");
    
    game.isDigitalOnly = digitalOnly.checked;

    console.log(game);
    return game;

    /*if(digitalOnly.checked){
        game.isDigitalOnly = true;
    }
    else{
        game.isDigitalOnly = false;
    }
    */
}

function displayGame(myGame:VideoGame):void{
    let dispalyDiv = getById("display");

    // create <h2> with game tile
    let gameHeading = document.createElement("h2"); 
    gameHeading.innerText = myGame.title;

    //create <p> with game infromation
    let gameInfo = document.createElement("p");

    let notDigitalDisplay = " not";
    if(myGame.isDigitalOnly){
        notDigitalDisplay = "";
    }
    gameInfo.innerText = `${myGame.title} has a rating of ${myGame.rating}, and it costs $${myGame.price.toFixed(2)}. It is${notDigitalDisplay} digital only.`
    
    
    /*myGame.title + " has a rating of " + myGame.rating + ", and it costs "
        + myGame.price + "." + " It is" + notDigitalDisplay + " digital only."
    */
    //add <h2> in the <div id=display">
    dispalyDiv.appendChild(gameHeading);

    // add <p> of game info
    dispalyDiv.appendChild(gameInfo);

}


/*function isAllDataValid(){
    resetErrorMessages();
    
    isTextPresent("title", "A title is required.");
    isTextPresent("price", "A price is required.");

    return true;
}*/

function isTextPresent(id:string, errMsg:string):boolean {
    let txtBox = <HTMLInputElement>getById(id);

    let txtBoxValue = txtBox.value;
    if (txtBoxValue == "") {
        let errSpan = 
        <HTMLSpanElement>txtBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }

    return true;
}

function resetErrorMessages():void{
    let allSpans = document.querySelectorAll("form span");

    for(let i = 0; i < allSpans.length; i++){
        let currSpan = <HTMLElement>allSpans[i];

        if(currSpan.hasAttribute("data-required")){
            currSpan.innerText =  "*";
        }
        else{
            currSpan.innerText =  "";
        }
    }
}

/*
function main():void{
    resetErrorMessages();
    isTextPresent("first-name", "First name is required.");
    isTextPresent("last-name", "Last name is required.");

    
    checkValidDate();
}


function isTextPresent(id:string, errMsg:string):boolean {
    let txtBox = <HTMLInputElement>document.getElementById(id);

    let txtBoxValue = txtBox.value;
    if (txtBoxValue == "") {
        let errSpan = 
        <HTMLSpanElement>txtBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }

    return true;
}
*/