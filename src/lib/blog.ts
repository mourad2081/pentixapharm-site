import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const postsDirectory = path.join(process.cwd(), "src/content/blog");

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".mdx"));
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    meta: {
      title: data.title ?? "Untitled",
      date: data.date ?? "2024-01-01",
      category: data.category ?? "General",
      excerpt: data.excerpt ?? "",
      image: data.image ?? null,
      readingTime: readingTime(content).text,
    },
    content,
  };
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  return slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is NonNullable<ReturnType<typeof getPostBySlug>> => post !== null)
    .sort((a, b) => (new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()));
}
