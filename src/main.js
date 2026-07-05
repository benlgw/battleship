import "./reset.css";
import "./style.css";

import Player from "./modules/Player.js";
import Ship from "./modules/Ship.js";
import DisplayController from "./modules/DisplayController.js";

const dom = new DisplayController();

const player = new Player();
const computer = new Player();

document.addEventListener("DOMContentLoaded", () => {
    dom.createBoards();
    const randomizeButtons = document.querySelectorAll("button");
    randomizeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (button.textContent.split(" ") === "Player") {
                player.randomizeShips();
            }
            if (button.textContent.split(" ") === "Player") {
                computer.randomizeShips();
            }
        });
    });
});

// Place computer ships in random position
computer.randomizeShips();
