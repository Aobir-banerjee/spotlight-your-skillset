
import { Terminal } from './Terminal';
import { CombatSequence } from './CombatSequence';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  images?: Array<{ src: string; alt: string }>;
  link?: string;
}

interface ProjectShowcaseProps {
  projects: Project[];
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ projects }) => {
  return (
    <section className="mb-8">
      <div className="retro-border p-2 bg-retro-dark-brown mb-4">
        <h2 className="text-xl uppercase tracking-wider text-retro-amber-light">Combat Sequences</h2>
        <Terminal 
          text="Fill the COMBAT SEQUENCE (white bar) with combat moves and click the 'LAUNCH SEQUENCE' to attack your enemy." 
          className="text-retro-light-brown text-sm" 
          typeSpeed={20}
        />
      </div>
      
      <div className="flex flex-col gap-4">
        {projects.map((project, index) => (
          <CombatSequence
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            images={project.images}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};
