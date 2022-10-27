newangle = Math.PI/3*2;
newiterations = 10;
newlength = 0.5;
startangle = Math.PI / 2;

class point {
  constructor(oldx, oldy, iteration, angle, len) {
    this.x = oldx - Math.cos(angle) * len;
    this.y = oldy - Math.sin(angle) * len;
    this.iteration = iteration;
    this.angle = angle;
    this.len = len;
    this.oldx = oldx;
    this.oldy = oldy;
  }
  draw() {
    drawLine(this.oldx, this.oldy, this.x, this.y);
  }
}

function generate() {
  arr = [];
  arr.push(
    new point(window.innerWidth / 2, window.innerHeight / 2+500, 0, startangle, 400)
  );
  for (let i = 0; i < Math.floor(newiterations); i++) {
    let l = arr.length;
    for (let j = 0; j < l; j++) {
      if (arr[j].iteration == i) {
        arr.push(
          new point(
            arr[j].x,
            arr[j].y,
            i + 1,
            arr[j].angle - newangle,
            arr[j].len * newlength
          )
        );
        arr.push(
          new point(
            arr[j].x,
            arr[j].y,
            i + 1,
            arr[j].angle + newangle,
            arr[j].len * newlength
          )
        );
        arr.push(
            new point(
              arr[j].x,
              arr[j].y,
              i + 1,
              arr[j].angle,
              arr[j].len * newlength
            )
          );
      }
    }
  }
}

generate();

function draw() {
//   context.fillStyle = "black";
//   context.fillRect(0, 0, window.innerWidth, window.innerHeight);
  //context.strokeStyle = "white"
  //Just set i to 0 for getting a tree--------------------------------------------------------------------->
  for (let i = arr.length - Math.pow(3,Math.floor(newiterations)); i < arr.length; i++) {
    // context.lineWidth = newiterations - arr[i].iteration;
    // context.strokeStyle = `rgb(${(newiterations - arr[i].iteration) * 20},${
    //   Math.random() * 255
    // }, ${255 - (newiterations - arr[i].iteration) * 20})`;
    arr[i].draw();
  }
}

function update() {
  if (isKeyPressed[69]) {
    newangle += 0.015;
    generate();
  }
  if (isKeyPressed[81]) {
    newangle -= 0.015;
    generate();
  }
  if (isKeyPressed[82]) {
    newiterations += 0.1;
    generate();
  }
  if (isKeyPressed[70]) {
    newiterations -= 0.1;
    if(newiterations<0){
      newiterations = 0
    }
    generate();
  }
  if (isKeyPressed[87]) {
    newlength += 0.005;
    generate();
  }
  if (isKeyPressed[83]) {
    newlength -= 0.005;
    generate();
  }
  if (isKeyPressed[68]) {
    startangle += 0.05;
    generate();
  }
  if (isKeyPressed[65]) {
    startangle -= 0.05;
    generate();
  }
}

function keyup(key) {
  console.log(key);
}
