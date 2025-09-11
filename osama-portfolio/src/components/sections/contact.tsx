import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageSquare, Send, HelpCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '' // Spam protection
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check
    if (formData.honeypot) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual implementation)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '', honeypot: '' });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/OsamaAbuSitta',
      icon: <Github className="h-6 w-6" />,
      description: 'Check out my repositories and contributions',
      hoverColor: 'hover:text-gray-900 dark:hover:text-white',
      glowColor: 'hover:shadow-lg hover:shadow-gray-500/25'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/osama-abu-sitta-baa020135/',
      icon: <Linkedin className="h-6 w-6" />,
      description: 'Connect with me professionally',
      hoverColor: 'hover:text-[#0A66C2]',
      glowColor: 'hover:shadow-lg hover:shadow-blue-500/25'
    },
    {
      name: 'Stack Overflow',
      url: 'https://stackoverflow.com/users/3926461/osama-abusitta',
      icon: <HelpCircle className="h-6 w-6" />,
      description: 'See my questions and answers',
      hoverColor: 'hover:text-[#F48024]',
      glowColor: 'hover:shadow-lg hover:shadow-orange-500/25'
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@osama.abusitta',
      icon: <MessageSquare className="h-6 w-6" />,
      description: 'Read my technical articles',
      hoverColor: 'hover:text-green-600 dark:hover:text-green-400',
      glowColor: 'hover:shadow-lg hover:shadow-green-500/25'
    },
    {
      name: 'Email',
      url: 'mailto:osama.abusitta@gmail.com',
      icon: <Mail className="h-6 w-6" />,
      description: 'Send me an email directly',
      hoverColor: 'hover:text-blue-600 dark:hover:text-blue-400',
      glowColor: 'hover:shadow-lg hover:shadow-blue-500/25'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss your next project or collaboration opportunity
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
                <CardDescription>
                  I'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Message sent!</h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot field - hidden from users */}
                    <input
                      type="text"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={handleChange}
                      style={{ display: 'none' }}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                    
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
                        placeholder="Tell me about your project or how I can help..."
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-4">Connect with me</h3>
              <p className="text-muted-foreground">
                Find me on these platforms or reach out directly
              </p>
            </div>

            <TooltipProvider>
              <div className="flex flex-wrap justify-center gap-6">
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${link.name} - ${link.description}`}
                          className={`
                            group relative flex items-center justify-center w-16 h-16 
                            bg-card border border-border rounded-xl
                            text-muted-foreground transition-all duration-300 ease-out
                            hover:scale-110 hover:border-transparent
                            ${link.hoverColor} ${link.glowColor}
                          `}
                        >
                          <div className="transition-transform duration-300 group-hover:scale-110">
                            {link.icon}
                          </div>
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="font-medium">{link.name}</p>
                        <p className="text-xs text-muted-foreground">{link.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </motion.div>
                ))}
              </div>
            </TooltipProvider>

            <div className="pt-8 text-center">
              <p className="text-muted-foreground mb-4">
                Let's connect and discuss opportunities
              </p>
              <div className="text-sm text-muted-foreground">
                Available for freelance projects and full-time opportunities
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}