var cards;
var remainingCards;
//JavaScript implementation of the Fisher-Yates shuffle
//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    //Number of cards at the beginning = 52.
    remainingCards = cards.length;
    console.log(cards);
}
//Picking the last item of the shuffled array and then removing it from the array
function pickCard(){
  var picked_card;
  var picked_card_image_location;
  if (remainingCards > 0){
    picked_card = cards[remainingCards - 1];
    cards.pop();
    remainingCards--;
    //Stores the location of the picked card's image and then sets that image as the one showing.
    picked_card_image_location = "images/" + picked_card + ".png";
    document.querySelector(".cardSlot img").setAttribute("src", picked_card_image_location);
  }
  else{
    alert("No cards left! Please start a New Game!");
  }

  //Disables Shuffle Cards button and enables New Game button after the first picked card
  if (remainingCards === 51){
    document.querySelector(".btn2").classList.remove("active");
    document.querySelector(".btn1").classList.add("active");
  }
}
function startNewGame(){
  //Sets the basic card back showing when starting a new game
  document.querySelector(".cardSlot img").setAttribute("src", "images/back.png");
  //Enables clicking the card
  document.querySelector(".cardSlot").classList.add("active");
  //Enables Shuffle Cards button
  document.querySelector(".btn2").classList.add("active");
  //Enables clicking suit buttons
  document.querySelector(".cardSuits").classList.add("active");
  //Disables New Game button
  document.querySelector(".btn1").classList.remove("active");
  //Resets the cards array back to 52 cards
  cards = ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10", "c11", "c12", "c13", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "d10", "d11", "d12", "d13", "h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8", "h9", "h10", "h11", "h12", "h13", "s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11", "s12", "s13"];
  //Shuffles the reseted cards
  shuffleArray(cards);
}
