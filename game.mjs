import Spaceship from "./spaceship.mjs";
import Alien from "./alien.mjs";
// import Bullet from "./bullet.mjs"

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.spaceship;
    this.aliens = [];
    this.isGameOver = false;
  }

  startLoop() {
    this.spaceship = new Spaceship(this.canvas, 3);

    const loop = () => {
      if (Math.random() > 0.96) {
        const x = Math.random() * this.canvas.width;
        this.aliens.push(new Alien(this.canvas, x))
      }

      this.updateCanvas();
      this.clearCanvas();
      this.drawCanvas();

      // this.checkAllCollisions();
    }

    window.requestAnimationFrame(loop);
  }

  updateCanvas() {
    this.spaceship.update();
    this.aliens.forEach((alien) => {
      alien.update();
    });
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawCanvas() {
    this.spaceship.draw();
    this.aliens.forEach((alien) => {
      alien.draw();
    });
  }

  checkAllCollisions() {

  }
}

export default Game;