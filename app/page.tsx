import Nav from "@/components/Nav";
import GreenFooter from "@/components/GreenFooter";
import WritingList from "@/components/WritingList";
import ProjectList from "@/components/ProjectList";
import Link from "next/link";
import { getAllWriting, getAllProjects } from "@/lib/content";

export default function HomePage() {
  const allWriting = getAllWriting();
  const allProjects = getAllProjects();
  const previewWriting = allWriting.slice(0, 3);
  const previewProjects = allProjects.slice(0, 3);

  return (
    <>
      <Nav />
      <div className="wrap page-fade">
        <section className="hero-tagline">
          <h1>
            Connecting the dots across{" "}
            <span className="hero-underline">
              people
              <svg className="underline" viewBox="0 0 60 6" preserveAspectRatio="none">
                <path d="M0,4.5 C5,3.8 10,5.2 15,4.1 C20,3.0 25,5.0 30,3.8 C35,2.7 40,4.6 45,3.5 C50,2.4 55,4.2 60,3.0" />
              </svg>
            </span>{" "}
            and{" "}
            <span className="hero-underline">
              systems
              <svg className="underline" viewBox="0 0 70 6" preserveAspectRatio="none">
                <path d="M0,4.5 C6,3.6 12,5.1 18,4.0 C24,2.9 30,5.0 36,3.7 C42,2.5 48,4.7 54,3.4 C60,2.2 65,4.4 70,3.1" />
              </svg>
            </span>
            .
          </h1>
        </section>

        <section>
          <div className="sh">
            <span className="sh-label">Writing</span>
            <Link href="/writing" className="sh-more">All Essays →</Link>
          </div>
          <WritingList items={previewWriting} />
        </section>

        <section style={{ marginBottom: 0 }}>
          <div className="sh">
            <span className="sh-label">Projects</span>
            <Link href="/projects" className="sh-more">All Projects →</Link>
          </div>
          <ProjectList items={previewProjects} />
        </section>
      </div>

      <GreenFooter />
    </>
  );
}
