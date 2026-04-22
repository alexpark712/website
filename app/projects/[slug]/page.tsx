import Nav from "@/components/Nav";
import GreenFooter from "@/components/GreenFooter";
import { getAllProjects, getProjectBySlug } from "@/lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectSlugPage({ params }: { params: { slug: string } }) {
  let data;
  try {
    data = getProjectBySlug(params.slug);
  } catch {
    notFound();
  }
  const { frontmatter, content } = data;

  return (
    <>
      <Nav />
      <div className="wrap page-fade">
        <Link href="/projects" className="back-link">← Projects</Link>
        <article className="prose-article">
          <h1>{frontmatter.title}</h1>
          <div className="article-meta">
            {frontmatter.tags.map((tag) => (
              <span key={tag} className="ptag" style={{ marginRight: "0.35rem" }}>{tag}</span>
            ))}
          </div>
          <MDXRemote source={content} />
        </article>
      </div>
      <GreenFooter />
    </>
  );
}
