import Header from './components/Header'
import Summary from './components/Summary'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Languages from './components/Languages'

export default function App() {
  return (
    <>
      <Header />
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
