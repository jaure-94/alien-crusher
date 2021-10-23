# PROJECT | Alien Crusher

A simple shooting game with a spaceship whose main aim is to destroy as many aliens as possible.

## Description

Alien Crusher is a simple shooting game. It is a single player game, with a spaceship controlled by the player with the sole aim of shooting the incoming aliens.	The spaceship’s main goal is to destroy the aliens using bullets before the aliens collide with the spaceship. •	Each bullet fired can destroy one alien at a time. •	The spaceship has 3 lives. If the spaceship gets hit by 3 aliens, game over.

## MVP (DOM - CANVAS)

- game has a single spaceship that moves horizontally
- ship shoots bullet rays up
- aliens appear randomly from the top of the screen
- three aliens colliding with the spaceship will end the game
- bullet rays destroy aliens
- reload time for shooting bullet rays is 25 milliseconds

## Data Structure

## main.js

## game.js

## spaceship.js

## alien.js

## bullet.js

## States y States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen
- gameScreen
- gameOverScreen

## Task

- main - buildDom
- main - buildSplashScreen
- main - addEventListener
- main - buildGameScreen
- main - buildGameOverScreen
- game - startLoop
- game - buildCanvas
- game - updateCanvas
- game - drawCanvas
- alien - draw
- alien - move
- game - addAlien
- spaceship - draw
- spaceship - move
- spaceship - shoot
- game - addShip
- bullet - draw
- bullet - move
- game - checkCollision
- game - GameOver
- game - addEventListener