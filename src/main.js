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

    const computerBoard = document.querySelector("#computer");
    const computerCells = computerBoard.querySelectorAll(".cell");
    computerCells.forEach((cell) => {
        cell.addEventListener("click", (event) => {
            const y = event.target.getAttribute("y");
            const x = event.target.getAttribute("x");
            computer.attack(y, x);

            const randomY = Math.floor(Math.random() * 7 + 1);
            const randomX = Math.floor(Math.random() * 7 + 1);
            player.attack(randomY, randomX);
        });
    });

    const randomizeButtons = document.querySelectorAll("button");
    randomizeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (button.textContent.split(" ")[1] === "Player") {
                player.randomizeShips();
                dom.showShips(player.gameboard.grid);
            }
            if (button.textContent.split(" ")[1] === "Computer") {
                computer.randomizeShips();
            }
        });
    });
});
