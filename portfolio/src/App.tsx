import { useState, useEffect, useCallback } from 'react'
import './App.css'
import Layout from './components/Layout'
import About from './pages/About'
import Projects from './pages/Projects'

type Page = 'home' | 'about' | 'projects'

type HomeProps = { onNavigate: (p: Page) => void }

function Home({ onNavigate }: HomeProps) {
  return (
    <section className="page">
      <h2 className="title">Welcome</h2>
      <p className="lead">Welcome — this is my portfolio: a carefully curated mix of experiments, polished bits, and things that only work after dark. See where the real magic happens on the <a href="/projects" onClick={(e) => { e.preventDefault(); onNavigate('projects') }}>Projects</a> page. Want to hire someone who debugs in their sleep? Reach out on <a href="https://www.linkedin.com/in/tannerfrancis/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
      <p>Use the navigation to view About and Projects.</p>
    </section>
  )
}

function App() {
  const [page, setPage] = useState<Page>('home')

  const pathToPage = useCallback((path: string): Page => {
    if (path.startsWith('/projects')) return 'projects'
    if (path.startsWith('/about')) return 'about'
    return 'home'
  }, [])

  const pageToPath = useCallback((p: Page) => {
    return p === 'home' ? '/' : `/${p}`
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

  return (
    <Layout current={page} onNavigate={navigate}>
      {page === 'home' && <Home onNavigate={navigate} />}
      {page === 'about' && <About />}
      {page === 'projects' && <Projects />}
    </Layout>
  )
}

export default App
