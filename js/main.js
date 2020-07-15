const btnGreen = document.getElementById('green');
const btnRed = document.getElementById('red');
const btnYellow = document.getElementById('yellow');
const btnBlue = document.getElementById('blue');
const btnStart = document.getElementById('btnStart');
const lblTurnInfo = document.getElementById('turnInfo');

const COLORS_INTERVAL = 1000;
const LIGHT_INTERVAL = 500;
const LAST_LEVEL = 10;
class Game {
    constructor() {
        this.init();
        this.genSequence();
        setTimeout(() => this.nextLevel(), 1000)
    }

    init() {
        this.chooseColor = this.chooseColor.bind(this);
        this.nextLevel = this.nextLevel.bind(this);
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
        this.sequence = new Array(LAST_LEVEL).fill(0).map(n => Math.floor(Math.random() * 4));
    }

    nextLevel() {
        this.subLevel = 0;
        lblTurnInfo.innerHTML = 'Watch'
        this.lightSequence().then(() => this.clickEvents());
    }

    async lightSequence() {
        for (let i = 0; i < this.level; i++) {
            const color = this.numToColor(this.sequence[i]);
            setTimeout(() => this.lightColor(color), COLORS_INTERVAL * i);
        }
        console.log((COLORS_INTERVAL + LIGHT_INTERVAL)* this.level);
        return await  new Promise ((resolve, reject)=> setTimeout(resolve, (COLORS_INTERVAL)* this.level))
    }

    lightColor(color){
        this.colors[color].classList.add('light');
        setTimeout(() => this.darkColor(color), LIGHT_INTERVAL);
    }

    darkColor(color){
        this.colors[color].classList.remove('light');
    }

    clickEvents(){
        this.colors.green.addEventListener('click', this.chooseColor);
        this.colors.red.addEventListener('click', this.chooseColor);
        this.colors.yellow.addEventListener('click', this.chooseColor);
        this.colors.blue.addEventListener('click', this.chooseColor);

        this.colors.green.classList.add('usr');
        this.colors.red.classList.add('usr');
        this.colors.yellow.classList.add('usr');
        this.colors.blue.classList.add('usr');
        lblTurnInfo.innerHTML = 'Play'
    }

    removeClickEvents(){
        this.colors.green.removeEventListener('click', this.chooseColor);
        this.colors.red.removeEventListener('click', this.chooseColor);
        this.colors.yellow.removeEventListener('click', this.chooseColor);
        this.colors.blue.removeEventListener('click', this.chooseColor);

        this.colors.green.classList.remove('usr');
        this.colors.red.classList.remove('usr');
        this.colors.yellow.classList.remove('usr');
        this.colors.blue.classList.remove('usr');
    }

    chooseColor(ev){
        const color = ev.target.id;
        const num = this.colorToNum(color);
        this.lightColor(color);
        if(num === this.sequence[this.subLevel]){
            this.subLevel++;
            if(this.subLevel === this.level){
                this.level++;
                this.removeClickEvents();

                if(this.level === (LAST_LEVEL +1)){
                    console.log('ganaste');
                }else{
                    setTimeout(this.nextLevel, 1500);
                }
            }

        }else{
            console.log('la cagaste');
        }
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

    colorToNum(color) {
        switch (color) {
            case 'green':
                return 0
                break;
            case 'red':
                return 1
                break;
            case 'yellow':
                return 2
                break;
            case 'blue':
                return 3
                break;
            default:
                break;
        }
    }
}

const startNewGame = function () {
    let game = new Game();
}