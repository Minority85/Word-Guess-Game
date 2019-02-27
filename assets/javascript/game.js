var game = {

    words: ["Khaleesi", "Maester", "House of Stark", "Kahl Drogo", "White Walkers", "Mother of Dragons", "The Red Wedding"],
    letters: "",
    lives: 12,
    reset: false,
    random: "",
    ranWord: "",
    underscore: [],

    start: function() {
        this.underscore = [];

        this.random = this.words[Math.floor(Math.random() * this.words.length)];
        
        this.ranWord = this.random;

        for(var i = 0; i < this.ranWord.length; i++) {

            if (this.ranWord[i] === " ") {
                this.underscore[i] = " ";
            }
            else {
                this.underscore[i] = "_";   
            } 
        }
        return underscore;

        document.getElementById("wordfield").textContent = this.underscore;
        
        console.log(this.ranWord);
        console.log(this.underscore);

        
    }
}

console.log(game.underscore);

document.onkeyup = function () {

    var userInput = event.key;

    // var random = game.words[Math.floor(Math.random() * game.words.length)];

    // if (userInput === "q"){
    //     game.test(random);
    // }
}