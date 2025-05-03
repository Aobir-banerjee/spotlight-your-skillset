
import { useEffect, useState } from 'react';
import { PortfolioHeader } from '@/components/PortfolioHeader';
import { CharacterStats } from '@/components/CharacterStats';
import { ProjectShowcase } from '@/components/ProjectShowcase';
import { AboutSection } from '@/components/AboutSection';
import { ContactForm } from '@/components/ContactForm';
import { RetroButton } from '@/components/RetroButton';

const Index = () => {
  // Character Data
  const characterData = {
    name: "AOBIR BANERJEE",
    title: "Web Developer / Software Engineer",
    portrait: "/lovable-uploads/63e872bd-1e01-40b4-aadf-ff0a1530cb8e.png", // Updated to use the newly uploaded image
    skills: [
      { name: "JavaScript", level: 5 },
      { name: "React", level: 4 },
      { name: "HTML/CSS", level: 4 },
      { name: "Bootstrap", level: 4 },
      { name: "Node.js", level: 3 },
      { name: "MongoDB", level: 3 }
    ]
  };

  // Project Data
  const projectsData = [
    {
      title: "NoMad Dash",
      description: "A travel and booking website that allows users to search for hotels, flights, and activities. Built with HTML, CSS, and JavaScript.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      images: [{ 
        src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b", 
        alt: "NoMad Dash Screenshot" 
      }],
      link: "https://aobir-banerjee.github.io/Nomad-Dash/"
    },
    {
      title: "Foodvaganza",
      description: "A food delivery website that allows users to order food online from their favorite restaurants. Built with HTML, CSS, and JavaScript.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
      images: [{ 
        src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085", 
        alt: "Foodvaganza Screenshot" 
      }],
      link: "https://aobir-banerjee.github.io/Foodvaganza/"
    },
    {
      title: "Retro Portfolio",
      description: "A retro-styled portfolio website inspired by classic text adventures and RPGs. Features unique combat-sequence project showcases and inventory-style skills display.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI"],
      images: [{ 
        src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6", 
        alt: "Portfolio Screenshot" 
      }],
      link: "#"
    }
  ];

  // About Content
  const aboutContent = `I'm a passionate web developer with a strong foundation in HTML, CSS, JavaScript, and modern frameworks like React. After completing my education, I've been focused on creating intuitive and dynamic user experiences through clean code and modern design principles. I'm constantly learning new technologies and techniques to improve my skills and deliver better solutions.`;

  // Rituals (Interests/Hobbies)
  const rituals = [
    "Web Development",
    "UI/UX Design",
    "Problem Solving",
    "Learning New Technologies"
  ];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center crt-screen textured-bg">
        <div className="scanline"></div>
        <div className="max-w-md w-full p-8 text-center">
          <div className="animate-text-flicker text-retro-amber text-xl mb-6">
            LOADING PORTFOLIO SYSTEM...
          </div>
          <div className="retro-border h-4 bg-retro-dark-brown">
            <div 
              className="h-full bg-retro-amber transition-all duration-2000 ease-linear"
              style={{ width: '100%' }}
            ></div>
          </div>
          <div className="mt-4 text-retro-gray text-sm font-terminal">
            ESTABLISHING CONNECTION...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen crt-screen textured-bg">
      <div className="scanline"></div>
      <PortfolioHeader />
      
      <main className="container mx-auto py-8 px-4 max-w-5xl">
        <CharacterStats 
          name={characterData.name}
          title={characterData.title}
          portrait={characterData.portrait}
          skills={characterData.skills}
        />
        
        <ProjectShowcase projects={projectsData} />
        
        <AboutSection 
          content={aboutContent}
          rituals={rituals}
        />
        
        <ContactForm />
        
        <footer className="text-center text-retro-gray p-4 text-sm font-terminal">
          <div className="flex items-center justify-center gap-4 mb-2">
            <RetroButton variant="outline" size="sm" onClick={() => window.open('https://github.com/aobir-banerjee', '_blank')}>
              GitHub
            </RetroButton>
            <RetroButton variant="outline" size="sm" onClick={() => window.open('https://www.linkedin.com/in/aobir-banerjee/', '_blank')}>
              LinkedIn
            </RetroButton>
            <RetroButton variant="outline" size="sm" onClick={() => window.open('mailto:aobir.banerjee@gmail.com', '_blank')}>
              Email
            </RetroButton>
          </div>
          <div>© {new Date().getFullYear()} | CHARACTER STATUS: ONLINE</div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
