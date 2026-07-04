import { test, expect } from "vitest";
import Gameboard from "./../src/modules/Gameboard.js";
import Ship from "./../src/modules/Ship.js";

const gameboard = new Gameboard();

test("board can place a ship", () => {
    const x = 1;
    const y = 1;
    const ship = new Ship();
    gameboard.placeShip(x, y, ship);
    expect(gameboard.grid[x - 1][y - 1]).toBe(ship);
});

test("board places ship according to length", () => {
    const x = 1;
    const y = 1;
    const ship = new Ship();
    gameboard.placeShip(x, y, ship);
    expect(gameboard.grid[x - 1][y - 1]).toBe(ship);
    expect(gameboard.grid[x][y - 1]).toBe(ship);
    expect(gameboard.grid[x + 1][y - 1]).toBe(ship);
});
