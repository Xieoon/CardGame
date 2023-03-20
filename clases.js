class Table {
    constructor(infoCards) {
        this.cards = infoCards;
        this.timerStop = "";
    }
    doubleFinder() {
        for (let i = 0; i < this.cards.length; i++) {
            if (
                this.cards[i].openStatus === true &&
                this.cards[i].blocked === false
            ) {
                if (!(allStatusInfo.firstCard === "")) {
                    allStatusInfo.secondCard = this.cards[i];
                } else {
                    allStatusInfo.firstCard = this.cards[i];
                }
            }
        }
        if (
            !(allStatusInfo.firstCard === "") &&
            !(allStatusInfo.secondCard === "")
        ) {
            if (
                allStatusInfo.firstCard.face === allStatusInfo.secondCard.face
            ) {
                allStatusInfo.firstCard.blocked =
                    allStatusInfo.secondCard.blocked = true;
                allStatusInfo.firstCard = allStatusInfo.secondCard = "";
                console.log("Ура");
                allStatusInfo.doubles+=1;
                if(allStatusInfo.doubles === localStorage.difficulty/2){
                    window.location.href = "win.html"
                }
            } else {
                localStorage.spendTime = `${m1}${m2}:${s1}${s2}`
                window.location.href = "lose.html"
            }
        }
    }

    restart() {
        clearTimeout(localStorage.timerStop);
        this.start()
    }

    start() {
        this.showCards();
        localStorage.timerStop = setTimeout(() => {
            this.closeCards();
        }, 5000);
    }

    showCards() {
        this.cards.forEach((elem) => elem.flipFace());
    }
    closeCards() {
        this.cards.forEach((elem) => elem.flipShirt());
    }
}

class Card {
    constructor(domPositionNumber, cardFace) {
        this.blocked = false;
        this.domPos = cards[domPositionNumber];
        this.shirt = "CardIcons/shirt.svg";
        this.face = `Cardicons/${allCards[cardFace]}.svg`;
        this.openStatus = true;

        this.onClick = this.onClick.bind(this);
        this.domPos.addEventListener("click", this.onClick);
    }

    onClick() {
        allStatusInfo.clickCounter++;
        if (this.openStatus === false) {
            if (allStatusInfo.clickCounter === 2) {
                this.flipFace();
                setTimeout(() => {
                    allStatusInfo.desck.doubleFinder();
                    allStatusInfo.clickCounter = 0;
                }, 300);
            } else {
                this.flipFace();
            }
        }
    }

    flipFace() {
        this.domPos.src = this.face;
        this.openStatus = true;
    }
    flipShirt() {
        if (this.blocked === false) {
            this.domPos.src = this.shirt;
            this.openStatus = false;
        }
    }
}
