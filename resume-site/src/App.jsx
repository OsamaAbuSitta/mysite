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
  const [darkMode, setDarkMode] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
  )

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode)
  }, [darkMode])

  const toggleTheme = () => setDarkMode(d => !d)

  return (
    <>
      <Header toggleTheme={toggleTheme} darkMode={darkMode} />
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
