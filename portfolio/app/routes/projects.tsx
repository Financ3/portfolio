import type { Route } from "./+types/projects";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Projects — My Portfolio" },
    { name: "description", content: "My personal projects" },
  ];
}

export default function Projects() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-8 min-h-0">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Projects</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            My personal projects
          </p>
        </div>
        <div className="max-w-2xl w-full px-4">
          <p className="text-gray-700 dark:text-gray-300">
            Projects coming soon...
          </p>
        </div>
      </div>
    </main>
  );
}
