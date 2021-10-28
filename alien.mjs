"use strict";

class Alien {
  constructor(canvas, x) {
    this.size = 50;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = x;
    this.y = 0;
    this.speed = 2;
    this.direction = 1;
  }

  update() {
    this.y = this.y + this.direction * this.speed;
  }

  draw() {
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
  }

}

export default Alien;
