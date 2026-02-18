

export default function Projects() {
  return (
    <section className="page">
      <h2 className="title">Projects</h2>
      <p className="lead">A selection of projects and experiments.</p>
      <ul className="projects-list">
        <li>
          <strong>
            <a href="http://34.229.174.148:5050/" target="_blank" rel="noopener noreferrer">
              One Up Dating
            </a>
          </strong>{" "}
          — A rough-around-the-edges app, but a solid showcase of a full CI/CD pipeline
          built with GitHub Actions, AWS infrastructure (EC2 for SSR React, RDS for
          PostgreSQL), and real-time communication via WebSockets.
        </li>
      </ul>
    </section>
  )
}
