import "./index.css";
import { DataProvider } from "./context/DataContext";
import Header from "./components/Header/Header";
import DataTable from "./components/DataTable/DataTable";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/Card/card";

export function App() {
    return (
        <DataProvider>
            <Header />

            <main className="container mx-auto p-8 relative z-10 mt-8">
                <Card>
                    <CardHeader className="gap-4">
                        <CardTitle className="text-2xl font-bold">Users</CardTitle>
                        <CardDescription>
                            Example table populated with faker-generated mock data (100 rows)
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <DataTable />
                    </CardContent>
                </Card>
            </main>
        </DataProvider>
    );
}

export default App;
