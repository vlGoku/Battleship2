"use strict";

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
}

export { Ship };
