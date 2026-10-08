import { MetadataRoute } from 'next';
import { coursesList } from '@/data/courses-db';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tglalearning.com";

  // Core Static Routes
  const staticRoutes = [
    { path: "", priority: 1.0, changeFrequency: 'daily' as const },
    { path: "/courses", priority: 0.9, changeFrequency: 'weekly' as const },
    { path: "/about", priority: 0.8, changeFrequency: 'monthly' as const },
    { path: "/services", priority: 0.8, changeFrequency: 'monthly' as const },
    { path: "/contact", priority: 0.8, changeFrequency: 'monthly' as const },
    { path: "/blogs", priority: 0.8, changeFrequency: 'weekly' as const },
    { path: "/sitemap", priority: 0.5, changeFrequency: 'monthly' as const },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: 'yearly' as const },
    { path: "/terms", priority: 0.3, changeFrequency: 'yearly' as const },
  ].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // Dynamic course landing page routes
  const courseRoutes = coursesList.map((course) => ({
    url: `${baseUrl}/courses/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...courseRoutes];
}
