import "./styles.scss";
import { Gameboard } from "./modules/gameboard";
import { Player } from "./modules/player";
import { Ship } from "./modules/ship";

let gameboardPlayer = new Gameboard();
let gameboardKI = new Gameboard();

gameboardPlayer.createGameboard();
gameboardKI.createGameboard();
gameboardKI.createShipsCPU();

gameboardKI.placeShipsCPU();

console.log(gameboardPlayer.gameboard);
console.log(gameboardKI.gameboard);
