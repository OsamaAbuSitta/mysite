import { useState, useEffect } from 'react'
import Header from './components/Header'
import Summary from './components/Summary'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Languages from './components/Languages'

export default function App() {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem('theme') || 'system'
  )

  useEffect(() => {
    localStorage.setItem('theme', theme)
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
    const apply = () => {
      const dark = theme === 'dark' || (theme === 'system' && prefersDark.matches)
      document.body.classList.toggle('dark', dark)
    }
    apply()
    if (theme === 'system') {
      prefersDark.addEventListener('change', apply)
      return () => prefersDark.removeEventListener('change', apply)
    }
  }, [theme])

  const toggleTheme = () =>
    setTheme(t => (t === 'system' ? 'light' : t === 'light' ? 'dark' : 'system'))

  return (
    <>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <main>
        <Summary />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Education />
        <Languages />
      </main>
    </>
  )
}
