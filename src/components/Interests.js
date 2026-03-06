import React from 'react';
import { BlurFade } from './ui/BlurFade';
import { MagicCard } from './ui/MagicCard';

const Interests = () => {
  const interests = [
    {
      id: 1,
      title: 'Esporte Clube Bahia',
      description: 'Torcedor apaixonado pelo Esporte Clube Bahia, um dos clubes mais tradicionais do futebol brasileiro. O Bahia representa não apenas o esporte, mas também a cultura e a identidade do povo baiano.',
      image: '/img/bahia.jpg',
      gradientFrom: '#2563eb',
      gradientTo: '#1d4ed8',
    },
    {
      id: 2,
      title: 'Programação',
      description: 'Desenvolvedor apaixonado por criar soluções inovadoras através do código. Especializado em desenvolvimento web full-stack, sempre em busca de aprender novas tecnologias e metodologias.',
      image: '/img/programming.jpg',
      gradientFrom: '#059669',
      gradientTo: '#047857',
    },
    {
      id: 3,
      title: 'Cinema',
      description: 'Apreciador da sétima arte, sempre em busca de histórias que inspirem e emocionem. O cinema é uma forma de arte que combina narrativa, visual e emoção de maneira única.',
      image: '/img/cinema.jpg',
      gradientFrom: '#7c3aed',
      gradientTo: '#6d28d9',
    },
  ];

  return (
    <section id="interests" className="section-padding bg-dark-900 text-white">
      <div className="container-custom">
        <BlurFade inView inViewMargin="-80px" delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meus <span className="text-gradient">Interesses</span>
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
              Descubra as paixões que movem minha vida e inspiram meu trabalho
            </p>
          </div>
        </BlurFade>

        <div className="grid lg:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <BlurFade key={interest.id} inView delay={0.1 * (index + 1)} direction="up">
              <MagicCard
                className="rounded-2xl overflow-hidden border-0 h-full"
                gradientFrom={interest.gradientFrom}
                gradientTo={interest.gradientTo}
                backgroundColor="#1e293b"
                gradientColor="#334155"
              >
                <div className="group">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={interest.image}
                      alt={interest.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary-300 transition-colors duration-300">
                      {interest.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {interest.description}
                    </p>
                    <button className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium transition-colors duration-300">
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
                </div>
              </MagicCard>
            </BlurFade>
          ))}
        </div>

        {/* Additional Info Section */}
        <BlurFade inView delay={0.5}>
          <div className="mt-16 text-center">
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
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default Interests;
