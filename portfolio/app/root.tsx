// app/root.tsx
// Re-exports: `links`, `Layout`, `ErrorBoundary` (implemented in `./root/*`).
// Keep this file small — as much as possible implement other required exports in `app/root/*` - and keep only the App() implementation here.
import "./app.css";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Sidebar from "./components/Sidebar";

// export named route module exports so the router finds them on the root module.
export { links } from "./root/links";
export { Layout } from "./root/Layout";
export { ErrorBoundary } from "./root/ErrorBoundary";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      {/* Desktop sidebar (hidden on mobile) */}
      <aside
        className="w-72 border-r border-gray-200 dark:border-gray-800 p-4 hidden md:block"
        aria-hidden
      >
        <Sidebar />
      </aside>

      {/* Mobile header with hamburger */}
      <header className="md:hidden flex items-center justify-between p-2 border-b w-full">
        <button
          aria-controls="mobile-sidebar"
          aria-expanded={open}
          aria-label="Open sidebar"
          className="p-2"
          onClick={() => setOpen(true)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M3 6h18M3 12h18M3 18h18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="text-lg font-bold">Portfolio</div>
        <div style={{ width: 40 }} />
      </header>

      {/* Mobile drawer */}
      <div
        id="mobile-sidebar"
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-black transform transition-transform duration-200 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="text-lg font-semibold">Menu</div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close sidebar"
              className="p-2"
            >
              ✕
            </button>
          </div>
          <Sidebar />
        </div>
      </div>

      {/* grey background overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden
        />
      )}

      {/* Main content */}
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
}
