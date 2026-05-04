import { PageSection } from '../components/layout/PageSection';
import { ProjectCard } from '../components/ui/ProjectCard';
import { SectionHeading } from '../components/ui/SectionHeading';
import { projectItems } from '../content/landingContent';

export function ProjectsSection() {
  return (
    <PageSection id="projects">
      <SectionHeading
        eyebrow="Selected Work"
        title="פרויקטים נבחרים"
        description="דוגמאות לעולמות תוכן שבהם נבנו מערכות מורכבות, מאובטחות וברות תחזוקה."
      />
      <div className="project-grid">
        {projectItems.map((item) => (
          <ProjectCard key={item.title} item={item} />
        ))}
      </div>
    </PageSection>
  );
}
