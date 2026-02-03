import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import About from './pages/About'
import Projects from './pages/Projects'

type Page = 'home' | 'about' | 'projects'

function Home() {
  return (
    <section className="page">
      <h2 className="title">Welcome</h2>
      <p className="lead">Hi — I'm building a small portfolio site! This is the home page.</p>
      <p>Use the navigation to view About and Projects.</p>
    </section>
  )
}

function App() {
  const [page, setPage] = useState<Page>('home')

  return (
    <Layout current={page} onNavigate={setPage}>
      {page === 'home' && <Home />}
      {page === 'about' && <About />}
      {page === 'projects' && <Projects />}
    </Layout>
  )
}

export default App
