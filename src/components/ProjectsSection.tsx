
import { motion } from 'framer-motion';
import { ExternalLink, Github, Shield, Globe, AlertTriangle } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Transaction Fraud Detection System',
      description: 'ML-based fraud detection with real-time monitoring achieving 20% fraud risk reduction. Features interactive dashboard for analysts.',
      tech: ['Python', 'Scikit-learn', 'OpenCV', 'ML'],
      icon: Shield,
      color: 'primary',
      features: [
        'Real-time fraud monitoring',
        '20% fraud risk reduction',
        'Interactive analyst dashboard',
        'ML-based detection algorithms'
      ]
    },
    {
      title: 'Culture & Heritage Blog Platform',
      description: 'AI-powered artifact recognition and classification system with responsive web interface featuring search capabilities and galleries.',
      tech: ['TensorFlow', 'OpenCV', 'React.js', 'AI'],
      icon: Globe,
      color: 'secondary',
      features: [
        'AI artifact recognition',
        'Classification system',
        'Responsive web interface',
        'Search and gallery features'
      ]
    },
    {
      title: 'NDMA Disaster Management Dashboard',
      description: 'Real-time incident tracking and map visualization system with secure JWT authentication and automated alert generation.',
      tech: ['React.js', 'FastAPI', 'Leaflet.js', 'JWT'],
      icon: AlertTriangle,
      color: 'accent',
      features: [
        'Real-time incident tracking',
        'Interactive map visualization',
        'Secure JWT authentication',
        'Automated alert system'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions that demonstrate my passion for solving real-world problems through technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, rotateX: 5 }}
              className="group relative"
            >
              <div className="bg-card rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-500 h-full">
                {/* Project Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-${project.color}/10 border border-${project.color}/20 mb-6`}>
                  <project.icon className={`text-${project.color}`} size={28} />
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 bg-${project.color}/10 text-${project.color} rounded-full text-xs font-medium border border-${project.color}/20`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-3 mt-auto pt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors duration-300 border border-primary/20"
                  >
                    <Github size={16} />
                    <span className="text-sm font-medium">Code</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-secondary/10 hover:bg-secondary/20 text-secondary rounded-lg transition-colors duration-300 border border-secondary/20"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">Demo</span>
                  </motion.button>
                </div>
              </div>

              {/* Hover Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work or collaborating on a project?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(0, 212, 255, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            Let's Work Together
            <ExternalLink size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
