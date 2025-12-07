import { DataProvider } from "@/context/DataContext";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "bun:test";
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
