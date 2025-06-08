
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover my journey as a passionate engineering student with a vision to make 
            an impact in the tech industry.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">My Story</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm Harshitha Deepthimahanti, currently pursuing my B.Tech in Electrical & 
                Electronics Engineering at Pragati Engineering College. My journey in technology 
                began with curiosity and has evolved into a passionate pursuit of web development 
                and modern programming practices.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With hands-on experience through multiple internships and a drive to continuously 
                learn, I'm focused on building a strong foundation in software development while 
                preparing for a successful career in top MNCs.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-card border-border card-hover">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Education</h4>
                    <p className="text-muted-foreground">B.Tech in Electrical & Electronics Engineering</p>
                    <p className="text-sm text-muted-foreground">Pragati Engineering College</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border card-hover">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Expected Graduation</h4>
                    <p className="text-muted-foreground">2026</p>
                    <p className="text-sm text-muted-foreground">Final Year Student</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border card-hover">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Career Goal</h4>
                    <p className="text-muted-foreground">Software Developer at Top MNC</p>
                    <p className="text-sm text-muted-foreground">Focused on web development & innovation</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
