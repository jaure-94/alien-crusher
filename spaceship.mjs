"use strict";

class Spaceship {
  constructor(canvas, lives) {
    this.size = 50;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height - 20;
    this.speed = 15;
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

  checkScreen() {
    if (this.x - this.size / 2 <= 0) {
      this.direction = 1;
    } else if (this.x + this.size + this.size / 2 >= this.canvas.width) {
      this.direction = -1;
    }
  }

  checkCollisionAlien(alien) {
    const collideTop = this.y - this.size / 2 < alien.y + alien.size / 2;
    const collideLeft = this.x - this.size / 2 < alien.x + alien.size / 2;
    const collideRight = this.x + this.size / 2 > alien.x - alien.size / 2;

    if (collideRight && collideLeft && collideTop) {
      return true;
    }

    return false;
  }

  setDirection(direction) {
    this.direction = direction;
  }

  loseLife() {
    this.lives--;
  }

}

export default Spaceship;