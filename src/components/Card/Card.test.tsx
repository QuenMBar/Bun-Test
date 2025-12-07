import { describe, it, expect } from "bun:test";
import * as React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./Card";

describe("Card component (shallow)", () => {
    it("returns a div element with expected data-slot and classes", () => {
        // Call the component function directly (shallow) — it returns a React element
        const el = Card({ className: "custom" } as any);
        expect(el.props["data-slot"]).toBe("card");
        expect(el.props.className).toEqual(expect.any(String));
        expect(el.props.className).toMatch(/bg-card/);
    });

    it("CardHeader/CardTitle/CardContent return elements with proper data-slot", () => {
        const hdr = CardHeader({} as any);
        expect(hdr.props["data-slot"]).toBe("card-header");

        const title = CardTitle({} as any);
        expect(title.props["data-slot"]).toBe("card-title");

        const content = CardContent({} as any);
        expect(content.props["data-slot"]).toBe("card-content");
    });
});
