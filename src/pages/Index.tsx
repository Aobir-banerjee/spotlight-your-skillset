
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
    name: "DEVELOPER NAME",
    title: "Software Engineer / Designer",
    portrait: "/lovable-uploads/a8a647e5-9dc8-49a6-915f-905bc3eb4c14.png", // Using the uploaded image
    skills: [
      { name: "JavaScript", level: 5 },
      { name: "React", level: 4 },
      { name: "TypeScript", level: 4 },
      { name: "UI Design", level: 3 },
      { name: "Node.js", level: 3 },
      { name: "CSS", level: 4 }
    ]
  };

  // Project Data
  const projectsData = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store with product catalog, shopping cart, and secure checkout. Built with React, Node.js, and MongoDB for a seamless shopping experience with real-time inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API", "Redux"],
      images: [{ 
        src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b", 
        alt: "E-Commerce Platform Screenshot" 
      }],
      link: "#project-1"
    },
    {
      title: "Portfolio Website",
      description: "A retro-styled portfolio inspired by classic text adventures and RPGs. Features a unique combat-sequence project showcase and inventory-style skills display.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      images: [{ 
        src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085", 
        alt: "Portfolio Website Screenshot" 
      }],
      link: "#project-2"
    },
    {
      title: "Mobile Task Tracker",
      description: "A productivity app that gamifies task completion with experience points, levels, and achievements to make getting things done more fun and engaging.",
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      images: [{ 
        src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6", 
        alt: "Mobile App Screenshot" 
      }],
      link: "#project-3"
    }
  ];

  // About Content
  const aboutContent = `I am a passionate developer with a background in both front-end and back-end technologies. My journey in software development began 5 years ago, and I've since worked on various projects ranging from e-commerce platforms to interactive web applications. I specialize in creating user-friendly interfaces that provide exceptional user experiences. When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge with the developer community.`;

  // Rituals (Interests/Hobbies)
  const rituals = [
    "Open Source Contributing",
    "Tech Blogging",
    "UI/UX Research",
    "Game Development"
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
            <RetroButton variant="outline" size="sm" onClick={() => window.open('#github', '_blank')}>
              GitHub
            </RetroButton>
            <RetroButton variant="outline" size="sm" onClick={() => window.open('#linkedin', '_blank')}>
              LinkedIn
            </RetroButton>
            <RetroButton variant="outline" size="sm" onClick={() => window.open('#twitter', '_blank')}>
              Twitter
            </RetroButton>
          </div>
          <div>© {new Date().getFullYear()} | CHARACTER STATUS: ONLINE</div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
