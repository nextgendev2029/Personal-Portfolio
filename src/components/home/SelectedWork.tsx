import { getAllProjects } from '@/lib/data/projects';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/typography/Eyebrow';
import { SelectedProject } from './SelectedProject';
import { Divider } from '@/components/ui/Divider';

export function SelectedWork() {
  const projects = getAllProjects(); 
  
  return (
    <Section>
      <Container>
        <Eyebrow as="p" className="mb-12">02 / SELECTED WORK</Eyebrow>
        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <SelectedProject
              key={project.slug}
              project={project}
              index={index}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </Container>
      <Divider className="mt-24" />
    </Section>
  );
}
