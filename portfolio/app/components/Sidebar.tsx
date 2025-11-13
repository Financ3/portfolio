import { Link } from "react-router";

export default function Sidebar() {
  return (
    <nav className="h-full flex flex-col gap-4">
      <div className="text-xl font-semibold px-2">Site</div>
      <ul className="flex-1 space-y-2">
        <li>
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-200"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-200"
          >
            Projects
          </Link>
        </li>
      </ul>
      <footer className="text-sm text-gray-500 px-2">
        © {new Date().getFullYear()}
      </footer>
    </nav>
  );
}
