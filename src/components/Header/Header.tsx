export default function Header() {
    return (
        <header style={{ backgroundColor: "var(--vanguard-red)" }} className="w-full">
            <div className="container mx-auto flex items-center justify-between px-6 py-4">
                <div className="text-white font-semibold text-lg">Bun Test</div>
                <button
                    type="button"
                    aria-label="Login (dummy)"
                    className="px-4 py-2 rounded font-medium bg-white/10 text-white border border-white/10 hover:bg-white/20 transition-colors"
                >
                    Login
                </button>
            </div>
        </header>
    );
}
