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
    expect(gameboard.grid[y - 1][x]).toBe(ship);
    expect(gameboard.grid[y - 1][x + 1]).toBe(ship);
});

test("board does not place ship if out of bounds", () => {
    const gameboard = new Gameboard();
    const y = 1;
    const x = 9; // for ship length of 3 it can only place the first 2 pieces of the ship
    const ship = new Ship();
    expect(gameboard.placeShip(y, x, ship)).toBe(false);
    expect(Object.hasOwn(gameboard.grid[y - 1], ship)).toBe(false);
});

test("board receives attack", () => {
    const gameboard = new Gameboard();
    const y = 1;
    const x = 1;
    expect(gameboard.receiveAttack(y, x)).toBe(false);
    expect(gameboard.attacks[y - 1][x - 1]).toBe(0);
});

test("board knows when ship is hit", () => {
    const gameboard = new Gameboard();
    const y = 1;
    const x = 1;
    const ship = new Ship();

    gameboard.placeShip(y, x, ship);
    expect(gameboard.receiveAttack(y, x)).toBe(true);
    expect(gameboard.attacks[y - 1][x - 1]).toBe(1);
});

test("board tells ship it is hit", () => {
    const gameboard = new Gameboard();
    const y = 1;
    const x = 1;
    const ship = new Ship();

    gameboard.placeShip(y, x, ship);
    gameboard.receiveAttack(y, x);
    expect(gameboard.grid[y - 1][x - 1].hits).toBe(1);
    expect(gameboard.grid[y - 1][x].hits).toBe(1);
    expect(gameboard.grid[y - 1][x + 1].hits).toBe(1);
});
