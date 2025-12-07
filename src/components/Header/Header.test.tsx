import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "bun:test";
import "@testing-library/jest-dom";
import Header from "./Header";

describe("Header", () => {
    it("renders app title and login button", () => {
        render(<Header />);

        expect(screen.getByText(/bun test/i)).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
    });
});
