
import { Terminal } from './Terminal';

interface AboutSectionProps {
  content: string;
  rituals?: string[];
}

export const AboutSection: React.FC<AboutSectionProps> = ({ content, rituals = [] }) => {
  return (
    <section className="mb-8 retro-container pixel-corners">
      <h2 className="text-xl uppercase tracking-wider text-retro-amber-light mb-4">Character Background</h2>
      
      <div className="retro-border p-3 bg-retro-black mb-4">
        <Terminal
          text={content}
          className="text-retro-light-brown"
          typeSpeed={15}
        />
      </div>
      
      {rituals.length > 0 && (
        <div className="retro-border p-2 bg-retro-dark-brown">
          <h3 className="text-sm uppercase tracking-wider text-retro-amber mb-2">Active Rituals</h3>
          <div className="grid grid-cols-2 gap-2">
            {rituals.map((ritual, index) => (
              <div key={index} className="text-sm bg-retro-black p-2 retro-border">
                <span className="text-retro-amber-light">{ritual}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
