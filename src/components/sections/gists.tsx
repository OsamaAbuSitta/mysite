import { motion } from 'framer-motion';
import { Copy, ExternalLink, Calendar, Check } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import useSWR from 'swr';
import { fetchGitHubGists } from '../../lib/github';
import { useState } from 'react';

export function Gists() {
  const { data: gists, isLoading, error } = useSWR('github-gists', fetchGitHubGists);
  const [copiedGist, setCopiedGist] = useState<string | null>(null);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getLanguageColor = (language: string | null) => {
    const colors: Record<string, string> = {
      'JavaScript': 'bg-yellow-500',
      'TypeScript': 'bg-blue-500',
      'C#': 'bg-purple-500',
      'Python': 'bg-green-500',
      'HTML': 'bg-orange-500',
      'CSS': 'bg-blue-400',
      'JSON': 'bg-gray-500',
    };
    return colors[language || ''] || 'bg-gray-400';
  };

  const copyToClipboard = async (content: string, gistId: string) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedGist(gistId);
      setTimeout(() => setCopiedGist(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const getFirstFile = (files: Record<string, any>) => {
    const fileKeys = Object.keys(files);
    return fileKeys.length > 0 ? files[fileKeys[0]] : null;
  };

  return (
    <section id="gists" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Code Snippets & Gists</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Useful code snippets and utilities I've created and shared
          </p>
        </motion.div>

        {isLoading ? (
           <p className="text-muted-foreground mb-4">
              Loading ...
            </p>
          // <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          //   {[...Array(6)].map((_, i) => (
          //     <Card key={i} className="animate-pulse">
          //       <CardHeader>
          //         <div className="h-4 bg-muted rounded w-3/4 mb-2" />
          //         <div className="h-3 bg-muted rounded w-1/2" />
          //       </CardHeader>
          //       <CardContent>
          //         <div className="h-20 bg-muted rounded mb-4" />
          //         <div className="h-8 bg-muted rounded" />
          //       </CardContent>
          //     </Card>
          //   ))}
          // </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">
              Unable to load gists from GitHub API. Showing sample content.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gists?.map((gist, index) => {
                const firstFile = getFirstFile(gist.files);
                const fileCount = Object.keys(gist.files).length;
                
                return (
                  <motion.div
                    key={gist.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow group">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                              {gist.description || firstFile?.filename || 'Untitled Gist'}
                            </CardTitle>
                            <CardDescription className="flex items-center mt-2">
                              <Calendar className="h-3 w-3 mr-1" />
                              {formatDate(gist.updated_at)}
                            </CardDescription>
                          </div>
                          {firstFile?.language && (
                            <Badge variant="outline" className="ml-2">
                              <div className={`w-2 h-2 rounded-full mr-1 ${getLanguageColor(firstFile.language)}`} />
                              {firstFile.language}
                            </Badge>
                          )}
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        {firstFile && (
                          <div className="mb-4">
                            <div className="bg-muted rounded-md p-3 text-sm font-mono overflow-hidden">
                              <pre className="line-clamp-4 text-xs whitespace-pre-wrap">
                                {firstFile.content}
                              </pre>
                            </div>
                          </div>
                        )}
                        
                        {fileCount > 1 && (
                          <p className="text-sm text-muted-foreground mb-4">
                            +{fileCount - 1} more file{fileCount > 2 ? 's' : ''}
                          </p>
                        )}
                        
                        <div className="flex space-x-2">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => firstFile && copyToClipboard(firstFile.content, gist.id)}
                            className="flex-1"
                          >
                            {copiedGist === gist.id ? (
                              <Check className="mr-2 h-4 w-4" />
                            ) : (
                              <Copy className="mr-2 h-4 w-4" />
                            )}
                            {copiedGist === gist.id ? 'Copied!' : 'Copy'}
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <a href={gist.html_url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gists?.slice(0, 3).map((gist, index) => {
              const firstFile = getFirstFile(gist.files);
              const fileCount = Object.keys(gist.files).length;
              
              return (
                <motion.div
                  key={gist.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow group">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                            {gist.description || firstFile?.filename || 'Untitled Gist'}
                          </CardTitle>
                          <CardDescription className="flex items-center mt-2">
                            <Calendar className="h-3 w-3 mr-1" />
                            {formatDate(gist.updated_at)}
                          </CardDescription>
                        </div>
                        {firstFile?.language && (
                          <Badge variant="outline" className="ml-2">
                            <div className={`w-2 h-2 rounded-full mr-1 ${getLanguageColor(firstFile.language)}`} />
                            {firstFile.language}
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      {firstFile && (
                        <div className="mb-4">
                          <div className="bg-muted rounded-md p-3 text-sm font-mono min-w-0">
                            <pre className="text-xs md:grid-cols-1 whitespace-pre-wrap break-words break-all max-w-full min-w-0 overflow-hidden" >
                              {firstFile.content.substring(0, 150)}...
                            </pre>
                          </div>
                        </div>
                      )}
                      
                      {fileCount > 1 && (
                        <p className="text-sm text-muted-foreground mb-4">
                          +{fileCount - 1} more file{fileCount > 2 ? 's' : ''}
                        </p>
                      )}
                      
                      <div className="flex space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => firstFile && copyToClipboard(firstFile.content, gist.id)}
                          className="flex-1"
                        >
                          {copiedGist === gist.id ? (
                            <Check className="mr-2 h-4 w-4" />
                          ) : (
                            <Copy className="mr-2 h-4 w-4" />
                          )}
                          {copiedGist === gist.id ? 'Copied!' : 'Copy'}
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <a href={gist.html_url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" asChild>
            <a 
              href="https://gist.github.com/OsamaAbuSitta" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View All Gists on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}