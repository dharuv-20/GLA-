import { MetadataRoute } from 'next';
import { coursesList } from '@/data/courses-db';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.glaind.com";

  // Static routes
  const routes = ["", "/about", "/courses", "/blogs", "/services", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic course landing page routes
  const courseRoutes = coursesList.map((course) => ({
    url: `${baseUrl}/courses/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...routes, ...courseRoutes];
}
