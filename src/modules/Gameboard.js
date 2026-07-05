const GRID_SIZE = 10;

export default class Gameboard {
    constructor() {
        this.grid = this.createGrid();
        this.attacks = this.createGrid();
    }

    createGrid() {
        const grid = [];
        for (let i = 1; i <= GRID_SIZE; i++) {
            grid.push(new Array(GRID_SIZE));
        }
        return grid;
    }

    placeShip(y, x, ship) {
        // y and x should come as co-ordinates not the index. So 1, 1 is index 0, 0
        if (x - 1 + ship.length > 10) return false;
        for (let i = -1; i <= ship.length - 2; i++) {
            this.grid[y - 1][x + i] = ship;
        }
    }

    receiveAttack(y, x) {
        const element = this.grid[y - 1][x - 1];
        if (typeof element === "object") {
            element.hit();
            this.attacks[y - 1][x - 1] = 1;
            return true;
        }
        this.attacks[y - 1][x - 1] = 0;
        return false;
    }

    clear() {
        this.grid = this.createGrid();
        this.attacks = this.createGrid();
    }
}
