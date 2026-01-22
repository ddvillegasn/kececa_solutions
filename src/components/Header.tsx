"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Empresa", href: "/empresa" },
    { name: "Servicios", href: "/servicios" },
    { name: "Clientes", href: "/clientes" },
    { name: "Proyectos Web", href: "/proyectos-web" },
    { name: "Noticias", href: "/noticias" },
    { name: "Contáctenos", href: "/contactenos" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/40 shadow-lg backdrop-blur-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo - Más grande y visible */}
          <Link href="/" className="flex items-center space-x-2 group -my-2">
            <picture>
              <source
                type="image/webp"
                srcSet="/assets/images-optimized/Logo integra-mobile.webp 400w,
                        /assets/images-optimized/Logo integra-tablet.webp 800w"
                sizes="160px"
              />
              <img 
                src="/assets/images-optimized/Logo integra-mobile.webp"
                alt="INTEGRADAV SAS" 
                width={160}
                height={160}
                loading="eager"
                decoding="sync"
                className="h-32 md:h-40 w-auto transition-transform duration-300 group-hover:scale-110 drop-shadow-2xl"
              />
            </picture>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-blue-400 transition-colors font-medium text-base"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 bg-gray-900/95 rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-blue-400 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
