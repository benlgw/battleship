import "./reset.css";
import "./style.css";

import Player from "./modules/Player.js";
import DisplayController from "./modules/DisplayController.js";

const dom = new DisplayController();

document.addEventListener("DOMContentLoaded", () => {
    dom.createBoards();
});

const player = new Player();
const computer = new Player();
