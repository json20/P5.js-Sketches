let bubbles = [];



function setup() {
    createCanvas(600, 600);
    for (let i = 0; i < 20; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(10, 50);
        let b = new Bubble(x, y, r);
        bubbles.push(b);
    }

}

function draw() {
    background(0);
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
}


function mouseMoved() {
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].clicked(mouseX, mouseY);
    }


}

class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.red = 0;
        this.green = 0;
        this.blue = 0;
    }

    move() {
        this.x = (this.x + random(-1, 1));
        this.y = (this.y + random(-1, 1));
    }

    show() {
        stroke(150, 0,0);
        strokeWeight(4);
        fill(this.red, this.green, this.blue, 125);
        ellipse(this.x, this.y, this.r * 2);
    }

    clicked(x, y) {
        let d = dist(this.x, this.y, x, y);
        if (d < this.r) {
            this.red = random(255);
            this.green = random(255);
            this.blue = random(255);
        }

    }
}