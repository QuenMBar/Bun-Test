import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/Card/card";
import DataTable from "./components/DataTable/DataTable";
import Header from "./components/Header/Header";
import { DataProvider } from "./context/DataContext";
import "./index.css";

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
