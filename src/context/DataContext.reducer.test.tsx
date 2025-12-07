import { describe, expect, it } from "bun:test";
import { generateMockData, reducer } from "./DataContext";

describe("DataContext reducer", () => {
    it("toggles expanded on a row", () => {
        const rows = generateMockData(3);
        const state = { rows };
        const action = { type: "toggle", id: rows[1].id } as const;
        const next = reducer(state, action as any);
        expect(next.rows[1].expanded).toBe(true);

        const next2 = reducer(next, action as any);
        expect(next2.rows[1].expanded).toBe(false);
    });

    it("regenerates rows with same length", () => {
        const rows = generateMockData(5);
        const state = { rows };
        const next = reducer(state, { type: "regenerate" });
        expect(next.rows.length).toBe(5);
    });
});
