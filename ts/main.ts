class VideoGame{
    title:string;
    price:number;
    rating:string;
    isDigitalOnly:boolean;
}


window.onload = function(){
    let addBtn = <HTMLElement>document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
}

function addVideoGame(){

    if(isAllDataValid()){
        let game = getVideoGame();
        displayGame(game);
    }
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

    //console.log(game); didnt work
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

}

function isAllDataValid(){
    return true;
}

