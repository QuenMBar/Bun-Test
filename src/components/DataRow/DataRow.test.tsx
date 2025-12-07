import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, mock } from "bun:test";
import "@testing-library/jest-dom";
import DataRow from "./DataRow";

const row = {
    id: 1,
    name: "Test User",
    email: "test@example.com",
    role: "Admin",
    status: "Active",
};

describe("DataRow", () => {
    it("calls onToggle when clicked and shows expanded content when isExpanded", () => {
        const onToggle = mock();
        const { rerender } = render(
            <table>
                <tbody>
                    <DataRow row={row} isExpanded={false} onToggle={onToggle} />
                </tbody>
            </table>
        );

        const tr = screen.getByText(/Test User/).closest("tr")!;
        fireEvent.click(tr);
        expect(onToggle).toHaveBeenCalledWith(1);

        rerender(
            <table>
                <tbody>
                    <DataRow row={row} isExpanded={true} onToggle={onToggle} />
                </tbody>
            </table>
        );
        expect(screen.getByText(/Details for/i)).toBeInTheDocument();
        expect(screen.getAllByText(/test@example.com/i)).toHaveLength(2);
    });
});
