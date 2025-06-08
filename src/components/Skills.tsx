
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skills = [
    { name: 'Python', level: 85, color: 'bg-primary' },
    { name: 'C Programming', level: 80, color: 'bg-secondary' },
    { name: 'Java (Basics)', level: 70, color: 'bg-accent' },
    { name: 'Web Development', level: 75, color: 'bg-primary' },
    { name: 'Problem Solving', level: 90, color: 'bg-secondary' },
    { name: 'Technical Writing', level: 85, color: 'bg-accent' },
  ];

  const qualities = [
    { title: 'Quick Learner', description: 'Rapidly adapts to new technologies and frameworks' },
    { title: 'Detail-Oriented', description: 'Meticulous attention to code quality and best practices' },
    { title: 'Team Player', description: 'Collaborative approach to problem-solving and development' },
    { title: 'Innovation-Focused', description: 'Always seeking creative solutions to complex challenges' },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and personal qualities 
            that drive my development journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <Card key={index} className="bg-card border-border card-hover">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-lg font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Personal Qualities */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">Key Qualities</h3>
            <div className="grid gap-6">
              {qualities.map((quality, index) => (
                <Card key={index} className="bg-card border-border card-hover">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-2 gradient-text">
                      {quality.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {quality.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
