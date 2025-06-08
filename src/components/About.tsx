
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Calendar, Target, User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Image and stats */}
          <div className="space-y-8">
            <div className="relative">
              <div className="w-full max-w-md mx-auto lg:mx-0">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 flex items-center justify-center">
                  <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center border border-border">
                    <User className="w-32 h-32 text-primary" />
                  </div>
                </div>
                {/* Stats overlay */}
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">2+</div>
                    <div className="text-sm">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold">
                About <span className="gradient-text">Me</span>
              </h2>
              <h3 className="text-2xl font-semibold text-foreground">
                I'm Harshitha, A developer based in India
              </h3>
            </div>

            <p className="text-muted-foreground leading-relaxed text-lg">
              I've always been fascinated by the intersection of art and technology, 
              and my career has been dedicated to finding the perfect balance between the two. 
              Currently pursuing B.Tech in Electrical & Electronics Engineering with a passion 
              for web development and modern programming practices.
            </p>

            <div className="grid gap-4">
              <Card className="bg-card/50 border-border">
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

              <Card className="bg-card/50 border-border">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Target className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Career Goal</h4>
                      <p className="text-muted-foreground">Software Developer at Top MNC</p>
                      <p className="text-sm text-muted-foreground">Expected Graduation: 2026</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-base font-medium"
            >
              Hire Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
