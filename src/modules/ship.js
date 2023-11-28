"use strict";

import { Gameboard } from "./gameboard";

class Ship {
  constructor(name, length, number) {
    this.name = name;
    this.length = length;
    this.shipNumber = number;
    this.isSunk = false;
    this.timesHit = 0;
  }

  shipLength(){
    return this.length;
  }

  hit() {
    return this.timesHit;
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
}

export { Ship };
