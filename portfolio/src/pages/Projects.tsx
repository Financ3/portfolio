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
          <strong>
            <a href="https://pricedrop.codebystory.com/" target="_blank" rel="noopener noreferrer">
              Price Drop Notifier
            </a>
          </strong>{" "}
          — A serverless web application that monitors e-commerce product prices and emails subscribers
          when a price drops. Users paste a product URL and their email into a simple frontend, and the
          app tracks the product's price on a daily schedule — notifying them the moment it falls.
          {" "}The backend is built on AWS Lambda (Python 3.13) using AWS SAM for infrastructure-as-code,
          with four functions handling subscriptions, scheduled scraping, fan-out notifications, and
          unsubscribes. Prices are scraped using BeautifulSoup and Requests, with ScraperAPI as a
          fallback for JavaScript-rendered pages. Product and subscription data is stored in DynamoDB,
          price-drop events are published to an SNS topic that triggers the notifier Lambda, and emails
          are sent via AWS SES. The frontend is a static vanilla HTML/CSS/JS page hosted on S3 behind
          CloudFront. Deployments are automated via GitHub Actions, which runs SAM build/deploy and
          syncs the frontend on every push to main.
        </li>
        <li>
          <strong><a href="https://apps.apple.com/us/app/the-memory-pulse/id6759820769" target="_blank" rel="noopener noreferrer">Memory Retention App</a></strong>{" "}
          — A mobile app to help users build and maintain long-term memory through spaced repetition
          and active recall techniques. <Tip>Android</Tip> listing is pending app store approval.
        </li>
        <li>
          <strong>
            <a href="https://apps.apple.com/us/app/the-daily-ember/id6759697711" target="_blank" rel="noopener noreferrer">
              The Daily Ember
            </a>
          </strong>{" "}
          — A daily quote app delivering a fresh and funny, inspiring, or depressing quote each day! The app comes in an image format designed to be used as a wallpaper on your phone.
          {" "}Available now on iOS. <Tip>Android</Tip> listing is pending app store approval.
        </li>
        <li>
          <strong>
            <a href="https://apps.apple.com/us/app/budget-envelope/id6760275377" target="_blank" rel="noopener noreferrer">
              Budget Envelope
            </a>
          </strong>{" "}
          — A budgeting app built around the envelope method, helping users allocate and track spending
          across categories. Available now on iOS. <Tip>Android</Tip> listing is pending app store approval.
        </li>
        <li>
          <strong>
            Day Trader App
          </strong>{" "}
          A machine learning application I am working on to predict stock price movements and assist with day trading decisions. The app will leverage historical stock data, technical indicators, and sentiment analysis to generate trading signals. It is currently in development and I run it locally only - currently training using fake money. We will see where this project goes!
        </li>
      </ul>
    </section>
  )
}
