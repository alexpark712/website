import Link from "next/link";

export interface ProjectItem {
  slug: string;
  title: string;
  description: string;
  tags: string[];
}

export default function ProjectList({ items }: { items: ProjectItem[] }) {
  return (
    <div className="project-list">
      {items.map((item) => (
        <Link key={item.slug} href={`/projects/${item.slug}`} className="pitem">
          <div className="pname">{item.title}</div>
          <div>
            <div className="pdesc">{item.description}</div>
            <div className="ptags">
              {item.tags.map((tag) => (
                <span key={tag} className="ptag">{tag}</span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
