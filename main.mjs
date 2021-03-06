"use-strict";

import Game from "./game.mjs";
import Bullet from "./bullet.mjs";

function buildDom(html) {
  const main = document.querySelector("main");
  main.innerHTML = html;
}

function buildSplashScreen() {
  buildDom(`
      <section class="splash-screen">
        <h1>Alien Crusher</h1>
        <button>Start</button>
      </section>
    `);
  const startButton = document.querySelector("button");
  startButton.addEventListener("click", buildGameScreen);
}

function buildGameScreen() {
  buildDom(`
      <section class="game-info">
        <h2 id="gameInfo">Score: <span id="score">0</span></h2>
        <h2 id="gameInfo">Lives: <span id="lives">3</span></h2>
      </section>
      <section class="game-screen">
        <canvas></canvas>
      </section>  
    `);

  const width = document.querySelector(".game-screen").offsetWidth;
  // const height = document.querySelector(".game-screen").offsetHeight;

  const canvasElement = document.querySelector("canvas");

  canvasElement.setAttribute("width", 500);
  canvasElement.setAttribute("height", 500);
  canvasElement.setAttribute("style", "border:1px solid #000000;")

  const game = new Game(canvasElement);
  game.gameOverCallback(buildGameOver);

  game.startLoop();

  const setSpaceshipDirection = event => {
    if (event.code === "ArrowLeft") {
      game.spaceship.setDirection(-1);
      game.spaceship.update();
    } else if (event.code === "ArrowRight") {
      game.spaceship.setDirection(1);
      game.spaceship.update();
    } 
  };

  const createBullet = event => {
    if (event.code === "ArrowUp") {
      game.addBullet(new Bullet(canvasElement, game.spaceship.x));
    }
  }

  document.addEventListener("keydown", setSpaceshipDirection);
  document.addEventListener("keydown", createBullet);
  // document.addEventListener("keydown", event => {
  //   createBullet(event.code);
  //   setSpaceshipDirection(event.code);
  // })
}

function buildGameOver() {
  buildDom(`
      <section class="game-over">
        <h1>Game Over Screen</h1>
        <button>Restart</button>
      </section>
    `);

  const restartButton = document.querySelector("button");
  restartButton.addEventListener("click", buildGameScreen);
}

const main = () => {
  buildSplashScreen();
};

window.addEventListener("load", main);
