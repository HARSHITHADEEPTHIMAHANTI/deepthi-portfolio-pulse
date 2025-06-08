
import { Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold gradient-text mb-2">Harshitha Deepthimahanti</h3>
            <p className="text-muted-foreground">
              Final Year Engineering Student & Aspiring Developer
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Building the future, one line of code at a time.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://www.linkedin.com/in/harshitha-deepthimahanti-25643625b"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-effect"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Harshitha Deepthimahanti. All rights reserved. | 
            <span className="gradient-text"> Ready for new opportunities</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
