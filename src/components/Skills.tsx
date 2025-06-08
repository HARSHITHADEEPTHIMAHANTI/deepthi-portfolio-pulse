
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const services = [
    {
      title: 'Web Development',
      description: "Let's transform your vision into a captivating online reality. I'll use make your digital presence shine, whether it's a new website or a revamp.",
      icon: '🌐'
    },
    {
      title: 'Problem Solving',
      description: 'Analytical thinking and systematic approach to break down complex challenges into manageable solutions.',
      icon: '🧩'
    },
    {
      title: 'Technical Writing',
      description: 'Clear documentation and communication of technical concepts for both technical and non-technical audiences.',
      icon: '📝'
    }
  ];

  const stats = [
    { number: '10+', label: 'Project Completed' },
    { number: '3+', label: 'Happy Clients' },
    { number: '2+', label: 'Years Experience' }
  ];

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a web design wizard. Let's transform your vision into a captivating online reality. Let me make your digital presence shine, whether it's a new website or a revamp.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
