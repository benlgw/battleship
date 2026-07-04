export default class Ship {
    constructor() {
        this.name = "ship"; // To be updated to official battleship names on ship creation
        this.length = 3;
        this.hits = 0;
        this.sunk = false;
    }

    hit() {
        this.hits++;
        if (this.hits === this.length) this.sunk = true;
    }

    isSunk() {
        return this.sunk;
    }
}
