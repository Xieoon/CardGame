// import allStatusInfo from "./infoObj.js";

function randomCards(amount) {
    let cardTablePos = [];
    for (let i = 0; i < amount / 2; i++) {
        const randomNumber = Math.round(Math.random() * 35);

        cardTablePos.push(randomNumber, randomNumber);
    }

    return shuffle(cardTablePos);
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function cardTemplate() {
    return {
        tag: "img",
        cls: "card",
        attrs: {
            src: "CardIcons/shirt.svg",
            alt: "card",
        },
    };
}

function createRandomCardsObj(amount) {
    let randomShuffledCards = randomCards(amount);
    let cardsInfo = [];
    for (i = 0; i < amount; i++) {
        cardsInfo.push(new Card(i, randomShuffledCards[i]));
    }
    return cardsInfo;
}
