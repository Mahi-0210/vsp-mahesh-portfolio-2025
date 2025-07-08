
import { motion } from 'framer-motion';
import { GraduationCap, Award, Code, Database, Globe, Cloud } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { category: 'Programming', items: ['Java', 'Python', 'C'], icon: Code },
    { category: 'Web', items: ['HTML5', 'CSS3', 'JavaScript', 'React.js'], icon: Globe },
    { category: 'Frameworks/Tools', items: ['Git', 'FastAPI', 'TensorFlow', 'Docker', 'OpenCV'], icon: Code },
    { category: 'Databases', items: ['MySQL', 'SQLite', 'MongoDB'], icon: Database },
    { category: 'Cloud & APIs', items: ['AWS', 'REST API', 'JWT Auth'], icon: Cloud },
  ];

  const certifications = [
    { title: 'Front-End Development', org: 'Infosys Springboard', year: '2024' },
    { title: 'Cloud Computing (AWS)', org: 'Amazon Web Services', year: '2024' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating innovative solutions that bridge technology and real-world impact
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-primary mb-4">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              Enthusiastic Computer Science student at LENDI Institute of Engineering and Technology 
              with hands-on experience in frontend development, RESTful APIs, ML applications, and 
              Docker-based microservices.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm passionate about solving real-world challenges through innovative development and 
              cross-functional collaboration. My goal is to create technology solutions that make a 
              meaningful impact.
            </p>

            {/* Education */}
            <div className="bg-card rounded-2xl p-6 border border-white/10">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-primary mr-3" size={24} />
                <h4 className="text-xl font-semibold">Education</h4>
              </div>
              <div>
                <h5 className="font-semibold text-lg">B.Tech in Computer Science and Information Technology</h5>
                <p className="text-primary">LENDI Institute of Engineering and Technology</p>
                <p className="text-muted-foreground text-sm">2022 – 2026 | Vizianagaram, AP</p>
                <p className="text-accent font-semibold mt-2">CGPA: 8.97/10</p>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-card rounded-2xl p-6 border border-white/10">
              <div className="flex items-center mb-4">
                <Award className="text-secondary mr-3" size={24} />
                <h4 className="text-xl font-semibold">Certifications</h4>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-l-2 border-primary pl-4"
                  >
                    <h5 className="font-semibold">{cert.title}</h5>
                    <p className="text-sm text-muted-foreground">{cert.org} • {cert.year}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Technical Skills</h3>
            <div className="space-y-4">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-xl p-4 border border-white/10 hover:border-primary/30 transition-colors duration-300"
                >
                  <div className="flex items-center mb-3">
                    <skillGroup.icon className="text-primary mr-3" size={20} />
                    <h4 className="font-semibold">{skillGroup.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Soft Skills */}
            <div className="bg-card rounded-xl p-4 border border-white/10">
              <h4 className="font-semibold mb-3 text-secondary">Soft Skills</h4>
              <div className="flex flex-wrap gap-2">
                {['Communication', 'Critical Thinking', 'Team Management', 'Problem-Solving'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium border border-secondary/20"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
