"use strict";

class Spaceship {
  constructor(canvas, lives) {
    this.size = 50;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height - 10;
    this.speed = 5;
    this.direction = 0;
    this.lives = lives;
  }

  draw() {
    this.ctx.fillStyle = "yellow";
    this.ctx.fillRect(
      this.x - this.size / 2,
      this.y - this.size / 2,
      this.size,
      this.size
    );
  }

  update() {
    this.x = this.x + this.direction * this.speed;
  }

  setDirection(direction) {
    this.direction = direction;
  }

}

export default Spaceship;