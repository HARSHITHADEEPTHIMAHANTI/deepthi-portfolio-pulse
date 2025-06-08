
import { Button } from '@/components/ui/button';
import { ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-lg text-primary font-medium">Hello,</p>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                I'm <span className="gradient-text">Harshitha</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-foreground font-semibold">
                Final Year Engineering Student & Aspiring Developer
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Based In India
              </p>
            </div>
            
            <p className="text-base text-muted-foreground max-w-lg leading-relaxed">
              A passionate Engineering Student with more than 2 years of experience 
              who is always excited to work with you to creating wonderful web applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-base font-medium"
              >
                Hire Me
              </Button>
              <Button 
                variant="outline" 
                className="border-border text-foreground hover:bg-muted px-8 py-3 text-base font-medium flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download CV
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-8xl font-bold gradient-text">H</span>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary rounded-full opacity-80"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-secondary rounded-full opacity-60"></div>
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
