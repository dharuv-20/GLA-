import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { slug } = data;

    // Local file deletions are only authorized in development mode
    if (process.env.NODE_ENV !== 'development') {
      return NextResponse.json(
        { error: "Local deletion is only allowed in development mode." },
        { status: 403 }
      );
    }

    const blogsDirectory = path.join(process.cwd(), 'src/content/blogs');
    const filePath = path.join(blogsDirectory, `${slug}.json`);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: "Target file does not exist." }, { status: 404 });
    }
  } catch (error: any) {
    console.error("Failed to delete local blog file:", error);
    return NextResponse.json(
      { error: error.message || "Failed to delete file locally" },
      { status: 500 }
    );
  }
}
