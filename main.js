

let sprites = [];

class Scene extends Phaser.Scene {
    constructor() {
        super("game")
    }
    
    createTextures() {
        let g = this.add.graphics();
        g.fillStyle(0x43523d);
        g.fillRect(0,0,2,2);
        let tx = g.generateTexture("t",2,2);
        g.destroy();
    }
    
    preload() {
        this.load.image("face", "nokia_face.png");
        this.load.image("plat1", "nokia_platform1.png");
        this.load.image("bg", "nokia_bg.png");
    }

    jump() {

    }

    create() {
        this.createTextures();

        this.bg = this.add.tileSprite(84/2, 48/2,
            48,48, "bg");

            this.add.sprite(20,20,"face");

        //sprites.push(this.add.sprite(16,16,"t"));
        //sprites.push(this.add.sprite(0,32,"t"));
        //sprites.push(this.add.sprite(0,0,"face"))
    }

    update() {
        this.bg.tilePositionX += 1;
        /*
        sprites[0].x += 1;
        if (sprites[0].x>84) {
            sprites[0].x = 0;
        }

        sprites[1].x += 2;
        if (sprites[1].x>84) {
            sprites[1].x = 0;
        }
        */
    }
}

let config = {
    type: Phaser.AUTO,
    width : 84,
    height : 48,
    pixelArt : true,
    zoom : 8,
    backgroundColor : "#c7f0d8",
    scene : [Scene]
}

function mainline() {
    console.log("mainline")
    let game = new Phaser.Game(config);
}

window.onload = mainline;
