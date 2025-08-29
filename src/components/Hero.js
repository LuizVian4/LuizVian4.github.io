import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Instagram } from 'lucide-react';
import SplitText from './SplitText';

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    'Software Engineer',
    'FullStack Developer',
    'Co-founder of ZYO ltda',
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 100 : 200;
    const deleteSpeed = 50;
    
    if (!isDeleting && displayText === texts[currentTextIndex]) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }
    
    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timer = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(texts[currentTextIndex].substring(0, displayText.length - 1));
      } else {
        setDisplayText(texts[currentTextIndex].substring(0, displayText.length + 1));
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTextIndex, texts]);

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

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <div className="max-w-4xl mx-auto">
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

          {/* Animated Text */}
          <div className="h-16 md:h-20 mb-8 flex items-center justify-center">
            <span className="text-2xl md:text-4xl font-semibold text-primary-300 border-r-2 border-primary-400 pr-2 animate-pulse">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
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

          {/* CTA Button */}
          <div className="animate-bounce-in">
            <button 
              onClick={scrollToAbout}
              className="btn-primary text-lg px-8 py-4"
            >
              Know more about me
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
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
