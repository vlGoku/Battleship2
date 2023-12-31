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
    if (this.gameboard[x][y] !== 0) {
      console.log("Hallo, hier ist ein Schiff! Platziere es bitte wo anders");
    } else {
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
  }

  createShipsCPU() {
    const carrier = new Ship("carrier", 5, 5);
    const battleship = new Ship("battleship", 4, 4);
    const cruiser = new Ship("cruiser", 3, 3);
    const submarine = new Ship("submarine", 3, 2);
    const destroyer = new Ship("Destroyer", 2, 1);
    this.ships.push(carrier, battleship, cruiser, submarine, destroyer);
  }

  placeShipsCPU() {
    for (const ship of this.ships) {
      let x = Math.floor(Math.random() * 10);
      let y = Math.floor(Math.random() * 10);
      let z = 1;
      for (let i = 0; i < ship.shipLength(); i++) {
        if ([x + i] > 9) {
          this.gameboard[x - z][y] = ship.shipNumber;
          z++;
        } else {
          this.gameboard[x + i][y] = ship.shipNumber;
        }
      }
    }
  }
}

export { Gameboard };
