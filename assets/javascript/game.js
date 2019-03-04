var userInput;

var game = {

    words: ["Khaleesi", "Maester", "House of Stark", "Mother of Dragons", "Winter is Coming", "Brotherhood Without Banners",
        "NIGHTS WATCH", "Kings Landing", "The Iron Throne", "Warden of the North", "Khal Drogo", "The Red Wedding"],
    letters: "",
    lives: 12,
    reset: false,
    random: "",
    ranWord: "#",
    underscore: "",
    wins: 0,
    loses: 0,

    start: function () {
        this.underscore = "";
        this.lives = 12;
        this.letters = "";
        document.getElementById("wrong").innerHTML = this.letters;
        document.getElementById("userGuess").innerHTML = "";
        document.getElementById("chances").innerHTML = this.lives;
        // document.getElementById('sound1').play();


        this.random = this.words[Math.floor(Math.random() * this.words.length)];

        this.ranWord = this.random.toUpperCase();

        for (var i = 0; i < this.ranWord.length; i++) {

            if (this.ranWord[i] === " ") {
                this.underscore = this.underscore + " ";
            }
            else {
                this.underscore = this.underscore + "_";
            }
        };

        document.getElementById("wordfield").innerHTML = this.underscore;

        console.log(this.ranWord);
        console.log(this.underscore);
        console.log(this.ranWord.length);
        console.log(this.underscore.length);

        if (this.random === "Khaleesi") {
            document.getElementById('picture').setAttribute("src", "./assets/images/khaleesi.jpeg");
        }
        else if (this.random === "Maester") {
            document.getElementById('picture').setAttribute("src", "./assets/images/maester.jpg");
        }
        else if (this.random === "House of Stark") {
            document.getElementById('picture').setAttribute("src", "./assets/images/hos.jpg");
        }
        else if (this.random === "Mother of Dragons") {
            document.getElementById('picture').setAttribute("src", "./assets/images/mod.jpg");
        }
        else if (this.random === "Winter is Coming") {
            document.getElementById('picture').setAttribute("src", "./assets/images/wic.png");
        }
        else if (this.random === "Brotherhood Without Banners") {
            document.getElementById('picture').setAttribute("src", "./assets/images/bwb.jpg");
        }
        else if (this.random === "NIGHTS WATCH") {
            document.getElementById('picture').setAttribute("src", "./assets/images/nw.png");
        }
        else if (this.random === "Kings Landing") {
            document.getElementById('picture').setAttribute("src", "./assets/images/kl.jpg");
        }
        else if (this.random === "The Iron Throne") {
            document.getElementById('picture').setAttribute("src", "./assets/images/tith.jpg");
        }
        else if (this.random === "Warden of the North") {
            document.getElementById('picture').setAttribute("src", "./assets/images/wotn.jpg");
        }
        else if (this.random === "Khal Drogo") {
            document.getElementById('picture').setAttribute("src", "./assets/images/kd.jpg");
        }
        else if (this.random === "The Red Wedding") {
            document.getElementById('picture').setAttribute("src", "./assets/images/trw.jpg");
        }

    },

    logic: function () {

        var check = this.underscore;

        for (var j = 0; j < this.ranWord.length; j++) {

            if (this.ranWord[j].toLowerCase() === userInput.toLowerCase()) {

                this.underscore = game.replaceAt(this.underscore, j, userInput.toUpperCase());

                console.log(this.underscore);

            }
        }

        if (check === this.underscore) {
            if (this.letters.charAt(0) === userInput.toUpperCase() || this.letters.charAt(1) === userInput.toUpperCase() ||
                this.letters.charAt(2) === userInput.toUpperCase() || this.letters.charAt(3) === userInput.toUpperCase() ||
                this.letters.charAt(4) === userInput.toUpperCase() || this.letters.charAt(5) === userInput.toUpperCase() ||
                this.letters.charAt(6) === userInput.toUpperCase() || this.letters.charAt(7) === userInput.toUpperCase() ||
                this.letters.charAt(8) === userInput.toUpperCase() || this.letters.charAt(9) === userInput.toUpperCase() ||
                this.letters.charAt(10) === userInput.toUpperCase() || this.letters.charAt(11) === userInput.toUpperCase()) {

            }
            else {
                this.letters += userInput.toUpperCase();
                document.getElementById("wrong").innerHTML = this.letters;
                --this.lives;
                document.getElementById("chances").innerHTML = this.lives;
            }
        }

        document.getElementById("wordfield").innerHTML = this.underscore;

        if (this.underscore === this.ranWord) {
            document.getElementById('sound1').pause();
            setTimeout(function () {
                game.win()
            }, 500)
        }

        if (this.lives === 0) {
            document.getElementById('sound1').pause();
            setTimeout(function () {
                game.lose()
            }, 500)
        }
    },

    replaceAt: function (string, index, replace) {
        return string.substring(0, index) + replace + string.substring(index + 1);
    },

    win: function () {
        document.getElementById('winsound').play();
        alert("You Win!");
        ++this.wins
        document.getElementById("wins").innerHTML = this.wins;
        game.start();
    },

    lose: function () {
        document.getElementById('losesound').play();
        alert("You Lose!");
        ++this.loses;
        document.getElementById("loses").innerHTML = this.loses;
        game.start();
    },
};

document.onkeyup = function (event) {

    userInput = event.key;

    game.logic();

    console.log(userInput);
    document.getElementById("userGuess").innerHTML = userInput.toUpperCase();
}