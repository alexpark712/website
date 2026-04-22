import Nav from "@/components/Nav";
import GreenFooter from "@/components/GreenFooter";
import WritingCardGrid from "@/components/WritingCardGrid";
import { getAllWriting } from "@/lib/content";

export default function WritingPage() {
  const writing = getAllWriting();

  return (
    <>
      <Nav />
      <div className="wrap-wide page-fade">
        <WritingCardGrid items={writing} />
      </div>
      <GreenFooter />
    </>
  );
}
