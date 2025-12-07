import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "bun:test";
import { DataProvider } from "../../context/DataContext";
import Header from "./Header";

describe("Header", () => {
    it("renders app title and login button", () => {
        render(
            <DataProvider>
                <Header />
            </DataProvider>
        );

        expect(screen.getByText(/bun test/i)).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
    });
});
