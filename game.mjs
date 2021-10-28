import Spaceship from "./spaceship.mjs";
import Alien from "./alien.mjs";

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.spaceship;
    this.aliens = [];
    this.bullets = [];
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
      this.checkAllCollisions();

      if (!this.isGameOver) {
        window.requestAnimationFrame(loop);
      }

      
    }

    window.requestAnimationFrame(loop);
  }

  updateCanvas() {
    // this.spaceship.update();
    this.aliens.forEach(alien => {
      alien.update();
    });

    this.bullets.forEach(bullet => {
      bullet.update();
    })
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawCanvas() {
    this.spaceship.draw();
    this.aliens.forEach((alien) => {
      alien.draw();
    });
    this.bullets.forEach(bullet => {
      bullet.draw();
    })
  }

  addBullet(bullet){
    this.bullets.push(bullet);
  }

  checkAllCollisions() {
    // this.spaceship.checkScreen();
    this.aliens.forEach((alien, alienIdx) => {
      if (this.spaceship.checkCollisionAlien(alien)) {
        this.spaceship.loseLife();
        this.aliens.splice(alienIdx, 1);
        if (this.spaceship.lives === 0) {
          this.isGameOver = true;
          this.onGameOver();
        }

        return
      }

      this.bullets.forEach((bullet, bulletIdx) => {
        if (bullet.checkCollision(alien)) {
          this.aliens.splice(1, alienIdx);
          this.bullets.splice(1, bulletIdx);
        }
  
        if (bullet.y < 0) {
          this.bullets.splice(1, bulletIdx);
        }
      })

      if (alien.y > this.canvas.height) {
        this.aliens.splice(1, alienIdx);
      }
    });

  }

  gameOverCallback(callback) {
    this.onGameOver = callback;
  }
}

export default Game;