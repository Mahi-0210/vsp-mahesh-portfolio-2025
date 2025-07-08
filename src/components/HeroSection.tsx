
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import profilePic from './profile.jpg';
const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const geometricShapes = Array.from({ length: 6 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute"
      initial={{ 
        opacity: 0, 
        scale: 0,
        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
        y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
      }}
      animate={{ 
        opacity: [0, 0.3, 0],
        scale: [0, 1, 0],
        rotate: 360,
      }}
      transition={{ 
        duration: 4,
        delay: i * 0.5,
        repeat: Infinity,
        repeatDelay: 8,
      }}
      style={{
        left: `${20 + (i * 15)}%`,
        top: `${30 + (i * 10)}%`,
      }}
    >
      <div 
        className={`w-${4 + i} h-${4 + i} ${
          i % 3 === 0 ? 'bg-primary/20' : 
          i % 3 === 1 ? 'bg-secondary/20' : 'bg-accent/20'
        } ${i % 2 === 0 ? 'rounded-full' : 'rotate-45'}`}
      />
    </motion.div>
  ));

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Geometric Background Animations */}
      <div className="absolute inset-0 pointer-events-none">
        {geometricShapes}
        <motion.div
          className="absolute inset-0 bg-mesh"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 px-4 max-w-4xl mx-auto"
      >
        {/* Profile Image */}
        

<motion.div
  variants={itemVariants}
  whileHover={{ scale: 1.05 }}
  className="mb-8"
>
  <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1 animate-pulse-slow">
    <img
      src={profilePic}
      alt="V S P Mahesh"
      className="w-full h-full object-cover rounded-full"
    />
  </div>
</motion.div>



        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-4 text-gradient"
        >
          V S P MAHESH
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-muted-foreground mb-8 font-light"
        >
          Creative Developer | AI & Web Specialist
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Enthusiastic Computer Science student passionate about solving real-world challenges 
          through innovative development and cutting-edge technology solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(0, 212, 255, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:bg-primary/90 transition-all duration-300"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold text-lg hover:bg-primary/10 transition-all duration-300"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center"
        >
          <p className="text-sm text-muted-foreground mb-2">Discover more</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="text-primary" size={24} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
