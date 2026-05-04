import type { ProjectItem } from '../../types/landing';

type ProjectCardProps = {
  item: ProjectItem;
};

function renderVisual(visual: ProjectItem['visual']) {
  return <div className={`project-visual project-visual--${visual}`} aria-hidden="true" />;
}

export function ProjectCard({ item }: ProjectCardProps) {
  return (
    <article className="project-card">
      {renderVisual(item.visual)}
      <div className="project-card__body">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <ul className="project-card__tags">
          {item.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
