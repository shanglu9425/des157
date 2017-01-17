// p5 file

// canvas aniamtion

//test
var b0 = 0;
var b1 = 0;
var b2 = 0;
var b3 = 0;
var yspeed = 2.8;
var img;
var canvas

function setup() {
    canvas = createCanvas(800, 250);
    // Move the canvas so it's inside our <div id="sketch-holder">.
    canvas.parent('sketch-holder');
    console.log("this is a js comment");
    img = loadImage("town.jpg");
    rectMode(RADIUS);
}

function draw() {
    background(img);
    stroke('white');
    strokeWeight(20);
    fill('red');
    rect(100, b0, 100, 250);
    rect(300, b1, 100, 250);
    rect(500, b2, 100, 250);
    rect(700, b3, 100, 250);

    // Test if the cursor is over the box 
    if (mouseX > 0 && mouseX < 200) { //0

        b0 = b0 - (1 * yspeed);
        if (b1 < 0) { //add
            b1 = b1 + (1 * yspeed);
        }
        if (b2 < 0) { //add
            b2 = b2 + (1 * yspeed);
        }
        if (b3 < 0) { //add
            b3 = b3 + (1 * yspeed);
        }
    } else if (mouseX > 200 && mouseX < 400) { //1
        b1 = b1 - (1 * yspeed);

        if (b0 < 0) { //add
            b0 = b0 + (1 * yspeed);
        }
        if (b2 < 0) { //add
            b2 = b2 + (1 * yspeed);
        }
        if (b3 < 0) { //add
            b2 = b2 + (1 * yspeed);
        }
    } else if (mouseX > 400 && mouseX < 600) {
        b2 = b2 - (1 * yspeed);
        if (b0 < 0) { //add
            b0 = b0 + (1 * yspeed);
        }
        if (b1 < 0) { //add
            b1 = b1 + (1 * yspeed);
        }
        if (b3 < 0) { //add
            b3 = b3 + (1 * yspeed);
        }
    } else if (mouseX > 600 && mouseX < 800) {
        b3 = b3 - (1 * yspeed);
        if (b0 < 0) { //add
            b0 = b0 + (1 * yspeed);
        }
        if (b1 < 0) { //add
            b1 = b1 + (1 * yspeed);
        }
        if (b2 < 0) { //add
            b2 = b2 + (1 * yspeed);
        }
    }

    // Draw the box
    //rect(100, 0, 100, 250);
    //rect(300, 0, 100, 250);
    //rect(500, 0, 100, 250);
    //rect(700, 0, 100, 250);
}



//test

/*function setup() {
    var canvas = createCanvas(800, 250);
    background(255);
    // Move the canvas so it's inside our <div id="sketch-holder">.
    canvas.parent('sketch-holder');
}

function draw() {
    if (mouseIsPressed) {
        fill(0);
    } else {
        fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
}*/