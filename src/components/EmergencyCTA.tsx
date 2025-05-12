import React, { useState, useEffect } from "react";
import { Phone, X } from "lucide-react";

const EmergencyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Mobile Fixed Bottom Button */}
      <div className="fixed bottom-6 left-0 right-0 z-50 md:hidden px-4">
        <a
          href="tel:+905551234567"
          className="flex items-center justify-center gap-2 bg-red-600 text-white py-3 px-6 rounded-full shadow-lg w-full font-medium text-lg animate-pulse"
        >
          <Phone size={20} className="animate-bounce" />
          <span>Acil Çağrı</span>
        </a>
      </div>

      {/* Desktop Floating Button */}
      <div
        className={`fixed z-50 bottom-8 right-8 hidden md:block transition-all duration-300 ${
          isScrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="relative bg-red-600 text-white p-4 rounded-xl shadow-lg max-w-xs">
          <button
            className="absolute -top-2 -right-2 bg-white text-red-600 rounded-full p-1 shadow-md"
            onClick={() => setIsVisible(false)}
            aria-label="Acil çağrı bildirimini kapat"
          >
            <X size={16} />
          </button>
          <div className="mb-3 text-center">
            <p className="font-semibold">Acil yardıma mı ihtiyacınız var?</p>
          </div>
          <a
            href="tel:+905551234567"
            className="flex items-center justify-center gap-2 bg-white text-red-600 hover:bg-red-50 py-2 px-4 rounded-lg font-medium transition-colors"
          >
            <Phone size={18} />
            <span>Hemen Ara</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default EmergencyCTA;
