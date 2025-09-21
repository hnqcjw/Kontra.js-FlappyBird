var Sprite = kontra.Sprite, init = kontra.init, GameLoop = kontra.GameLoop, keyPressed = kontra.keyPressed, initKeys = kontra.initKeys;
init("game");
initKeys();
var birdImg = new Image();
birdImg.src = '../assets/bird.png';
var velocity = 0;
var bird = Sprite({
    x: 50,
    y: 50,
    scaleX: 50,
    scaleY: 50,
    image: birdImg
});
var loop = GameLoop({
    update: function () {
        if (keyPressed('space')) {
            velocity = -11;
        }
        else {
            velocity++;
        }
        bird.y += velocity;
        bird.update();
    },
    render: function () {
        bird.render();
    }
});
loop.start();
