import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-white to-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-dark-900 mb-6"
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-primary-600 mx-auto rounded-full"
          ></motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative group">
              {/* Main Photo */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/img/Luiz.jpg"
                  alt="Luiz Felipe Viana"
                  className="w-80 h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-400 rounded-full animate-bounce delay-300"></div>
              
              {/* Border Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-400 to-primary-600 p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <div>
              <p className="text-lg text-dark-600 leading-relaxed">
              Software Engineer with over 5 years of experience developing, optimizing, and maintaining scalable applications. My core expertise is in Java and Spring Boot, with solid knowledge of AWS and Microservices architecture, delivering high-performance, resilient solutions for complex business needs.  </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                <span className="text-dark-700 font-medium">
                  <strong>Age:</strong> 24 yo
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                <span className="text-dark-700 font-medium">
                  <strong>From:</strong> Salvador, Bahia - Brasil
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                <span className="text-dark-700 font-medium">
                  <strong>Degree:</strong> Software Engineer
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                <span className="text-dark-700 font-medium">
                  <strong>Enterpreneur:</strong> Co-founder of ZYO Ltda.
                </span>
              </div>
            </div>

            {/* Skills Tags */}
            <div className="pt-4">
              <h4 className="text-lg font-semibold text-dark-800 mb-3">Main Techs:</h4>
              <div className="flex flex-wrap gap-2">
                {[
                'Java', 
                'Spring', 
                'AWS', 
                'React', 
                'JavaScript', 
                'Microservices'
              ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium hover:bg-primary-200 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <a 
                href="https://github.com/LuizVian4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary group inline-block"
              >
                <span className="flex items-center space-x-2">
                  <span>See complete portfolio</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
