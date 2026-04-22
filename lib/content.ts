import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export interface WritingFrontmatter {
  title: string;
  date: string;
  tag: string;
  readTime: string;
  excerpt: string;
}

export interface ProjectFrontmatter {
  title: string;
  description: string;
  tags: string[];
}

function getFiles(dir: string): string[] {
  return fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
}

export function getAllWriting() {
  const dir = path.join(contentDir, "writing");
  return getFiles(dir)
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const raw = fs.readFileSync(path.join(dir, file), "utf-8");
      const { data } = matter(raw);
      return { slug, ...(data as WritingFrontmatter) };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getWritingBySlug(slug: string) {
  const file = path.join(contentDir, "writing", `${slug}.mdx`);
  const raw = fs.readFileSync(file, "utf-8");
  const { data, content } = matter(raw);
  return { frontmatter: data as WritingFrontmatter, content };
}

export function getAllProjects() {
  const dir = path.join(contentDir, "projects");
  return getFiles(dir).map((file) => {
    const slug = file.replace(".mdx", "");
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const { data } = matter(raw);
    return { slug, ...(data as ProjectFrontmatter) };
  });
}

export function getProjectBySlug(slug: string) {
  const file = path.join(contentDir, "projects", `${slug}.mdx`);
  const raw = fs.readFileSync(file, "utf-8");
  const { data, content } = matter(raw);
  return { frontmatter: data as ProjectFrontmatter, content };
}
