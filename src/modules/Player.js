import Gameboard from "./Gameboard.js";

export default class Player {
    constructor() {
        this.gameboard = new Gameboard();
    }

    placeShip(y, x, ship) {
        this.gameboard.placeShip(y, x, ship);
    }

    randomizeShips() {
        for (let i = 1; i <= 3; i++) {
            const randomY = Math.floor(Math.random * 7);
            const randomX = Math.floor(Math.random * 7);
            computer.placeShip(randomY, randomX, new Ship());
        }
    }
}
