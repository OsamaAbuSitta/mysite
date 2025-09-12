import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, Trophy } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';

const certificatesData = [
    {
        name: "C# TestDome \"Ranking in the Top 10%\"",
        issuer: "TestDome",
        issueDate: "Mar 2023",
        logo: "/logos/testdome.png",
        credentialUrl: "https://www.testdome.com/certificates/c-sharp",
        category: "Programming",
        color: "bg-green-100 dark:bg-green-900/20 border-green-200 dark:border-green-800"
    },
    {
        name: "Microsoft Certified: Azure Fundamentals",
        issuer: "Microsoft",
        issueDate: "Sep 2020",
        logo: "/logos/microsoft.png",
        credentialUrl: "https://learn.microsoft.com/en-us/certifications/azure-fundamentals/",
        category: "Cloud",
        color: "bg-blue-100 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800"
    },
    {
        name: "Developing ASP.NET MVC Web Applications",
        issuer: "Microsoft",
        issueDate: "May 2020",
        logo: "/logos/microsoft.png",
        credentialUrl: "https://learn.microsoft.com/en-us/certifications/",
        category: "Web Development",
        color: "bg-purple-100 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800"
    },
    {
        name: "MCSA: Web Applications",
        issuer: "Microsoft",
        issueDate: "May 2020",
        logo: "/logos/microsoft.png",
        credentialUrl: "https://learn.microsoft.com/en-us/certifications/",
        category: "Web Development",
        color: "bg-purple-100 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800"
    },
    {
        name: "Programming in HTML5 with JavaScript and CSS3",
        issuer: "Microsoft",
        issueDate: "Dec 2019",
        logo: "/logos/microsoft.png",
        credentialUrl: "https://learn.microsoft.com/en-us/certifications/",
        category: "Frontend",
        color: "bg-orange-100 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800"
    },
    {
        name: "Microsoft Certified Professional",
        issuer: "Microsoft",
        issueDate: "Oct 2018",
        logo: "/logos/microsoft.png",
        credentialUrl: "https://learn.microsoft.com/en-us/certifications/",
        category: "Professional",
        color: "bg-blue-100 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800"
    },
    {
        name: "Programming in C#",
        issuer: "Microsoft",
        issueDate: "Oct 2018",
        logo: "/logos/microsoft.png",
        credentialUrl: "https://learn.microsoft.com/en-us/certifications/",
        category: "Programming",
        color: "bg-green-100 dark:bg-green-900/20 border-green-200 dark:border-green-800"
    },
    {
        name: "Professional Scrum Master I",
        issuer: "Scrum.org",
        issueDate: "Apr 2018",
        logo: "/logos/scrum-org.png",
        credentialUrl: "https://www.scrum.org/professional-scrum-certifications/professional-scrum-master-assessments",
        category: "Agile",
        color: "bg-yellow-100 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800"
    }
];

const categories = [...new Set(certificatesData.map(cert => cert.category))];

export function Certificates() {
    return (
        <section id="certificates" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Professional certifications demonstrating expertise across various technologies
                    </p>
                </motion.div>

                {/* Category badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-2 mb-12"
                >
                    {categories.map((category) => (
                        <Badge key={category} variant="outline" className="text-sm py-1 px-3">
                            {category}
                        </Badge>
                    ))}
                </motion.div>

                {/* Certificates grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificatesData.map((cert, index) => (
                        <motion.div
                            key={cert.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className={`h-full hover:shadow-lg transition-all group ${cert.color}`}>
                                <CardHeader>
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-10 h-10 bg-background rounded-lg flex items-center justify-center shadow-sm">
                                                <Award className="h-5 w-5 text-primary" />
                                            </div>
                                            <div className="flex-1">
                                                <Badge variant="secondary" className="text-xs mb-2">
                                                    {cert.category}
                                                </Badge>
                                            </div>
                                        </div>
                                        <Trophy className="h-4 w-4 text-primary opacity-60" />
                                    </div>

                                    <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                                        {cert.name}
                                    </CardTitle>

                                    <CardDescription className="font-medium">
                                        {cert.issuer}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center text-sm text-muted-foreground">
                                            <Calendar className="h-4 w-4 mr-2" />
                                            {cert.issueDate}
                                        </div>
                                    </div>

                                    <Button
                                        variant="outline"
                                        size="sm"
                                        asChild
                                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                                    >
                                        <a
                                            href={cert.credentialUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ExternalLink className="mr-2 h-4 w-4" />
                                            View Credential
                                        </a>
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Summary stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-16"
                >
                    <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
                        <CardContent className="p-8">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                                <div>
                                    <div className="text-3xl font-bold text-primary mb-2">
                                        {certificatesData.length}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Total Certifications
                                    </div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-primary mb-2">
                                        {certificatesData.filter(cert => cert.issuer === 'Microsoft').length}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Microsoft Certified
                                    </div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-primary mb-2">
                                        {categories.length}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Technology Areas
                                    </div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-primary mb-2">
                                        11+
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Years Experience
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}