import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "bun:test";
import "@testing-library/jest-dom";
import { DataProvider } from "@/context/DataContext";
import DataTable from "./DataTable";

describe("DataTable with DataProvider", () => {
    it("renders rows and allows expanding a row", async () => {
        render(
            <DataProvider>
                <table>
                    <tbody>
                        <DataTable />
                    </tbody>
                </table>
            </DataProvider>
        );

        const rows = await screen.findAllByRole("row");
        expect(rows.length).toBeGreaterThanOrEqual(2);

        const firstDataRow = rows[1];
        fireEvent.click(firstDataRow);

        expect(await screen.findByText(/Details for/i)).toBeInTheDocument();
    });
});
