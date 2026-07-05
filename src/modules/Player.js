import Gameboard from "./Gameboard.js";

export default class Player {
    constructor() {
        this.gameboard = new Gameboard();
    }

    placeShip(y, x, ship) {
        this.gameboard.placeShip(y, x, ship);
    }
}
