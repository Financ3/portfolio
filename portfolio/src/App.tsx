import { useState, useEffect, useCallback } from 'react'
import './App.css'
import Layout from './components/Layout'
import About from './pages/About'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import QuoteOfTheDayPrivacy from './pages/QuoteOfTheDayPrivacy'

type Page = 'home' | 'about' | 'projects' | 'resume' | 'quote-privacy'

type HomeProps = { onNavigate: (p: Page) => void }

function Home({ onNavigate }: HomeProps) {
  return (
    <section className="page">
      <h2 className="title">Welcome</h2>
      <p className="lead">Welcome — this is my portfolio: a carefully curated mix of experiments, polished bits, and things that only work after dark. See where the real magic happens on the <a href="/projects" onClick={(e) => { e.preventDefault(); onNavigate('projects') }}>Projects</a> page. Want to hire someone who debugs in their sleep? Reach out on <a href="https://www.linkedin.com/in/tannerfrancis/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
      <p>
        This portfolio itself is built with <strong>React</strong> and <strong>TypeScript</strong>,
        bundled with <strong>Vite</strong>, and hosted as a static site on <strong>AWS S3</strong>.
        The source lives on GitHub, and deployments are automated via a <strong>GitHub Actions</strong> CI/CD
        pipeline that builds and syncs the dist to S3 on every push to main.
      </p>
    </section>
  )
}

function App() {
  const [page, setPage] = useState<Page>('home')

  const pathToPage = useCallback((path: string): Page => {
    if (path.startsWith('/projects')) return 'projects'
    if (path.startsWith('/about')) return 'about'
    if (path.startsWith('/resume')) return 'resume'
    if (path.startsWith('/quote-of-the-day/privacy')) return 'quote-privacy'
    return 'home'
  }, [])

  const pageToPath = useCallback((p: Page) => {
    if (p === 'home') return '/'
    if (p === 'quote-privacy') return '/quote-of-the-day/privacy'
    return `/${p}`
  }, [])

  useEffect(() => {
    // initialize from URL
    setPage(pathToPage(window.location.pathname))

    const onPop = () => setPage(pathToPage(window.location.pathname))
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [pathToPage])

  const navigate = useCallback((p: Page) => {
    const path = pageToPath(p)
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path)
    }
    setPage(p)
  }, [pageToPath])

  if (page === 'quote-privacy') {
    return <QuoteOfTheDayPrivacy />
  }

  return (
    <Layout current={page} onNavigate={navigate}>
      {page === 'home' && <Home onNavigate={navigate} />}
      {page === 'about' && <About />}
      {page === 'projects' && <Projects />}
      {page === 'resume' && <Resume />}
    </Layout>
  )
}

export default App
