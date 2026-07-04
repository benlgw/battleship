const GRID_SIZE = 10;

export default class Gameboard {
    constructor() {
        this.grid = this.createGrid();
    }

    createGrid() {
        const grid = [];
        for (let i = 1; i <= GRID_SIZE; i++) {
            grid.push(new Array(GRID_SIZE));
        }
        return grid;
    }
}
