// src/components/UalaSection.tsx
import { useEffect, useRef, useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { ChevronDown, CheckCircle2 } from 'lucide-react';

import NippyLogotype from '/nippylogo.png'; // Logo oscuro para fondo claro
import Ualalogo from '/ualaLogo.png';

const UalaSection = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('future-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    'mastercard.benefit1',
    'mastercard.benefit2',
    'mastercard.benefit3',
    'mastercard.benefit4',
    'mastercard.benefit5',
  ];

  return (
    <section
      ref={sectionRef}
      id="uala-section"
      // CAMBIO: Fondo blanco y texto primario
      style={{ backgroundColor: 'hsl(var(--background))' }}
      className="min-h-screen flex flex-col justify-center px-4 md:px-8 py-24 relative overflow-hidden"
    >
      <div 
        className={`
          absolute top-4 left-4 md:top-6 md:left-6 lg:top-8 lg:left-8 z-20 
          transition-all duration-1000 ease-out
          ${isVisible ? 'opacity-75 translate-y-0' : 'opacity-0 -translate-y-5'}
        `}
        style={{ transitionDelay: '0.1s' }}
      >
        <img 
          src={NippyLogotype} 
          alt={t('hero.company_logo_alt')} 
          className="h-6 md:h-8 w-auto"
        />
      </div>

      <div className="max-w-7xl mx-auto w-full text-center">
        <div
          className={`mb-12 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          style={{ transitionDelay: '0.2s' }}
        >
          <div className="flex flex-col justify-center items-center gap-y-6">
            <img 
              src={Ualalogo} 
              alt="Uala Logo" 
              // CAMBIO: Logo de Ualá más grande
              className="w-40 md:w-48 h-auto"
            />
            {/* CAMBIO: Color de texto para fondo claro */}
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight tracking-tight">
              <Trans
                i18nKey="mastercard.title"
                components={{ 1: <span className="text-uala-blue font-bold" /> }}
              />
            </h2>
          </div>
        </div>
        
        <div
          className={`
            max-w-3xl mx-auto
            transition-all duration-1000 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
          `}
          style={{ transitionDelay: '0.4s' }}
        >
          {/* CAMBIO: Color de texto para fondo claro */}
          <h3 className="text-xl md:text-2xl font-semibold text-accent mb-6">{t('mastercard.benefits_title')}</h3>
          <ul className="space-y-4 text-left">
            {benefits.map((benefitKey, index) => (
              <li 
                key={index}
                className={`
                  flex items-start gap-3 text-lg md:text-xl text-foreground/90
                  transition-all duration-700 ease-out transform
                  ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
                `}
                style={{ transitionDelay: `${0.6 + index * 0.1}s` }}
              >
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                {/* CAMBIO: Color de texto para fondo claro */}
                <span className="text-foreground">{t(benefitKey)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button
        onClick={scrollToNextSection}
        // CAMBIO: Color de flecha para fondo claro
        className="absolute bottom-16 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors duration-300 animate-bounce-slow z-10"
        aria-label="Scroll down"
      >
        <ChevronDown size={40} strokeWidth={1.5} />
      </button>
    </section>
  );
};

export default UalaSection;