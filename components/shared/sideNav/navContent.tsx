import { LogOut } from 'lucide-react';

export function Navigation() {
  return (
    <>
      {/* Logo */}
      <div className="shrink-0 border-b p-6">
        <h1 className="text-xl font-bold">LOGO</h1>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        <nav className="p-4 space-y-2">
          <button className="w-full rounded-md p-3 text-left hover:bg-muted">
            Dashboard
          </button>

          <button className="w-full rounded-md p-3 text-left hover:bg-muted">
            Users
          </button>

          <button className="w-full rounded-md p-3 text-left hover:bg-muted">
            Settings
          </button>

          {Array.from({ length: 50 }).map((_, i) => (
            <button
              key={i}
              className="w-full rounded-md p-3 text-left hover:bg-muted"
            >
              Menu {i + 1}
            </button>
          ))}
        </nav>
      </div>

      {/* Logout */}
      <div className="shrink-0 border-t p-4">
        <button className="flex w-full items-center gap-2 rounded-md p-3 hover:bg-muted">
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </div>
    </>
  );
}
