import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SplitText = ({ 
  text, 
  className = "", 
  staggerDelay = 0.05, 
  animationType = "slideUp",
  delay = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  const characters = text.split('');

  const getAnimationVariants = () => {
    switch (animationType) {
      case 'slideUp':
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        };
      case 'slideDown':
        return {
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 }
        };
      case 'slideLeft':
        return {
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 }
        };
      case 'slideRight':
        return {
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 }
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0 },
          visible: { opacity: 1, scale: 1 }
        };
      case 'rotate':
        return {
          hidden: { opacity: 0, rotate: -180 },
          visible: { opacity: 1, rotate: 0 }
        };
      default:
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        };
    }
  };

  const variants = getAnimationVariants();

  return (
    <div className={className}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={variants}
          transition={{
            duration: 0.5,
            delay: index * staggerDelay,
            ease: "easeOut"
          }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );
};

export default SplitText;
