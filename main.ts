declare const kontra: any;

const { Sprite, init, GameLoop, keyPressed, initKeys } = kontra;

init("game");
initKeys();

const birdImg = new Image();
birdImg.src = '../assets/bird.png'

let velocity: number = 0;

const bird = Sprite({
  x: 50,
  y: 50,
  scaleX: 50,
  scaleY: 50,
  image: birdImg
});

const loop = GameLoop ({
    update() {
        if (keyPressed('space')) {
            velocity = -11
        }
        else {
            velocity++;
        }
        bird.y += velocity;
        bird.update();
    },
    render() {
        bird.render();
    }
});

loop.start();
