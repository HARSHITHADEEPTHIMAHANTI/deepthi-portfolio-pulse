
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Zap } from 'lucide-react';

const Projects = () => {
  const project = {
    title: 'Solar-based Wireless EV Charging Station',
    description: 'An innovative prototype project focused on eco-friendly wireless charging powered by solar energy. This project combines sustainable energy solutions with modern electric vehicle technology to create an efficient charging system.',
    longDescription: [
      'Designed and developed a prototype for wireless EV charging using solar panels',
      'Implemented embedded C programming for system control and optimization',
      'Focused on sustainable energy solutions and eco-friendly technology',
      'Integrated electrical components for efficient power transfer and management'
    ],
    technologies: ['Embedded C', 'Solar Technology', 'Wireless Charging', 'Electrical Systems'],
    role: 'Lead Developer - Coding and Systems Design',
    features: [
      'Solar panel integration for sustainable energy',
      'Wireless charging technology implementation',
      'Smart power management system',
      'Eco-friendly and efficient design'
    ]
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Project</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Showcasing my hands-on experience with innovative technology solutions 
            and sustainable engineering practices.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-border overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl lg:text-3xl gradient-text">
                  {project.title}
                </CardTitle>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </CardHeader>
            
            <CardContent className="p-8 space-y-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  My Role & Contributions
                </h4>
                <p className="text-muted-foreground mb-4">{project.role}</p>
                <ul className="space-y-3">
                  {project.longDescription.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  Key Features
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline" className="border-primary/50 text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  View Details
                </Button>
                <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  Source Code
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
