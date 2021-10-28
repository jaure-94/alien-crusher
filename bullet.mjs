"use-strict";

class Bullet {
  constructor(canvas, x) {
    this.size = 5;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.speed = 40;
    this.direction = -1;
    this.x = x;
    this.y = this.canvas.height;
  }

  update() {
    this.y = this.y + this.direction * this.speed;
  }

  draw() {
    this.ctx.fillstyle = 'black';
    this.ctx.fillRect(this.x, this.y - this.size / 2, 2, this.size);
  }

  checkCollision(alien) {
    const collideTop = this.y - this.size / 2 < alien.y + alien.size / 2;

    if (collideTop) {
      return true;
    }

    return false;
  }
}

export default Bullet;