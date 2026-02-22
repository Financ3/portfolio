import { useState } from 'react'

const COMING_SOON = 'Link coming soon\nPending app store approval'

function Tip({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <span
      className={'tooltip-wrap' + (open ? ' tip-open' : '')}
      data-tooltip={COMING_SOON}
      onClick={() => setOpen(o => !o)}
      onMouseLeave={() => setOpen(false)}
    >
      {children}
    </span>
  )
}

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
          — A rough-around-the-edges dating app mock-up, but a solid showcase of a full CI/CD pipeline
          built with GitHub Actions, AWS infrastructure (EC2 for SSR React, RDS for
          PostgreSQL), and real-time communication via WebSockets.
        </li>
        <li>
          <strong><Tip>Memory Retention App</Tip></strong>{" "}
          — A mobile app to help users build and maintain long-term memory through spaced repetition
          and active recall techniques.
        </li>
        <li>
          <strong><Tip>Quote of the Day</Tip></strong>{" "}
          — A mobile app that delivers a fresh quote each day to inspire and motivate.
        </li>
      </ul>
    </section>
  )
}
