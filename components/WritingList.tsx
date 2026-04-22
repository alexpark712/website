import Link from "next/link";

export interface WritingItem {
  slug: string;
  title: string;
  tag: string;
  readTime: string;
  date: string;
  excerpt: string;
}

export default function WritingList({ items }: { items: WritingItem[] }) {
  return (
    <div className="writing-list">
      {items.map((item) => (
        <Link key={item.slug} href={`/writing/${item.slug}`} className="witem">
          <div>
            <span className="wtag">{item.tag}</span>
            <div className="wtitle">{item.title}</div>
          </div>
          <span className="wtime">{item.readTime}</span>
        </Link>
      ))}
    </div>
  );
}
