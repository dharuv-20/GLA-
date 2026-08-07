import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { slug, post } = data;

    // Direct filesystem writing is blocked on production serverless environments
    if (process.env.NODE_ENV !== 'development') {
      return NextResponse.json(
        { error: "Local filesystem writing is restricted to development mode." },
        { status: 403 }
      );
    }

    const blogsDirectory = path.join(process.cwd(), 'src/content/blogs');
    
    // Ensure directory exists
    if (!fs.existsSync(blogsDirectory)) {
      fs.mkdirSync(blogsDirectory, { recursive: true });
    }

    const filePath = path.join(blogsDirectory, `${slug}.json`);
    fs.writeFileSync(filePath, JSON.stringify(post, null, 2), 'utf8');

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Failed to write local blog file:", error);
    return NextResponse.json(
      { error: error.message || "Failed to save file locally" },
      { status: 500 }
    );
  }
}
