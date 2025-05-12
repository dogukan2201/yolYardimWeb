import React from "react";
import { Phone, MessageSquare } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-slate-900 to-slate-800 text-white pt-28 pb-20 md:pt-32 md:pb-28">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/804130/pexels-photo-804130.jpeg?auto=compress&cs=tinysrgb&w=1600')",
            backgroundBlendMode: "overlay",
            opacity: 0.4,
          }}
        ></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-6 animate-pulse">
            7/24 Acil Yardım
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            İhtiyacınız Olduğunda Yol Yardımı
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Trabzon'da yolda mı kaldınız? Profesyonel çekici ve yol yardım
            ekibimiz sizi hızlı ve güvenli bir şekilde yola devam ettirmek için
            7/24 hizmetinizdedir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+905551234567"
              className="flex items-center justify-center gap-2 bg-red-700 hover:bg-red-800 text-white py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 text-lg font-medium"
            >
              <Phone size={20} />
              <span>Hemen Ara</span>
            </a>
            <a
              href="https://wa.me/905551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 text-lg font-medium"
            >
              <MessageSquare size={20} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>
    </section>
  );
};

export default Hero;
