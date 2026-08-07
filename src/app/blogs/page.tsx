import fs from 'fs';
import path from 'path';
import BlogsClient from './BlogsClient';
import { BlogPost } from '@/types';

export const metadata = {
  title: "Academic Insights & Guides",
  description: "Explore articles written by our certified educators to help you master languages, clear exam boards, and boost your corporate career.",
};

export default function BlogsPage() {
  const blogsDirectory = path.join(process.cwd(), 'src/content/blogs');
  let posts: BlogPost[] = [];

  try {
    if (fs.existsSync(blogsDirectory)) {
      const filenames = fs.readdirSync(blogsDirectory);
      posts = filenames
        .filter((file) => file.endsWith('.json'))
        .map((file) => {
          const filePath = path.join(blogsDirectory, file);
          const fileContent = fs.readFileSync(filePath, 'utf8');
          return JSON.parse(fileContent) as BlogPost;
        });
      
      // Sort posts by ID in descending order
      posts.sort((a, b) => b.id - a.id);
    }
  } catch (error) {
    console.error("Error reading blogs directory:", error);
  }

  return <BlogsClient initialPosts={posts} />;
}
