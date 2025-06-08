
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'AIML Internship',
      company: 'Google',
      duration: 'June 2024 – July 2024',
      type: 'Internship',
      location: 'Remote',
      description: [
        'Gained hands-on experience with AI and Machine Learning concepts',
        'Worked on real-world projects involving data analysis and model development',
        'Collaborated with industry professionals on cutting-edge AI solutions'
      ],
      skills: ['Python', 'Machine Learning', 'Data Analysis', 'AI Frameworks']
    },
    {
      title: 'Cloud Virtual Internship',
      company: 'AWS Academy',
      duration: 'Completed',
      type: 'Virtual Internship',
      location: 'Remote',
      description: [
        'Explored cloud computing fundamentals and AWS services',
        'Learned about scalable infrastructure and cloud architecture',
        'Gained practical experience with cloud deployment strategies'
      ],
      skills: ['AWS', 'Cloud Computing', 'Infrastructure', 'DevOps Basics']
    },
    {
      title: 'Salesforce Developer Virtual Internship',
      company: 'Smart Internz',
      duration: 'March 2025 – April 2025',
      type: 'Virtual Internship',
      location: 'Remote',
      description: [
        'Learning Salesforce development and CRM customization',
        'Building applications using Apex and Lightning Web Components',
        'Understanding enterprise software development practices'
      ],
      skills: ['Salesforce', 'Apex', 'Lightning', 'CRM Development']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional internships and virtual experiences that have shaped my 
            technical skills and industry knowledge.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-card border-border card-hover">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold gradient-text">{exp.title}</h3>
                    <h4 className="text-xl text-foreground">{exp.company}</h4>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                      <Badge variant="secondary">{exp.type}</Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {exp.skills.map((skill, i) => (
                      <Badge key={i} variant="outline" className="border-primary/50 text-primary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
