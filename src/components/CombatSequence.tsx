
import { useState } from 'react';
import { Terminal } from './Terminal';
import { RetroButton } from './RetroButton';

interface ProjectImage {
  src: string;
  alt: string;
}

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  images?: ProjectImage[];
  link?: string;
}

export const CombatSequence: React.FC<ProjectProps> = ({
  title,
  description,
  technologies,
  images = [],
  link
}) => {
  const [showDetails, setShowDetails] = useState(false);
  
  return (
    <div className="retro-container mb-6 pixel-corners">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg uppercase tracking-wider text-retro-amber-light">{title}</h3>
          <div className="text-xs bg-retro-black p-1 retro-border">
            STR: 7 | DEX: 8 | PER: 7
          </div>
        </div>
        
        {!showDetails ? (
          <>
            <Terminal 
              text={`[${title}] - ${description.substring(0, 100)}...`} 
              className="text-retro-light-brown"
              typeSpeed={30}
            />
            <div className="flex justify-center">
              <RetroButton onClick={() => setShowDetails(true)}>
                LAUNCH SEQUENCE
              </RetroButton>
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Terminal 
                  text={description} 
                  className="text-retro-light-brown mb-4"
                  typeSpeed={10}
                />
                
                <div className="retro-border p-2 bg-retro-black mb-4">
                  <div className="text-sm text-retro-amber-light mb-1">TECH WEAPONS:</div>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <span key={index} className="text-xs bg-retro-dark-brown px-2 py-1 retro-border">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {link && (
                  <div className="flex justify-start">
                    <RetroButton 
                      variant="outline" 
                      size="sm" 
                      onClick={() => window.open(link, '_blank')}
                    >
                      EXAMINE PROJECT
                    </RetroButton>
                  </div>
                )}
              </div>
              
              {images.length > 0 && (
                <div className="retro-border bg-retro-black p-2">
                  <img 
                    src={images[0].src} 
                    alt={images[0].alt} 
                    className="w-full h-auto pixel-corners"
                  />
                </div>
              )}
            </div>
            
            <div className="flex justify-center">
              <RetroButton 
                variant="secondary" 
                onClick={() => setShowDetails(false)}
              >
                CLEAR
              </RetroButton>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
