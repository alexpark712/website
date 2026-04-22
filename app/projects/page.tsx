import Nav from "@/components/Nav";
import GreenFooter from "@/components/GreenFooter";
import ProjectCardGrid from "@/components/ProjectCardGrid";
import { getAllProjects } from "@/lib/content";

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <>
      <Nav />
      <div className="wrap-wide page-fade">
        <ProjectCardGrid items={projects} />
      </div>
      <GreenFooter />
    </>
  );
}
