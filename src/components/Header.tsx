import React, { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-800 shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white">
              Yol Yardım Trabzon
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-white transition-colors">
              Hizmetler
            </a>
            <a href="#testimonials" className="text-white transition-colors">
              Referanslar
            </a>
            <a href="#contact" className="text-white transition-colors">
              İletişim
            </a>
            <a
              href="tel:+905051544831"
              className="flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white py-2 px-4 rounded-full transition-all hover:scale-105"
            >
              <Phone size={18} />
              <span>Acil Çağrı</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 mt-4 py-4 px-2 rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-4">
              <a
                href="#services"
                className="text-white hover:text-yellow-400 transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Hizmetler
              </a>
              <a
                href="#testimonials"
                className="text-white hover:text-yellow-400 transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Referanslar
              </a>
              <a
                href="#contact"
                className="text-white hover:text-yellow-400 transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                İletişim
              </a>
              <a
                href="tel:+905051544831"
                className="flex items-center justify-center gap-2 bg-red-700 text-white py-3 px-4 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone size={18} />
                <span>Acil Çağrı</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
