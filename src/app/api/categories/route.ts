import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DEFAULT_CATEGORIES = [
  "IELTS",
  "PTE",
  "German",
  "French",
  "Japanese",
  "Spoken English",
  "Study Abroad",
  "Career Guidance",
  "Grammar & Vocabulary"
];

function getCategoriesPath() {
  return path.join(process.cwd(), 'src/content/categories.json');
}

export async function GET() {
  try {
    const filePath = getCategoriesPath();
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      const categories = JSON.parse(content);
      return NextResponse.json({ success: true, categories });
    }
    return NextResponse.json({ success: true, categories: DEFAULT_CATEGORIES });
  } catch (error: any) {
    console.error("Error reading categories:", error);
    return NextResponse.json({ success: false, categories: DEFAULT_CATEGORIES, error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { categories } = data;

    if (!Array.isArray(categories)) {
      return NextResponse.json({ success: false, error: "Categories must be an array of strings." }, { status: 400 });
    }

    // Clean, trim and filter duplicates
    const cleaned = Array.from(new Set(categories.map((c: string) => String(c).trim()).filter(Boolean)));

    const filePath = getCategoriesPath();
    const contentDir = path.dirname(filePath);
    if (!fs.existsSync(contentDir)) {
      fs.mkdirSync(contentDir, { recursive: true });
    }

    fs.writeFileSync(filePath, JSON.stringify(cleaned, null, 2), 'utf8');
    return NextResponse.json({ success: true, categories: cleaned });
  } catch (error: any) {
    console.error("Error saving categories:", error);
    return NextResponse.json({ success: false, error: error.message || "Failed to save categories." }, { status: 500 });
  }
}
