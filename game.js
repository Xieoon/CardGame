const allCards = [
    "6_dimonds",
    "7_dimonds",
    "8_dimonds",
    "9_dimonds",
    "10_dimonds",
    "jack_dimonds",
    "queen_dimonds",
    "king_dimonds",
    "ace_dimonds",
    "6_hearts",
    "7_hearts",
    "8_hearts",
    "9_hearts",
    "10_hearts",
    "jack_hearts",
    "queen_hearts",
    "king_hearts",
    "ace_hearts",
    "6_spades",
    "7_spades",
    "8_spades",
    "9_spades",
    "10_spades",
    "jack_spades",
    "queen_spades",
    "king_spades",
    "ace_spades",
    "6_clubs",
    "7_clubs",
    "8_clubs",
    "9_clubs",
    "10_clubs",
    "jack_clubs",
    "queen_clubs",
    "king_clubs",
    "ace_clubs",
];
const playingField = document.querySelector(".playing_field");

for (let i = 0; i < localStorage.difficulty; i++) {
    playingField.appendChild(templateEngine(cardTemplate()));
}

cards = Array.from(document.querySelectorAll(".card"));

const restartButton = document.querySelector(".button");

restartButton.onclick = () => {
    
    allStatusInfo = {
        clickCounter: 0,
        firstCard: "",
        secondCard: "",
        desck: "",
        doubles:"",
    };

    allStatusInfo.desck = new Table(
        createRandomCardsObj(localStorage.difficulty)
    );

    allStatusInfo.desck.restart();

    m1 = m2 = s1 = s2 = 0;
    timer.textContent = `${m1}${m2}:${s1}${s2}`;
};

allStatusInfo.desck = new Table(createRandomCardsObj(localStorage.difficulty));
console.log(allStatusInfo);

allStatusInfo.desck.start();
