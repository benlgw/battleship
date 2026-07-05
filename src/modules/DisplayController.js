const playerBoard = document.querySelector("#player");
const computerBoard = document.querySelector("#computer");

export default class DisplayController {
    createBoards() {
        for (let i = 1; i <= 100; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            playerBoard.append(cell);
        }
        for (let i = 1; i <= 100; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            computerBoard.append(cell);
        }
    }
}
