
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Hi, I'm <span className="gradient-text">Harshitha</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-muted-foreground">
              Final Year Engineering Student & Aspiring Developer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Passionate about web development and driven by the ambition to land a respected role 
              in a top MNC. Currently pursuing B.Tech in Electrical & Electronics Engineering 
              with a focus on modern technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg glow-effect"
              >
                View Portfolio
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg"
              >
                Contact Me
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center mt-12 lg:mt-0">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary to-secondary rounded-full p-1 animate-float">
                <div className="w-full h-full bg-card rounded-full flex items-center justify-center">
                  <div className="w-72 h-72 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                    <span className="text-6xl font-bold gradient-text">H</span>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
