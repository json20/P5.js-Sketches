let circleX;
let circleY;


function setup() {
    createCanvas(500, 500);
}

function draw() {
    let redX = map(mouseX, 0, 500, 0, 255);
    let blueX = map(mouseY, 0, 500, 0, 255);
    background(redX, blueX, 100);
    let red = random(255);
    let green = random(255);
    let blue = random(255);
    let circleWidth = random(100);
    noStroke();

    fill(150, 40, blue, 100);
    circle(mouseX, mouseY, 40);
    circleX += 5;
    circleY += 5;
}
