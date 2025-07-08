import { motion } from 'framer-motion';
import { Download, MapPin, Mail, Phone, Calendar, GraduationCap, Award, Code, Briefcase } from 'lucide-react';

const ResumeSection = () => {
  const experiences = [
    {
      title: 'Frontend Developer Intern',
      company: 'Brainmage.ai',
      duration: 'January - May 2025',
      description: 'Developed responsive web applications using React.js and modern frontend technologies.',
    },
    {
      title: 'Software Engineer Intern',
      company: 'Turtil',
      duration: 'May - June 2025',
      description: 'Architected microservices for Study Buddy Matching system with logic-based algorithms.',
    }
  ];

  const projects = [
    {
      title: 'Culture & Heritage Blog Platform',
      tech: 'TensorFlow, OpenCV, React.js, AI',
      description: 'AI-powered artifact recognition and classification system with responsive web interface featuring search capabilities and galleries.',
    },
    {
      title: 'NDMA Disaster Management Dashboard',
      tech: 'React.js, FastAPI, Leaflet.js, JWT',
      description: 'Real-time disaster management dashboard with interactive maps, data visualization, and user authentication.',
    },
  ];

  return (
    <section id="resume" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Resume</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Download my resume or view my professional experience and qualifications
          </p>
          <a
          href="/VSP_Mahesh_SDE_Resume.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-block' }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:bg-primary/90 transition-all duration-300 inline-flex items-center gap-2"
            type="button"
          >
            <Download size={20} />
            Download Resume
          </motion.button>
        </a>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-card rounded-2xl p-6 border border-white/10 mb-6">
              <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
                <Mail size={20} />
                Contact Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-muted-foreground" />
                  <span className="text-sm">Vizianagaram, AP, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-muted-foreground" />
                  <span className="text-sm">saimahesh0210@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-muted-foreground" />
                  <span className="text-sm">+91 70133 96141</span>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-secondary flex items-center gap-2">
                <Code size={20} />
                Key Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'JavaScript', 'Python', 'Java', 'AWS', 'Docker', 'Git', 'MongoDB'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Education */}
            <div className="bg-card rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
                <GraduationCap size={20} />
                Education
              </h3>
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-semibold text-lg">B.Tech in Computer Science and Information Technology</h4>
                <p className="text-primary">LENDI Institute of Engineering and Technology</p>
                <p className="text-muted-foreground text-sm flex items-center gap-2 mt-1">
                  <Calendar size={14} />
                  2022 – 2026 | Vizianagaram, AP
                </p>
                <p className="text-accent font-semibold mt-2">CGPA: 8.97/10</p>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-card rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-secondary flex items-center gap-2">
                <Briefcase size={20} />
                Experience
              </h3>
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-2 border-secondary pl-4">
                    <h4 className="font-semibold text-lg">{exp.title}</h4>
                    <p className="text-secondary">{exp.company}</p>
                    <p className="text-muted-foreground text-sm flex items-center gap-2">
                      <Calendar size={14} />
                      {exp.duration}
                    </p>
                    <p className="text-muted-foreground mt-2">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="bg-card rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-accent flex items-center gap-2">
                <Code size={20} />
                Key Projects
              </h3>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <div key={index} className="border-l-2 border-accent pl-4">
                    <h4 className="font-semibold text-lg">{project.title}</h4>
                    <p className="text-accent text-sm font-medium">{project.tech}</p>
                    <p className="text-muted-foreground mt-2">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-card rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
                <Award size={20} />
                Certifications
              </h3>
              <div className="space-y-3">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-semibold">Front-End Development</h4>
                  <p className="text-sm text-muted-foreground">Infosys Springboard • 2024</p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-semibold">Cloud Computing (AWS)</h4>
                  <p className="text-sm text-muted-foreground">Amazon Web Services • 2024</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
