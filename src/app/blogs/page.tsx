import type { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import BlogsClient from './BlogsClient';
import { BlogPost } from '@/types';

export const metadata: Metadata = {
  title: "Academic Insights & Study Guides | Language Exam Tips",
  description: "Read expert study guides on IELTS scoring, PTE tricks, and Goethe German certification written by senior trainers at The Global Language Academy.",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Academic Insights & Study Guides | The Global Language Academy",
    description: "Expert articles on language exams, study abroad preparation, and career development from certified educators.",
    url: "https://tglalearning.com/blogs",
    type: "website",
  },
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
          const post = JSON.parse(fileContent) as BlogPost;
          post.slug = file.replace('.json', '');
          return post;
        });
      
      // Sort posts by ID in descending order
      posts.sort((a, b) => b.id - a.id);
    }
  } catch (error) {
    console.error("Error reading blogs directory:", error);
  }

  return <BlogsClient initialPosts={posts} />;
}
