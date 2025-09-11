import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

const educationData = [
  {
    institution: "Heriot-Watt University",
    degree: "Master's Degree",
    field: "Artificial Intelligence",
    period: "Sep 2021 – Apr 2024",
    location: "Dubai, UAE",
    logo: "/logos/heriot-watt.png", // You can add actual logos later
    description: "Advanced studies in machine learning, neural networks, and AI applications in enterprise systems."
  },
  {
    institution: "AlZaytoonah University of Jordan",
    degree: "Bachelor's Degree",
    field: "Software Engineering",
    period: "2009 – 2014",
    location: "Amman, Jordan",
    logo: "/logos/alzaytoonah.png", // You can add actual logos later
    description: "Comprehensive foundation in software development, algorithms, and system design."
  }
];

export function Education() {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic foundation in software engineering and artificial intelligence
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
          
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 hidden md:block" />
                
                <div className="md:ml-20">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                            <GraduationCap className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{edu.institution}</CardTitle>
                            <CardDescription className="text-lg font-medium text-foreground">
                              {edu.degree} in {edu.field}
                            </CardDescription>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div className="flex items-center text-muted-foreground mb-2 sm:mb-0">
                          <Calendar className="h-4 w-4 mr-2" />
                          {edu.period}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-2" />
                          {edu.location}
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {edu.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}