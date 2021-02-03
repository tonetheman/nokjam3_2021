

class Scene extends Phaser.Scene {
    constructor() {
        super("game")
    }
    create() {
        console.log("create");
        let g = this.add.graphics();
        g.fillStyle(0x43523d);
        g.fillRect(0,0,32,32);
    }
}

let config = {
    type: Phaser.AUTO,
    width : 84,
    height : 48,
    pixelArt : true,
    zoom : 4,
    backgroundColor : "#c7f0d8",
    scene : [Scene]
}

function mainline() {
    console.log("mainline")
    let game = new Phaser.Game(config);
}

window.onload = mainline;