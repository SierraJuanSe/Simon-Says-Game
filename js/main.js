const btnGreen = document.getElementById('green');
const btnRed = document.getElementById('red');
const btnYellow = document.getElementById('yellow');
const btnBlue = document.getElementById('blue');
const btnStart = document.getElementById('btnStart');

const COLORS_INTERVAL = 1000;
const LIGHT_INTERVAL = 500;
class Game {
    constructor() {
        this.init();
        this.genSequence();
        this.nextLevel();
    }

    init() {
        btnStart.classList.add('hide');
        this.level = 1;
        this.colors = {
            green: btnGreen,
            red: btnRed,
            yellow: btnYellow,
            blue: btnBlue
        };
    }

    genSequence() {
        this.sequence = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4));
    }

    nextLevel() {
        this.lightSequence();
    }

    lightSequence() {
        for (let i = 0; i < this.level; i++) {
            const color = this.numToColor(this.sequence[i]);
            setTimeout(() => this.lightColor(color), COLORS_INTERVAL * i);
        }
    }

    lightColor(color){
        this.colors[color].classList.add('light');
        setTimeout(() => this.darkColor(color), LIGHT_INTERVAL);
    }

    darkColor(color){
        this.colors[color].classList.remove('light');
    }

    numToColor(num) {
        switch (num) {
            case 0:
                return 'green'
                break;
            case 1:
                return 'red'
                break;
            case 2:
                return 'yellow'
                break;
            case 3:
                return 'blue'
                break;
            default:
                break;
        }
    }
}

const startNewGame = function () {
    let game = new Game();
}