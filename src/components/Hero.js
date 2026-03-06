import React from 'react';
import { ChevronDown, Github, Linkedin, Instagram } from 'lucide-react';
import SplitText from './SplitText';
import { WordRotate } from './ui/WordRotate';
import { DotPattern } from './ui/DotPattern';

const Hero = () => {
  const texts = [
    'Software Engineer',
    'FullStack Developer',
    'Co-founder of ZYO ltda',
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/LuizVian4', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/luiz-felipe-viana-9a3a28180', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/_luizviana_/', label: 'Instagram' },
  ];

  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img/wallpaper.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Dot Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <DotPattern
          width={20}
          height={20}
          cr={0.5}
          className="text-white/30"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 w-full">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-shadow">
            <SplitText 
              text="Luiz Felipe" 
              className="text-white" 
              animationType="slideUp"
              staggerDelay={0.1}
              delay={0.5}
            />
            <SplitText 
              text="Viana" 
              className="text-white" 
              animationType="slideUp"
              staggerDelay={0.1}
              delay={1}
            />
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-slide-up">
            Personal website of
          </p>

          {/* Word Rotate - MagicUI */}
          <div className="h-16 md:h-20 mb-8 flex items-center justify-center">
            <WordRotate
              words={texts}
              duration={2500}
              className="text-2xl md:text-4xl font-semibold text-primary-300"
              motionProps={{
                initial: { opacity: 0, y: -20 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: 20 },
                transition: { duration: 0.3, ease: 'easeOut' },
              }}
            />
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-slide-up">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                aria-label={social.label}
              >
                <social.icon 
                  size={24} 
                  className="text-white group-hover:text-primary-300 transition-colors duration-300" 
                />
              </a>
            ))}
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center animate-bounce">
        <button 
          onClick={scrollToAbout}
          className="text-white hover:text-primary-300 transition-colors duration-300"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-primary-300/20 rounded-full blur-lg animate-pulse delay-500"></div>
    </section>
  );
};

export default Hero;
