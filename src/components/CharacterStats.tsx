
import React from 'react';
import { InventoryItem } from './InventoryItem';
import { Terminal } from './Terminal';

interface Skill {
  name: string;
  level: number;
}

interface CharacterStatsProps {
  name: string;
  title: string;
  portrait: string;
  skills: Skill[];
}

export const CharacterStats: React.FC<CharacterStatsProps> = ({
  name,
  title,
  portrait,
  skills
}) => {
  return (
    <section className="retro-container mb-8 pixel-corners">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3 retro-border p-2 bg-retro-black">
          <div className="retro-border overflow-hidden">
            <img src={portrait} alt={name} className="w-full h-auto pixel-corners" />
          </div>
          <div className="mt-4 text-center">
            <h2 className="text-xl uppercase tracking-wider text-retro-amber-light">{name}</h2>
            <Terminal text={title} className="text-center" typeSpeed={60} />
          </div>
        </div>
        
        <div className="w-full md:w-2/3">
          <div className="mb-4">
            <h3 className="text-lg uppercase tracking-wider border-b-2 border-retro-border-brown pb-1 mb-2">
              Character Stats
            </h3>
            <Terminal 
              text=">> Loading character data... Complete." 
              className="mb-4 text-retro-gray" 
              typeSpeed={20}
            />
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {skills.map((skill) => (
              <InventoryItem 
                key={skill.name} 
                name={skill.name} 
                level={skill.level} 
              />
            ))}
          </div>
          
          <div className="mt-6 p-2 retro-border bg-retro-black">
            <div className="text-xs text-retro-gray">
              <span className="text-retro-amber-light">ACTIVE RITUALS:</span> Coding Ritual, Design Ritual, Problem-Solving Ritual
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
