import { motion } from 'framer-motion';
import { Download, User, Code, Server, Settings, ToolCase , MonitorCog , Braces } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import useSWR from 'swr';
import { fetchGitHubUser } from '../../lib/github';

export function About() {
    const { data: githubUser, error: githubError, isLoading: githubLoading } = useSWR('github-user', fetchGitHubUser);

    const skills = [
        {
            icon: <ToolCase className="h-6 w-6" />,
            title: "Solutions Architecture",
            description: "Designing scalable, cloud-native systems using microservices"
        },
        {
            icon: <Braces className="h-6 w-6" />,
            title: "Full Stack Developer", //"Full Stack Developer",
            description: ".Net Core, JS, TS, ReactJs, Angular, Sql Server, Oracle "
        }, 
        {
            icon: <User className="h-6 w-6" />,
            title: "Team Leadership & Mentorship",
            description: "Leading engineering teams, mentoring developers"
        },
        {
            icon: <Code className="h-6 w-6" />,
            title: "Development Strategy & Consulting",
            description: "Advising organizations on software strategy, applying CQRS, Event Sourcing, DDD, and N-Tier effectively, and enabling DevOps practices"
        },
        {
            icon: <Server className="h-6 w-6" />,
            title: "DevOps & Security",
            description: "Driving automation and resilience through Docker, Kubernetes, CI/CD pipelines, and secure-by-design practices"
        }
    ];

    return (
        <section id="about" className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Passionate about building scalable, enterprise-grade solutions
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="space-y-6">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                I'm a Solutions Architect and Senior .NET Developer with over 11 years of experience
                                designing and delivering enterprise-grade platforms. My expertise spans cloud-native
                                architecture, microservices, DevOps automation, and SaaS product engineering.
                            </p>

                            <p className="text-lg text-muted-foreground leading-relaxed">
                                I specialize in building scalable, resilient systems that integrate complex ecosystems —
                                working on various types of software architecture such as CQRS, Event Sourcing, Domain-Driven Design (DDD), N-Tier, and leveraging a wide range of technologies.
                            </p>

                            <div className="bg-card/50 rounded-lg p-6 border-l-4 border-primary">
                                <h4 className="font-semibold text-foreground mb-3">Beyond implementation, I drive architecture vision and technical leadership:</h4>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-start">
                                        <span className="text-primary mr-2">•</span>
                                        Define solution & cloud architectures aligned with business goals
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary mr-2">•</span>
                                        Lead engineering teams in building secure, distributed platforms
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary mr-2">•</span>
                                        Balance technical depth with strategic direction, bridging development, operations, and business stakeholders
                                    </li>
                                </ul>
                            </div>

                            {githubLoading ? (
                                <div className="flex items-center space-x-4 p-4 bg-card rounded-lg border animate-pulse">
                                    <div className="w-16 h-16 bg-muted rounded-full" />
                                    <div className="flex-1">
                                        <div className="h-4 bg-muted rounded w-1/2 mb-2" />
                                        <div className="h-3 bg-muted rounded w-3/4 mb-2" />
                                        <div className="h-3 bg-muted rounded w-1/3" />
                                    </div>
                                </div>
                            ) : githubUser ? (
                                <div className="flex items-center space-x-4 p-4 bg-card rounded-lg border">
                                    <img
                                        src={githubUser.avatar_url}
                                        alt={githubUser.name || 'Osama Abu Sitta'}
                                        className="w-16 h-16 rounded-full"
                                        onError={(e) => {
                                            const target = e.currentTarget;
                                            target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(githubUser.name || 'Osama Abu Sitta')}&background=0ea5e9&color=fff`;
                                        }}
                                    />
                                    <div>
                                        <h3 className="font-semibold">{githubUser.name}</h3>
                                        <p className="text-sm text-muted-foreground line-clamp-2">{githubUser.bio}</p>
                                        <div className="flex space-x-4 text-sm text-muted-foreground mt-1">
                                            <span>{githubUser.followers} followers</span>
                                            <span>{githubUser.public_repos} repositories</span>
                                        </div>
                                    </div>
                                </div>
                            ) : githubError ? (
                                <div className="flex items-center space-x-4 p-4 bg-card rounded-lg border border-orange-200 dark:border-orange-800">
                                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg">
                                        OAS
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Osama Abu Sitta</h3>
                                        <p className="text-sm text-muted-foreground">Solutions Architect & Senior .NET Developer</p>
                                        <div className="flex space-x-4 text-sm text-muted-foreground mt-1">
                                            <span>GitHub profile loading...</span>
                                        </div>
                                    </div>
                                </div>
                            ) : null}

                            <Button size="lg" className="group">
                                <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                                Download CV
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="hover:shadow-lg transition-shadow">
                                    <CardContent className="p-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="text-primary">{skill.icon}</div>
                                            <div>
                                                <h3 className="font-semibold mb-2">{skill.title}</h3>
                                                <p className="text-muted-foreground">{skill.description}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}