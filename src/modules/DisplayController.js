const playerBoard = document.querySelector("#player");
const computerBoard = document.querySelector("#computer");

export default class DisplayController {
    createBoards() {
        for (let i = 1; i <= 10; i++) {
            for (let j = 1; j <= 10; j++) {
                const cell = document.createElement("div");
                cell.classList.add("cell");
                cell.setAttribute("y", i);
                cell.setAttribute("x", j);
                playerBoard.append(cell);
            }
        }
        for (let i = 1; i <= 10; i++) {
            for (let j = 1; j <= 10; j++) {
                const cell = document.createElement("div");
                cell.classList.add("cell");
                cell.setAttribute("y", i);
                cell.setAttribute("x", j);
                computerBoard.append(cell);
            }
        }
    }
}
