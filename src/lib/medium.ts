import type { MediumPost } from '../types';

const MEDIUM_RSS_URL = 'https://medium.com/feed/@osama.abusitta';

// Since we can't directly fetch RSS due to CORS, we'll use a proxy service
const RSS_PROXY = 'https://api.rss2json.com/v1/api.json?rss_url=';

export async function fetchMediumPosts(): Promise<MediumPost[]> {
  try {
    const response = await fetch(`${RSS_PROXY}${encodeURIComponent(MEDIUM_RSS_URL)}`);
    if (!response.ok) {
      throw new Error('Failed to fetch Medium posts');
    }
    
    const data = await response.json();
    
    if (data.status !== 'ok') {
      throw new Error('RSS feed error');
    }
    
    return data.items.map((item: any) => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      description: item.description,
      categories: item.categories || [],
      guid: item.guid
    }));
  } catch (error) {
    console.error('Error fetching Medium posts:', error);
    // Return mock data as fallback
    return [
      {
        title: "Building Scalable Microservices with .NET 8",
        link: "https://medium.com/@osama.abusitta/building-scalable-microservices",
        pubDate: "2024-01-15T10:00:00Z",
        description: "Learn how to build enterprise-grade microservices using .NET 8, Docker, and Kubernetes.",
        categories: [".NET", "Microservices", "Docker"],
        guid: "1"
      },
      {
        title: "DevOps Best Practices for Modern Applications",
        link: "https://medium.com/@osama.abusitta/devops-best-practices",
        pubDate: "2024-01-10T10:00:00Z",
        description: "Implementing CI/CD pipelines and infrastructure as code for scalable applications.",
        categories: ["DevOps", "CI/CD", "Infrastructure"],
        guid: "2"
      }
    ];
  }
}