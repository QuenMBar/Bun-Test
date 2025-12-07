import { createContext, useContext, useState, type ReactNode } from "react";
import { faker } from "@faker-js/faker";

export type Row = {
    id: number;
    name: string;
    email: string;
    role: string;
    status: string;
};

type DataContextType = {
    rows: Row[];
    expandedId: number | null;
    toggleExpand: (id: number) => void;
    regenerate: () => void;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export function generateMockData(count = 100): Row[] {
    const roles = ["Admin", "Editor", "Viewer"];
    const statuses = ["Active", "Invited", "Suspended"];

    return Array.from({ length: count }).map((_, i) => {
        const first = faker.person.firstName();
        const last = faker.person.lastName();
        return {
            id: i + 1,
            name: `${first} ${last}`,
            email: faker.internet.email({ firstName: first, lastName: last }).toLowerCase(),
            role: faker.helpers.arrayElement(roles),
            status: faker.helpers.arrayElement(statuses),
        };
    });
}

export function DataProvider({ children }: { children: ReactNode }) {
    const [rows, setRows] = useState<Row[]>(() => generateMockData(100));
    const [expandedId, setExpandedId] = useState<number | null>(null);

    function toggleExpand(id: number) {
        setExpandedId((prev) => (prev === id ? null : id));
    }

    function regenerate() {
        setRows(generateMockData(100));
        setExpandedId(null);
    }

    return (
        <DataContext.Provider value={{ rows, expandedId, toggleExpand, regenerate }}>{children}</DataContext.Provider>
    );
}

export function useData() {
    const ctx = useContext(DataContext);
    if (!ctx) throw new Error("useData must be used within DataProvider");
    return ctx;
}
