import React from 'react';
import { BlurFade } from './ui/BlurFade';
import { MagicCard } from './ui/MagicCard';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-white to-gray-50">
      <div className="container-custom">
        <BlurFade inView inViewMargin="-80px" delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
          </div>
        </BlurFade>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo Section - MagicCard */}
          <BlurFade inView direction="left" delay={0.2}>
            <div className="flex justify-center lg:justify-start">
              <MagicCard
                className="rounded-2xl p-1 max-w-[320px] mx-auto lg:mx-0"
                gradientFrom="#0284c7"
                gradientTo="#38bdf8"
                backgroundColor="#ffffff"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="/img/Luiz.jpg"
                    alt="Luiz Felipe Viana"
                    className="w-full aspect-square object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </MagicCard>
            </div>
          </BlurFade>

          {/* Content Section */}
          <BlurFade inView direction="right" delay={0.3}>
            <div className="space-y-6">
              <div>
                <p className="text-lg text-dark-600 leading-relaxed">
                  Software Engineer with over 5 years of experience developing, optimizing, and maintaining scalable applications. My core expertise is in Java and Spring Boot, with solid knowledge of AWS and Microservices architecture, delivering high-performance, resilient solutions for complex business needs.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { label: 'Age:', value: '24 yo' },
                  { label: 'From:', value: 'Salvador, Bahia - Brasil' },
                  { label: 'Degree:', value: 'Software Engineer' },
                  { label: 'Enterpreneur:', value: 'Co-founder of ZYO Ltda.' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                    <span className="text-dark-700 font-medium">
                      <strong>{item.label}</strong> {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Skills Tags */}
              <div className="pt-4">
                <h4 className="text-lg font-semibold text-dark-800 mb-3">Main Techs:</h4>
                <div className="flex flex-wrap gap-2">
                  {['Java', 'Spring', 'AWS', 'React', 'JavaScript', 'Microservices'].map((skill) => (
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
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default About;
