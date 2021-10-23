"use-strict";

import Game from "./game.mjs";

function buildDom(html) {
  const main = document.querySelector("main");
  main.innerHTML = html;
}

// function buildSplashScreen() {
//   buildDom(`
//       <section class="splash-screen">
//         <h1>Alien Crusher</h1>
//         <button>Start</button>
//       </section>
//     `);
//   const startButton = document.querySelector("button");
//   startButton.addEventListener("click", buildGameScreen);
// }

function buildGameScreen() {
  buildDom(`
      <section class="game-screen">
        <canvas></canvas>
      </section>  
    `);

  const width = document.querySelector(".game-screen").offsetWidth;
  // const height = document.querySelector(".game-screen").offsetHeight;

  const canvasElement = document.querySelector("canvas");

  canvasElement.setAttribute("width", width);
  canvasElement.setAttribute("height", 400);
  canvasElement.setAttribute("style", "border:1px solid #000000;")

  const game = new Game(canvasElement);

  game.startLoop();

  // const autoMovement = () => {
  //   game.spaceship.setDirection(-1);
    
  // }

  const setSpaceshipDirection = (event) => {
    if (event.code === "ArrowLeft") {
      game.spaceship.setDirection(-1);
    } else if (event.code === "ArrowRight") {
      game.spaceship.setDirection(1);
    }
  };

  document.addEventListener("keydown", setSpaceshipDirection);
}

// function buildGameOver() {
//   buildDom(`
//       <section class="game-over">
//         <h1>Game Over Screen</h1>
//         <button>Restart</button>
//       </section>
//     `);

//   const restartButton = document.querySelector("button");
//   restartButton.addEventListener("click", buildGameScreen);
// }

const main = () => {
  buildGameScreen();
};

window.addEventListener("load", main);
