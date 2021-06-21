let button;
function setup() {
    createCanvas(500, 500);
    background(0);
    button = createButton('click me');
    button.position(250, 250);
    button.mousePressed(changeBG);
}

function changeBG() {
    let red = random(255);
    let green = random(255);
    let blue = random(255);
    background(red, green, blue);
}