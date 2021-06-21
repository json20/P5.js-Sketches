let circleX;
let circleY;


function setup() {
    createCanvas(500, 500);
    background(0);
}


function draw() {
    circleX = random(windowWidth);
    circleY = random(windowHeight);
    let red = random(255);
    let green = random(255);
    let blue = random(255);
    let circleWidth = random(100);
    stroke(100);
    fill(red, green, blue, 100);
    circle(circleX, circleY, 40);

    circleX += 5;
    circleY += 5;
}


function mousePressed() {
    circleX = 0;
    circleY = 0;
}
