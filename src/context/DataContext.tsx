import { faker } from "@faker-js/faker";
import { createContext, useCallback, useContext, useMemo, useReducer, type ReactNode } from "react";

export type Row = {
    id: number;
    name: string;
    email: string;
    role: string;
    status: string;
    expanded?: boolean;
};

type State = { rows: Row[] };

type Action = { type: "toggle"; id: number } | { type: "regenerate" } | { type: "set"; rows: Row[] };

type DataActions = {
    toggleExpand: (id: number) => void;
    regenerate: () => void;
};

const DataStateContext = createContext<Row[] | undefined>(undefined);
const DataActionsContext = createContext<DataActions | undefined>(undefined);

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
            expanded: false,
        } as Row;
    });
}

export function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "toggle":
            return {
                rows: state.rows.map((r) => (r.id === action.id ? { ...r, expanded: !r.expanded } : r)),
            };
        case "regenerate":
            return { rows: generateMockData(state.rows.length || 100) };
        case "set":
            return { rows: action.rows };
        default:
            return state;
    }
}

export function DataProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(reducer, { rows: generateMockData(100) });

    const toggleExpand = (id: number) => dispatch({ type: "toggle", id });
    const regenerate = () => dispatch({ type: "regenerate" });

    // memoize action callbacks and the actions object so consumers that only
    // read actions don't re-render when state changes
    const memoizedToggle = useCallback(toggleExpand, []);
    const memoizedRegenerate = useCallback(regenerate, []);
    const actions = useMemo(
        () => ({ toggleExpand: memoizedToggle, regenerate: memoizedRegenerate }),
        [memoizedToggle, memoizedRegenerate]
    );

    return (
        <DataStateContext.Provider value={state.rows}>
            <DataActionsContext.Provider value={actions}>{children}</DataActionsContext.Provider>
        </DataStateContext.Provider>
    );
}

export function useData() {
    const rows = useContext(DataStateContext);
    const actions = useContext(DataActionsContext);
    if (!rows || !actions) throw new Error("useData must be used within DataProvider");
    return { rows, ...actions };
}
