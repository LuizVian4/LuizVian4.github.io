import React, { useState } from 'react';
import { BlurFade } from './ui/BlurFade';
import { ShimmerButton } from './ui/ShimmerButton';
import { MagicCard } from './ui/MagicCard';
import { Mail, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'luizviana.mn@gmail.com',
      color: 'from-green-500 to-green-600',
    },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <BlurFade inView inViewMargin="-80px" delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
              Entre em <span className="text-gradient">Contato</span>
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
            <p className="text-xl text-dark-600 mt-6 max-w-2xl mx-auto">
              Vamos conversar! Estou sempre aberto a novas oportunidades e colaborações
            </p>
          </div>
        </BlurFade>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <BlurFade inView direction="left" delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-dark-900 mb-6">
                  Informações de Contato
                </h3>
                <p className="text-dark-600 leading-relaxed mb-8">
                  Sinta-se à vontade para entrar em contato comigo através de qualquer um dos canais abaixo.
                  Respondo sempre que possível!
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${info.color} text-white shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                      <info.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-dark-900 mb-2">{info.title}</h4>
                      <p className="text-dark-600 leading-relaxed">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-6">
                <h4 className="text-lg font-semibold text-dark-900 mb-4">Redes Sociais</h4>
                <div className="flex space-x-4">
                  {[
                    { name: 'GitHub', href: 'https://github.com/LuizVian4', color: 'hover:bg-gray-800' },
                    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/luiz-felipe-viana-9a3a28180', color: 'hover:bg-blue-600' },
                    { name: 'Instagram', href: 'https://www.instagram.com/_luizviana_/', color: 'hover:bg-pink-600' },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 py-2 bg-dark-100 text-dark-700 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${social.color} hover:text-white`}
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </BlurFade>

          {/* Contact Form - MagicCard + ShimmerButton */}
          <BlurFade inView direction="right" delay={0.3}>
            <MagicCard
              className="rounded-2xl overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
              gradientFrom="#0284c7"
              gradientTo="#38bdf8"
              backgroundColor="#ffffff"
              gradientOpacity={0.3}
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-dark-900 mb-6">Envie uma Mensagem</h3>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-dark-900 mb-2">Mensagem Enviada!</h4>
                    <p className="text-dark-600 mb-6">
                      Obrigado pelo contato. Responderei em breve!
                    </p>
                    <ShimmerButton
                      onClick={() => setIsSubmitted(false)}
                      background="rgba(2, 132, 199, 0.9)"
                      shimmerColor="rgba(255,255,255,0.8)"
                      borderRadius="12px"
                    >
                      Enviar Outra Mensagem
                    </ShimmerButton>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-dark-700 mb-2">
                          Nome *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                          placeholder="Seu nome completo"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-dark-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-dark-700 mb-2">
                        Assunto *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        placeholder="Assunto da mensagem"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-dark-700 mb-2">
                        Mensagem *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Sua mensagem..."
                      ></textarea>
                    </div>

                    <ShimmerButton
                      type="submit"
                      background="rgba(2, 132, 199, 0.9)"
                      shimmerColor="rgba(255,255,255,0.8)"
                      borderRadius="12px"
                      className="w-full justify-center"
                    >
                      <span className="flex items-center justify-center space-x-2">
                        <Send size={20} />
                        <span>Enviar Mensagem</span>
                      </span>
                    </ShimmerButton>
                  </form>
                )}
              </div>
            </MagicCard>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default Contact;
