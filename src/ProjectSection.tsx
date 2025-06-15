import { ProjectSummary } from './ProjectSummary';
import type { ProjectSummaryNarrative } from './ProjectSummaryNarrative';

interface ProjectSectionProps {
    sectionId: string;
    sectionTitle: string;
    projectSummaries: ProjectSummaryNarrative[]
}

export function ProjectSection(props: ProjectSectionProps) {
    const { sectionId, sectionTitle, projectSummaries } = props;

    return <section id={sectionId}>
        <div className="container">
            <h3>{sectionTitle} ({projectSummaries.length})</h3>
            <div className="features">
                {projectSummaries.map((project, index) => (
                    <ProjectSummary
                        key={index}
                        publishedUrl={project.publishedUrl || `#${sectionId}`}
                        imageUrl={project.imageUrl}
                        technologies={project.technologies}
                        title={project.title}
                        description={project.description} />
                ))}
            </div>
        </div>
    </section>;
}
