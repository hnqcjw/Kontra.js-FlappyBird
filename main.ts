declare const kontra: any;

const { Sprite, init, GameLoop } = kontra;

init("game");

let hi: number = 3;

const loop = GameLoop ({
    update() {

    },
    render() {
    }
});

loop.start();
