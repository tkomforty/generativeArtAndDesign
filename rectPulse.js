//tkomforty, 2022

let min = 3;
let rects = [];
let colors = ["#fffd82", "#ff9b71", "#e84855", "#B56B45", "#d0d0d0"];
let seed = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB, 255, 255, 255, 255);
  background(0, 0, 0, 250);

  rectMode(CENTER);
 // seed = int(fxrand() * 1000); // FXHASH seed rand
 // randomSeed(seed);
  frameRate(12);

  divideRect(0, 0, width, height);

  //    if (typeof fxpreview === 'function') {
  //  fxpreview()
  //  }
}

function draw() {
  for (let r of rects) {
    let amt = norm(sin(r.x * 0.05) * cos(r.y * 0.05 - frameCount * 0.2), -1, 1);
    let w = lerp(0, r.w, amt / 2);
    let h = lerp(0, r.h, amt);
    //noStroke()

    fill(random(85), random(25, 45), random(200, 255), random(175));
    rect(r.x, r.y, w, h);
  }
}

function divideRect(x, y, w, h) {
  let rnd = int(random(2));
  let cc = 3;
  let w1 = int(random(1, cc)) * (w / cc);
  let w2 = w - w1;
  let h1 = int(random(1, cc)) * (h / cc);
  let h2 = h - h1;

  if (w1 > min && w2 > min && h1 > min && h2 > min) {
    if (rnd == 0) {
      divideRect(x, y, w1, h);
      divideRect(x + w1, y, w2, h);
    }
    if (rnd == 1) {
      divideRect(x, y, w, h1);
      divideRect(x, y + h1, w, h2);
    }
  } else {
    rects.push({
      x: x + w / 2,
      y: y + h / 2,
      w: w,
      h: h,
      c: random(colors),
    });
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
