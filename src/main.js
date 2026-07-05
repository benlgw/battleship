import "./reset.css";
import "./style.css";

import Player from "./modules/Player.js";
import DisplayController from "./modules/DisplayController.js";

const dom = new DisplayController();

const player = new Player();
const computer = new Player();

computer.randomizeShips();

document.addEventListener("DOMContentLoaded", () => {
    dom.createBoards();

    const randomizeButtons = document.querySelectorAll("button");
    randomizeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (button.textContent.split(" ") === "Player") {
                player.randomizeShips();
                player.showShips();
            }
            if (button.textContent.split(" ") === "Player") {
                computer.randomizeShips();

                const computerBoard = document.querySelector("#computer");
                const computerCells = computerBoard.querySelectorAll(".cell");
                computerCells.forEach((cell) => {
                    cell.addEventListener("click", (event) => {
                        const y = event.target;
                        console.log(y);
                        computer.attack();
                    });
                });
            }
        });
    });
});
