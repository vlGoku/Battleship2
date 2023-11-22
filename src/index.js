import "./styles.scss";
import { Gameboard } from "./modules/gameboard";

let gameboardPlayer = new Gameboard();
let gameboardKI = new Gameboard();

gameboardPlayer.createGameboard();
gameboardKI.createGameboard();

console.log(gameboardPlayer.gameboard);
console.log(gameboardKI.gameboard);
