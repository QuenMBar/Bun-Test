import { describe, it, expect } from "bun:test";
import { generateMockData } from "./DataContext";

describe("DataContext.generateMockData", () => {
    it("generates requested number of rows with expected shape and unique ids", () => {
        const rows = generateMockData(20);
        expect(rows.length).toBe(20);

        const ids = rows.map((r) => r.id);
        const uniqueIds = new Set(ids);
        expect(uniqueIds.size).toBe(20);

        const roles = ["Admin", "Editor", "Viewer"];
        const statuses = ["Active", "Invited", "Suspended"];

        for (const r of rows) {
            expect(typeof r.id).toBe("number");
            expect(typeof r.name).toBe("string");
            expect(typeof r.email).toBe("string");
            expect(roles.includes(r.role)).toBe(true);
            expect(statuses.includes(r.status)).toBe(true);
        }
    });
});
