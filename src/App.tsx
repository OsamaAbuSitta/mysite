import { ThemeProvider } from './components/theme-provider';
import { Navigation } from './components/navigation';
import { Hero } from './components/sections/hero';
import { About } from './components/sections/about';
import { Projects } from './components/sections/projects';
import { Blog } from './components/sections/blog';
import { Gists } from './components/sections/gists';
import { Education } from './components/sections/education';
import { Certificates } from './components/sections/certificates';
import { Contact } from './components/sections/contact';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="osama-portfolio-theme">
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Projects />
          <Blog />
          <Gists />
          <Education />
          <Certificates />
          <Contact />
        </main>
       <footer className="bg-muted/30 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-muted-foreground">
              © 2025 Osama Abu Sitta. Built with React, Vite, and Tailwind CSS.{' '}
              <a
                href="https://github.com/OsamaAbuSitta/osama-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors underline underline-offset-4"
              >
                View Source
              </a>
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;