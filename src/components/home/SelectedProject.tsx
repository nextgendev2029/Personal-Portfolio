'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CaseStudy } from '@/lib/types';
import { Eyebrow } from '@/components/typography/Eyebrow';
import { BodyText } from '@/components/typography/BodyText';
import { Tag } from '@/components/ui/Tag';
import { FadeIn, ImageReveal } from '@/components/motion';

interface SelectedProjectProps {
  project: CaseStudy;
  index: number;
  reversed?: boolean;
}

export function SelectedProject({ project, index, reversed = false }: SelectedProjectProps) {
  const number = (index + 1).toString().padStart(2, '0');
  
  return (
    <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 lg:gap-24 items-center group`}>
      {/* Image Side */}
      <div className="w-full md:w-1/2">
        {project.coverImage && (
        <Link href={`/work/${project.slug}`} className="block relative w-full aspect-[16/9] overflow-hidden rounded-sm border border-border">
          <ImageReveal direction={reversed ? "right" : "left"}>
            <Image
              src={project.coverImage}
              alt={project.coverImageAlt || project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </ImageReveal>
        </Link>
        )}
      </div>
      
      {/* Text Side */}
      <div className="w-full md:w-1/2 flex flex-col items-start">
        <FadeIn>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-accent text-[length:var(--text-label)]">{number}</span>
            <Eyebrow>{project.date} • {project.category}</Eyebrow>
          </div>
          
          <Link href={`/work/${project.slug}`} className="block mb-4 hover:opacity-80 transition-opacity">
            <h3 className="font-sans font-semibold text-[length:var(--text-heading-section)] text-foreground">
              {project.title}
            </h3>
          </Link>
          
          <BodyText className="text-foreground-muted mb-8">
            {project.tagline}
          </BodyText>
          
          {project.outcomes && project.outcomes.length > 0 && (
            <div className="mb-8 border-l-2 border-accent pl-4">
              <div className="font-serif text-accent text-3xl md:text-4xl leading-none mb-1">
                {project.outcomes[0].value}
              </div>
              <div className="font-mono text-[length:var(--text-label)] text-foreground-muted uppercase tracking-wider">
                {project.outcomes[0].metric}
              </div>
            </div>
          )}
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.stack.slice(0, 5).map(tech => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
          
          <div className="flex flex-wrap items-center gap-6">
            <Link 
              href={`/work/${project.slug}`} 
              className="font-sans font-medium text-foreground hover:text-accent transition-colors flex items-center gap-2 group/link"
            >
              Read Case Study 
              <span className="transition-transform group-hover/link:translate-x-1">→</span>
            </Link>
            
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-mono text-[length:var(--text-label)] text-foreground-muted hover:text-foreground transition-colors"
              >
                Live Demo ↗
              </a>
            )}
            
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-mono text-[length:var(--text-label)] text-foreground-muted hover:text-foreground transition-colors"
              >
                GitHub ↗
              </a>
            )}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
