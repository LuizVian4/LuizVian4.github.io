import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Interests = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const interests = [
    {
      id: 1,
      title: 'Esporte Clube Bahia',
      description: 'Torcedor apaixonado pelo Esporte Clube Bahia, um dos clubes mais tradicionais do futebol brasileiro. O Bahia representa não apenas o esporte, mas também a cultura e a identidade do povo baiano.',
      image: '/img/bahia.jpg',
      color: 'from-blue-600 to-blue-800',
      icon: '⚽'
    },
    {
      id: 2,
      title: 'Programação',
      description: 'Desenvolvedor apaixonado por criar soluções inovadoras através do código. Especializado em desenvolvimento web full-stack, sempre em busca de aprender novas tecnologias e metodologias.',
      image: '/img/programming.jpg',
      color: 'from-green-600 to-green-800',
      icon: '💻'
    },
    {
      id: 3,
      title: 'Cinema',
      description: 'Apreciador da sétima arte, sempre em busca de histórias que inspirem e emocionem. O cinema é uma forma de arte que combina narrativa, visual e emoção de maneira única.',
      image: '/img/cinema.jpg',
      color: 'from-purple-600 to-purple-800',
      icon: '🎬'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="interests" className="section-padding bg-dark-900 text-white">
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
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Meus <span className="text-gradient">Interesses</span>
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-primary-500 mx-auto rounded-full"
          ></motion.div>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto"
          >
            Descubra as paixões que movem minha vida e inspiram meu trabalho
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl bg-dark-800 hover:bg-dark-700 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={interest.image}
                  alt={interest.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${interest.color} opacity-80 group-hover:opacity-90 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className="absolute top-4 right-4 text-4xl opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {interest.icon}
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-6 left-6 w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
                <div className="absolute bottom-6 right-6 w-2 h-2 bg-white/40 rounded-full animate-pulse delay-500"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary-300 transition-colors duration-300">
                  {interest.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {interest.description}
                </p>
                
                {/* Learn More Button */}
                <button className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium transition-colors duration-300 group-hover:text-primary-300">
                  <span>Saiba mais</span>
                  <svg 
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${interest.color} p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm`}></div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Section */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <div className="bg-dark-800 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">
              <span className="text-gradient">Diversidade</span> de Interesses
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Acredito que a combinação de diferentes paixões e interesses é o que torna cada pessoa única. 
              Meus interesses em esporte, tecnologia e arte me ajudam a ter uma visão mais ampla e criativa 
              na resolução de problemas e no desenvolvimento de soluções inovadoras.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Interests;
