import { test, expect } from "vitest";
import Ship from "./../src/modules/Ship.js";

const ship = new Ship();

test("hit count increases when ship is hit", () => {
    ship.hit();
    expect(ship.hits).toBe(1);
    ship.hit();
    expect(ship.hits).toBe(2);
});

test("ship can identify when it is sunk", () => {
    expect(ship.isSunk()).toBe(false);
    ship.hit();
    expect(ship.isSunk()).toBe(true);
});
