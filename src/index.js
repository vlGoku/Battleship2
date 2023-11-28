import "./styles.scss";
import { Gameboard } from "./modules/gameboard";
import { Player } from "./modules/player";
import { Ship } from "./modules/ship";

let gameboardPlayer = new Gameboard();
let gameboardKI = new Gameboard();

const carrier = new Ship("carrier", 5, 5);
const battleship = new Ship("battleship", 4, 4);
const cruiser = new Ship("cruiser", 3, 3);
const submarine = new Ship("submarine", 3, 2);
const destroyer = new Ship("Destroyer", 2, 1);

gameboardPlayer.createGameboard();
gameboardKI.createGameboard();

gameboardPlayer.placeShip(battleship, 2, 3);
gameboardKI.placeShipCPU(carrier);
gameboardKI.placeShipCPU(battleship);
gameboardKI.placeShipCPU(cruiser);
gameboardKI.placeShipCPU(submarine);
gameboardKI.placeShipCPU(destroyer);

console.log(gameboardPlayer.gameboard);
console.log(gameboardKI.gameboard);
