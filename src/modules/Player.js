import Gameboard from "./Gameboard.js";
import Ship from "./Ship.js";

export default class Player {
    constructor() {
        this.gameboard = new Gameboard();
    }

    placeShip(y, x, ship) {
        this.gameboard.placeShip(y, x, ship);
    }

    randomizeShips() {
        this.gameboard.clear();
        for (let i = 1; i <= 5; i++) {
            const randomY = Math.floor(Math.random() * 7 + 1);
            const randomX = Math.floor(Math.random() * 7 + 1);
            this.gameboard.placeShip(randomY, randomX, new Ship());
        }
    }
}
