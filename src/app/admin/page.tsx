import fs from 'fs';
import path from 'path';
import Script from 'next/script';
import AdminDashboard from './AdminDashboard';
import { BlogPost } from '@/types';

export const metadata = {
  title: "TGLA Control Panel | Global Language Academy",
  robots: "noindex, nofollow",
};

export default function AdminPage() {
  const blogsDirectory = path.join(process.cwd(), 'src/content/blogs');
  const categoriesFile = path.join(process.cwd(), 'src/content/categories.json');
  let posts: BlogPost[] = [];
  let categories: string[] = [
    'IELTS',
    'PTE',
    'German',
    'French',
    'Japanese',
    'Spoken English',
    'Study Abroad',
    'Career Guidance',
    'Grammar & Vocabulary'
  ];

  try {
    if (fs.existsSync(categoriesFile)) {
      const catContent = fs.readFileSync(categoriesFile, 'utf8');
      categories = JSON.parse(catContent);
    }
  } catch (error) {
    console.error("Error reading categories for admin:", error);
  }

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
    console.error("Error reading blogs directory for admin panel:", error);
  }

  return (
    <>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" strategy="lazyOnload" />
      <AdminDashboard initialPosts={posts} initialCategories={categories} />
    </>
  );
}
