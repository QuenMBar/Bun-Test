import type { Row } from "@/context/DataContext";
import { Fragment } from "react";

export default function DataRow({
    row,
    isExpanded,
    onToggle,
}: {
    row: Row;
    isExpanded: boolean;
    onToggle: (id: number) => void;
}) {
    return (
        <Fragment>
            <tr className="hover:bg-gray-50 cursor-pointer" onClick={() => onToggle(row.id)} aria-expanded={isExpanded}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{row.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.role}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span
                        className={`inline-flex px-2 py-0.5 rounded-full text-xs font-semibold ${
                            row.status === "Active"
                                ? "bg-green-100 text-green-800"
                                : row.status === "Invited"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                        }`}
                    >
                        {row.status}
                    </span>
                </td>
            </tr>

            {isExpanded && (
                <tr className="bg-gray-50">
                    <td colSpan={5} className="px-6 py-4">
                        <div className="text-sm text-gray-700">
                            Details for <span className="font-semibold">{row.name}</span>: email{" "}
                            <span className="font-mono">{row.email}</span>, role{" "}
                            <span className="font-medium">{row.role}</span>. This is a dummy detail area related to the
                            selected item.
                        </div>
                    </td>
                </tr>
            )}
        </Fragment>
    );
}
