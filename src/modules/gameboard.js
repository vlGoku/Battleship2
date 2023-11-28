"use strict";

import { Ship } from "./ship";

class Gameboard {
  constructor() {
    this.gameboard = [];
    this.ships = [];
    this.counter = 0;
  }

  createGameboard() {
    for (let i = 0; i < 10; i++) {
      let innerArray = [];
      this.gameboard.push(innerArray);
      for (let z = 0; z < 10; z++) {
        innerArray.push(0);
      }
    }
  }
  placeShip(ship, x, y) {
    let z = 1;
    for (let i = 0; i < ship.shipLength(); i++) {
      if ([x + i] > 9) {
        this.gameboard[x - z][y] = ship.shipNumber;
        z++;
      } else {
        this.gameboard[x + i][y] = ship.shipNumber;
      }
    }
    this.ships.push(ship);
  }

  createShipsCPU() {
    const carrier = new Ship("carrier", 5, 5);
    const battleship = new Ship("battleship", 4, 4);
    const cruiser = new Ship("cruiser", 3, 3);
    const submarine = new Ship("submarine", 3, 2);
    const destroyer = new Ship("Destroyer", 2, 1);
  }

  placeShipCPU(ship) {
    let x = parseInt(Math.random() * 10);
    let y = parseInt(Math.random() * 10);
    if (this.gameboard[x][y] === this.gameboard[0][0]) {
      this.placeShip(ship, x, y);
    } else {
      this.placeShipCPU(ship);
    }
  }

  placeShipCPULoop() {
    for (let i = 1; i < this.ships.length; i++) {
      this.placeShipCPU(this.ships[i]);
    }
  }

  attackShip(x, y) {
    const currentItem = this.gameboard[x][y];
    this.ships.forEach((ship) => {
      if (ship.shipNumber === currentItem) {
        ship.timesHit++;
        this.gameboard[x][y] = "Treffer";
        this.checkShipSunk();
      }
    });
    if (this.gameboard[x][y] === 0) {
      this.gameboard[x][y] = "X";
    }
    this.counter++;
  }

  checkShipSunk() {
    this.ships.forEach((ship) => {
      if (ship.timesHit === ship.shipLength()) {
        ship.isSunk = true;
      }
      if (ship.isSunk) {
        console.log("Du hast " + ship.name + " zum sinken gebracht");
      }
    });
  }

  checkIfShipIsThere() {
    if (this.gameboard[x][y] != ship.shipNumber) {
      this.placeShip(ship, x, y);
    }
  }
}

export { Gameboard };
