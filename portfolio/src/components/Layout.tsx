import React, { useEffect, useState } from 'react'

type Page = 'home' | 'about' | 'projects'

interface LayoutProps {
  children: React.ReactNode
  current: Page
  onNavigate: (page: Page) => void
}

export default function Layout({ children, current, onNavigate }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    // close menu when route changes
    setMenuOpen(false)
  }, [current])

  return (
    <div id="site-root">
      <header className="site-header">
        <div className="brand">
          <button
            className="hamburger"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((s) => !s)}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
          <h1 className="site-title">Tanner Francis</h1>
        </div>

        <nav className={"site-nav " + (menuOpen ? 'open' : '')} aria-label="Primary">
          <button
            className={"nav-link " + (current === 'home' ? 'active' : '')}
            onClick={() => onNavigate('home')}
          >
            Home
          </button>
          <button
            className={"nav-link " + (current === 'about' ? 'active' : '')}
            onClick={() => onNavigate('about')}
          >
            About
          </button>
          <button
            className={"nav-link " + (current === 'projects' ? 'active' : '')}
            onClick={() => onNavigate('projects')}
          >
            Projects
          </button>
        </nav>
      </header>

      <main className="site-main">{children}</main>

      <footer className="site-footer">
        <small>© {new Date().getFullYear()} Tanner Francis — Built with React + Vite</small>
      </footer>
    </div>
  )
}
