"use strict";

class Ship {
  constructor(name, length, number) {
    this.name = name;
    this.length = length;
    this.number = number;
    this.isSunk = false;
    this.timesHit = 0;
  }
}

export { Ship };
