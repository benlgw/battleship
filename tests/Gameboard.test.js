import { test, expect } from "vitest";
import Gameboard from "./../src/modules/Gameboard.js";
import Ship from "./../src/modules/Ship.js";

test("board can place a ship", () => {
    const gameboard = new Gameboard();
    const y = 1;
    const x = 1;
    const ship = new Ship();
    gameboard.placeShip(y, x, ship);
    expect(gameboard.grid[y - 1][x - 1]).toBe(ship);
});

test("board places ship according to length", () => {
    const gameboard = new Gameboard();
    const y = 1;
    const x = 1;
    const ship = new Ship();
    gameboard.placeShip(y, x, ship);
    expect(gameboard.grid[y - 1][x - 1]).toBe(ship);
    expect(gameboard.grid[y][y - 1]).toBe(ship);
    expect(gameboard.grid[y + 1][x - 1]).toBe(ship);
});
