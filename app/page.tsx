'use client';

import { useState, useEffect } from 'react';
import { Inter } from 'next/font/google';
import { FaEnvelope, FaLinkedin, FaXTwitter } from "react-icons/fa6";


const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Hamza';

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  const links = [

    { name: 'Twitter', href: 'https://x.com/ihmzf', icon: <FaXTwitter /> },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/hamza-faisal-b40427294/', icon: <FaLinkedin /> },
    { name: 'Email', href: 'mailto:hamza@asimov.mov', icon: <FaEnvelope /> },
  ];

  return (
    <div className={`${inter.className} min-h-screen flex flex-col justify-between px-6 py-12 md:px-12 md:py-16 lg:px-24 lg:py-20 max-w-4xl mx-auto relative overflow-hidden`}>
      {/* Video Background */}
      <div className="fixed inset-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30 bg-blend-multiply"
          style={{ mixBlendMode: 'screen' }}
        >
          <source src="https://www.pexels.com/download/video/2792967/" type="video/mp4" />
        </video>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center relative z-10">
        <div className="space-y-3">
          {/* Greeting */}
          <div className="text-sm md:text-base text-foreground/60 font-mono tracking-wide">
            I,
          </div>
          
          {/* Name with typing animation */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight">
            {displayedText}
            {displayedText.length < fullText.length && (
              <span className="animate-pulse">|</span>
            )}
          </h1>
          
          {/* Tagline */}
          <p className="text-sm md:text-base lg:text-lg text-foreground/80 font-light max-w-2xl leading-relaxed">
            I love to read history, mathematics, philosphy, sci-fi + technical books.
          </p>
          
          {/* Description */}
          <p className="text-base md:text-lg text-foreground/60 max-w-xl leading-relaxed pt-4">
 I also code. Mainly in Python and Typescript. Learning Machine Learning currently.
          </p>
        </div>
      </div>

      {/* Additional Text */}
      <div className="relative z-10 mb-8">
        <p className="text-sm md:text-base text-foreground/60 font-light">
          trying to simplify the backend architecture of AI applications
        </p>
        <p className="text-sm md:text-base text-foreground/60 font-light flex gap-2">
          by building <p className="font-bold text-white cursor-pointer" onClick={() => window.open('https://asimov.mov', '_blank')}>Asimov </p> 
        </p>
      </div>

      {/* Footer Links */}
      <nav className="mt-16 md:mt-20 relative z-10">
        <ul className="flex flex-wrap gap-6 md:gap-8 text-sm md:text-base cursor-pointer">
          {links.map((link, index) => (
            <li key={index} className="flex items-center gap-2 ">
              {link.icon}
              <a
                href={link.href}
                target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="text-foreground/60 hover:text-foreground transition-colors duration-200 font-mono"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}