# Portfolio Pessoal - Luiz Felipe Viana

Um website pessoal moderno e responsivo desenvolvido com React, JavaScript e Tailwind CSS.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces de usuário
- **JavaScript (ES6+)** - Linguagem de programação
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Biblioteca de animações para React
- **Lucide React** - Ícones modernos e leves
- **React Intersection Observer** - Hook para detectar elementos visíveis

## ✨ Características

- 🎨 Design moderno e responsivo
- 📱 Otimizado para dispositivos móveis
- 🎭 Animações suaves e interativas
- 🌈 Gradientes e efeitos visuais atrativos
- ⚡ Performance otimizada
- ♿ Acessibilidade aprimorada
- 🔍 SEO friendly

## 🎯 Seções do Website

1. **Header** - Navegação responsiva com efeitos de scroll
2. **Hero** - Seção principal com animações de texto e CTA
3. **Sobre** - Informações pessoais e foto do perfil
4. **Interesses** - Três áreas de interesse (Bahia, Programação, Cinema)
5. **Contato** - Formulário de contato e informações
6. **Footer** - Links úteis e informações finais

## 🛠️ Instalação e Execução

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/LuizVian4/LuizVian4.github.io.git
   cd LuizVian4.github.io
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto em modo de desenvolvimento**
   ```bash
   npm start
   ```

4. **Abra o navegador**
   - O projeto estará disponível em: `http://localhost:3000`

### Scripts Disponíveis

- `npm start` - Executa o projeto em modo de desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm test` - Executa os testes
- `npm run eject` - Ejeta as configurações do Create React App

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Header.js       # Cabeçalho com navegação
│   ├── Hero.js         # Seção principal
│   ├── About.js        # Seção sobre
│   ├── Interests.js    # Seção de interesses
│   ├── Contact.js      # Seção de contato
│   └── Footer.js       # Rodapé
├── App.js              # Componente principal
├── index.js            # Ponto de entrada
└── index.css           # Estilos globais e Tailwind
```

## 🎨 Personalização

### Cores
As cores podem ser personalizadas no arquivo `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... outras variações
  },
  dark: {
    50: '#f8fafc',
    100: '#f1f5f9',
    // ... outras variações
  }
}
```

### Fontes
As fontes podem ser alteradas no arquivo `tailwind.config.js`:

```javascript
fontFamily: {
  'montserrat': ['Montserrat', 'sans-serif'],
  'varela': ['Varela Round', 'sans-serif'],
}
```

### Imagens
As imagens estão localizadas na pasta `public/img/`:
- `wallpaper.jpg` - Imagem de fundo do hero
- `Luiz.jpg` - Foto do perfil
- `bahia.jpg` - Imagem do interesse Bahia
- `programming.jpg` - Imagem do interesse Programação
- `cinema.jpg` - Imagem do interesse Cinema

## 🌐 Deploy

### GitHub Pages
Para fazer deploy no GitHub Pages:

1. **Build do projeto**
   ```bash
   npm run build
   ```

2. **Configure o GitHub Pages** para usar a pasta `build/`

### Outras Plataformas
O projeto pode ser deployado em qualquer plataforma que suporte aplicações React estáticas:
- Netlify
- Vercel
- Firebase Hosting
- AWS S3 + CloudFront

## 📱 Responsividade

O website é totalmente responsivo e funciona perfeitamente em:
- 📱 Dispositivos móveis
- 💻 Tablets
- 🖥️ Desktops
- 🖥️ Telas grandes

## 🎭 Animações

As animações são implementadas usando:
- **Framer Motion** - Para animações de componentes
- **Tailwind CSS** - Para animações CSS
- **React Intersection Observer** - Para animações baseadas em scroll

## 🔧 Configurações Adicionais

### PostCSS
O projeto inclui configuração do PostCSS para otimização automática do CSS.

### Autoprefixer
Configurado automaticamente para compatibilidade com diferentes navegadores.

## 📞 Suporte

Para dúvidas ou sugestões, entre em contato:
- **Email**: luizviana.mn@gmail.com
- **LinkedIn**: [Luiz Felipe Viana](https://www.linkedin.com/in/luiz-felipe-viana-9a3a28180)
- **GitHub**: [LuizVian4](https://github.com/LuizVian4)

## 📄 Licença

Este projeto é de uso pessoal e educacional.

---

**Desenvolvido com ❤️ por Luiz Felipe Viana**