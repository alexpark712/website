import Nav from "@/components/Nav";
import GreenFooter from "@/components/GreenFooter";
import { getAllWriting, getWritingBySlug } from "@/lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const writing = getAllWriting();
  return writing.map((w) => ({ slug: w.slug }));
}

export default function WritingSlugPage({ params }: { params: { slug: string } }) {
  let data;
  try {
    data = getWritingBySlug(params.slug);
  } catch {
    notFound();
  }
  const { frontmatter, content } = data;

  return (
    <>
      <Nav />
      <div className="wrap page-fade">
        <Link href="/writing" className="back-link">← Writing</Link>
        <article className="prose-article">
          <h1>{frontmatter.title}</h1>
          <div className="article-meta">
            <span className="wtag">{frontmatter.tag}</span>
            <span>{frontmatter.readTime} read</span>
            <span>{new Date(frontmatter.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
          </div>
          <MDXRemote source={content} />
        </article>
      </div>
      <GreenFooter />
    </>
  );
}
