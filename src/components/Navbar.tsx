
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text">
            Harshitha
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-foreground hover:text-primary transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-foreground hover:text-primary transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-foreground hover:text-primary transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">
              Contact
            </button>
          </div>

          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground animate-pulse-glow"
          >
            Let's Connect
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
