const btnGreen = document.getElementById('green');
const btnRed = document.getElementById('red');
const btnYellow = document.getElementById('yellow');
const btnBlue = document.getElementById('blue');
const btnStart = document.getElementById('btnStart');

class Game {
    constructor(){
        this.init();
    }

    init(){
        btnStart.classList.add('hide');
    }
}

const startNewGame = function(){
    let game = new Game();
}