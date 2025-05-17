import React from "react";
import { PhoneCall, Mail, MapPin, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Yol Yardım Trabzon</h3>
            <p className="text-slate-300 mb-4">
              Trabzon'da profesyonel yol yardımı ve çekici hizmetleri. Tüm acil
              ihtiyaçlarınız için 7/24 hizmetinizdeyiz.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/yolyardm__otokurtarma/"
                className="text-white hover:text-red-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Ana Sayfa
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Hizmetler
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Referanslar
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-2">
              <li className="text-slate-300">Çekici Hizmeti</li>
              <li className="text-slate-300">Akü Takviye</li>
              <li className="text-slate-300">Yakıt Teslimatı</li>
              <li className="text-slate-300">Kilit Açma</li>
              <li className="text-slate-300">Lastik Değişimi</li>
              <li className="text-slate-300">Yerinde Tamir</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">İletişim Bilgileri</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <PhoneCall size={18} className="mr-3 mt-1 text-red-500" />
                <span>
                  <a
                    href="tel:+905051544831"
                    className="text-slate-300 hover:text-white"
                  >
                    +90 505 154 4831
                  </a>
                </span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-3 mt-1 text-red-500" />
                <span>
                  <a
                    href="mailto:ozturkkurtarma61@gmail.com"
                    className="text-slate-300 hover:text-white"
                  >
                    ozturkkurtarma61@gmail.com
                  </a>
                </span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-red-500" />
                <span className="text-slate-300">
                  Değirmendere/Anadolu Bulvarı,Sanayi Mah. no:25 <br />
                  Ortahisar, Trabzon
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-400">
            &copy; {currentYear} Yol Yardım Trabzon - 7/24 Yol Yardımı. Tüm
            hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
