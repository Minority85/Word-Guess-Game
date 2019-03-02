var userInput;

var game = {

    words: ["Khaleesi", "Maester", "House of Stark", "Mother of Dragons", "Winter is Coming", "Brotherhood Without Banners",
        "NIGHTS WATCH", "Kings Landing", "The Iron Throne", "Warden of the North", "Khal Drogo", "The Red Wedding"],
    letters: "",
    lives: 12,
    reset: false,
    random: "",
    ranWord: "#",
    underscore: [],

    start: function () {
        this.underscore = [];
        this.lives = 12;
        this.letters = "";

        this.random = this.words[Math.floor(Math.random() * this.words.length)];

        this.ranWord = this.random;

        for (var i = 0; i < this.ranWord.length; i++) {

            if (this.ranWord[i] === " ") {
                this.underscore = this.underscore + " ";
            }
            else {
                this.underscore = this.underscore + "_";
            }
        }

        document.getElementById("wordfield").innerHTML = this.underscore;

        console.log(this.ranWord);
        console.log(this.underscore);
        console.log(this.ranWord.length);
        console.log(this.underscore.length);
    },

    logic: function () {

        for (var j = 0; j < this.ranWord.length; j++) {


            if (this.ranWord[j].toLowerCase() === userInput.toLowerCase()) {

                this.underscore = game.replaceAt(this.underscore, j, userInput.toUpperCase());

                console.log(this.underscore);

            }
        }

        if (this.ranWord.toLowerCase() === userInput.toLowerCase()) {
            ;
        }
        else {
            this.letters += userInput.toUpperCase();
        }

        document.getElementById("wrong").innerHTML = this.letters;
        document.getElementById("wordfield").innerHTML = this.underscore;

        if (this.underscore === this.ranWord) {
            setTimeout(function () {
                game.win()
            }, 1000)
        }
    },

    replaceAt: function (string, index, replace) {
        return string.substring(0, index) + replace + string.substring(index + 1);
    },

    win: function () {
        alert("You Win!");
    },
};

document.onkeyup = function (event) {

    userInput = event.key;

    game.logic();

    console.log(userInput);
    document.getElementById("userGuess").innerHTML = userInput;
}