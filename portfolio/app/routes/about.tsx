import { Link } from "react-router";

export function meta() {
  return [
    { title: "About — My Portfolio" },
    { name: "description", content: "About page" },
  ];
}

export default function About() {
  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>About</h1>
      <p>This is the about page.</p>
      <p>
        <Link to="/" className="text-blue-600 hover:underline">
          Home
        </Link>
      </p>
    </main>
  );
}
