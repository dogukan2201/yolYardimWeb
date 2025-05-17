import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Bize Ulaşın
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Yardıma mı ihtiyacınız var? Sadece bir telefon kadar uzağınızdayız.
            Trabzon'da yol yardımı için bize istediğiniz zaman ulaşabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              İletişim Bilgileri
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Phone size={20} className="text-red-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-slate-800">
                    Telefon
                  </h4>
                  <p className="text-slate-600">7/24 Acil Hat</p>
                  <a
                    href="tel:+905051544831"
                    className="text-red-600 hover:text-red-700 font-medium"
                  >
                    +90 505 154 4831
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <MapPin size={20} className="text-red-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-slate-800">
                    Adres
                  </h4>
                  <p className="text-slate-600">
                    Değirmendere/Anadolu Bulvarı,Sanayi Mah. no:25 <br />
                    Ortahisar, Trabzon <br />
                    Türkiye
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Mail size={20} className="text-red-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-slate-800">
                    E-posta
                  </h4>
                  <a
                    href="mailto:ozturkkurtarma61@gmail.com"
                    className="text-red-600 hover:text-red-700"
                  >
                    ozturkkurtarma61@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Clock size={20} className="text-red-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-slate-800">
                    Çalışma Saatleri
                  </h4>
                  <p className="text-slate-600">
                    Haftanın 7 günü, <br />
                    24 saat hizmetinizdeyiz, <br />
                    resmi tatiller dahil
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg h-[400px] lg:h-full">
            {/* Replace with an actual embedded map or static map image for Trabzon */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95340.61992722792!2d39.660815!3d41.00487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40643c495b608957%3A0x7930bf697eb6a8e9!2sTrabzon%2C%20Turkey!5e0!3m2!1sen!2sus!4v1717614451539!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Trabzon Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
