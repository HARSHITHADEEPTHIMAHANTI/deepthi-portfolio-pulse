
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      company: 'Google',
      role: 'AIML Intern',
      period: '2024 - Current',
      duration: 'June 2024 – July 2024',
      description: 'Gained hands-on experience with AI and Machine Learning concepts, worked on real-world projects involving data analysis and model development.',
      logo: '🔵'
    },
    {
      company: 'AWS Academy',
      role: 'Cloud Virtual Intern',
      period: '2024',
      duration: 'Completed',
      description: 'Explored cloud computing fundamentals and AWS services, learned about scalable infrastructure and cloud architecture.',
      logo: '☁️'
    },
    {
      company: 'Smart Internz',
      role: 'Salesforce Developer',
      period: '2025',
      duration: 'March 2025 – April 2025',
      description: 'Learning Salesforce development and CRM customization, building applications using Apex and Lightning Web Components.',
      logo: '⚡'
    }
  ];

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              My resume showcases my commitment to staying up-to-date with the latest design trends and technologies.
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                        {exp.logo}
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
                        <h4 className="text-lg font-semibold text-primary">{exp.role}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                    <div className="text-right lg:text-left lg:min-w-[120px]">
                      <Badge variant="secondary" className="mb-2">
                        {exp.period}
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        {exp.duration}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
