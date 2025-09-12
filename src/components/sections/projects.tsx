import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, GitFork, Download } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import useSWR from 'swr';
import { fetchPinnedRepos } from '../../lib/github';
import { fetchVSCodeExtension } from '../../lib/vscode';

const featuredProjects = [
  {
    title: "QueryBuilder",
    description: "A powerful query builder library for .NET applications with fluent API design.",
    tech: ["C#", ".NET", "LINQ"],
    github: "https://github.com/OsamaAbuSitta/QueryBuilder",
    type: "github"
  },
  {
    title: "ListMapping",
    description: "A lightweight C# utility library for mapping lists and collections efficiently, reducing boilerplate when transforming data between object models.",
    tech: ["C#", "Library", "Data Mapping"],
    github: "https://github.com/OsamaAbuSitta/ListMapping",
    type: "github"
  },
  {
    title: "SmtpMailTest",
    description: "SMTP mail testing utility for developers to test email functionality.",
    tech: ["C#", ".NET", "SMTP"],
    github: "https://github.com/OsamaAbuSitta/SmtpMailTest",
    type: "github"
  },
  {
    title: "Angular Clips",
    description: "A modern video sharing platform built with Angular and Firebase.",
    tech: ["Angular", "TypeScript", "Firebase"],
    github: "https://github.com/OsamaAbuSitta/angular_clips",
    demo: "https://angular-clips-psi.vercel.app/",
    type: "github"
  },
  {
    title: "XTinyLog",
    description: "Lightweight logging library for .NET applications with minimal overhead.",
    tech: ["C#", ".NET", "Logging"],
    github: "https://github.com/OsamaAbuSitta/XTinyLog",
    type: "github"
  },
  {
    title: "Tic Tac Toe Game",
    description: "Interactive tic-tac-toe game built with vanilla JavaScript.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/OsamaAbuSitta/tic-tac-toe-game-js",
    demo: "https://osamaabusitta.github.io/tic-tac-toe-game-js/index.html",
    type: "github"
  }
];

export function Projects() {
  const { data: pinnedRepos } = useSWR('pinned-repos', fetchPinnedRepos);
  const { data: vsCodeExtension } = useSWR('vscode-extension', fetchVSCodeExtension);

  const getInstallCount = () => {
    if (!vsCodeExtension) return 0;
    const installStat = vsCodeExtension.statistics.find(s => s.statisticName === 'install');
    return installStat ? installStat.value : 0;
  };

  const getRating = () => {
    if (!vsCodeExtension) return 0;
    const ratingStat = vsCodeExtension.statistics.find(s => s.statisticName === 'averagerating');
    return ratingStat ? ratingStat.value : 0;
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work in enterprise solutions, open-source projects, and developer tools
          </p>
        </motion.div>

        {/* VS Code Extension */}
        {vsCodeExtension && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">{vsCodeExtension.displayName}</CardTitle>
                    <CardDescription className="text-lg mt-2">
                      {vsCodeExtension.shortDescription}
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{getInstallCount().toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">installs</div>
                    <div className="flex items-center mt-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-sm">{getRating().toFixed(1)}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardFooter>
                <div className="flex items-center space-x-4">
                  <Button asChild>
                    <a 
                      href="https://marketplace.visualstudio.com/items?itemName=OAS.05D8FE2B-55EC-4A28-8865-C2570F30A1C9"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Install from Marketplace
                    </a>
                  </Button>
                  <div className="flex space-x-2">
                    {vsCodeExtension.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        )}

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => {
            const repoData = pinnedRepos?.find(repo => 
              repo.name.toLowerCase() === project.title.toLowerCase().replace(/\s+/g, '') ||
              repo.name === project.title.replace(/\s+/g, '_').toLowerCase() ||
              repo.name === project.title
            );

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow group">
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline">{tech}</Badge>
                      ))}
                    </div>
                    
                    {repoData && (
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 mr-1" />
                          {repoData.stargazers_count}
                        </div>
                        <div className="flex items-center">
                          <GitFork className="h-4 w-4 mr-1" />
                          {repoData.forks_count}
                        </div>
                        {repoData.language && (
                          <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-primary mr-1" />
                            {repoData.language}
                          </div>
                        )}
                      </div>
                    )}
                  </CardContent>
                  
                  <CardFooter className="flex space-x-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}