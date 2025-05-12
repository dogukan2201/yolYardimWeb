import React from "react";
import {
  Car,
  Truck,
  Wrench,
  Battery,
  Cast as Gas,
  Key,
  Clock,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    id: 1,
    icon: <Truck size={40} className="text-red-600" />,
    title: "Çekici Hizmeti",
    description:
      "Trabzon'un her yerinde, otomobilden ağır kamyonlara kadar tüm araç tipleri için profesyonel çekici hizmeti.",
  },
  {
    id: 2,
    icon: <Battery size={40} className="text-red-600" />,
    title: "Akü Takviye",
    description:
      "Aracınızı dakikalar içinde tekrar çalışır hale getirmek için hızlı akü takviye hizmeti.",
  },
  {
    id: 3,
    icon: <Gas size={40} className="text-red-600" />,
    title: "Yakıt Teslimatı",
    description:
      "Yakıtınız mı bitti? Bulunduğunuz konuma benzin veya dizel yakıt teslim ediyoruz.",
  },
  {
    id: 4,
    icon: <Key size={40} className="text-red-600" />,
    title: "Kilit Açma",
    description:
      "Anahtarlarınız aracın içinde mi kaldı? Uzman ekibimiz aracınıza tekrar erişmenize yardımcı olabilir.",
  },
  {
    id: 5,
    icon: <Car size={40} className="text-red-600" />,
    title: "Lastik Değişimi",
    description:
      "Yedek lastiğinizle hızlı ve verimli lastik değişimi veya en yakın tamirciye çekici hizmeti.",
  },
  {
    id: 6,
    icon: <Wrench size={40} className="text-red-600" />,
    title: "Yerinde Tamir",
    description:
      "Sizi çekiciye gerek kalmadan yola devam ettirmek için yerinde temel mekanik tamir hizmeti.",
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Her türlü acil durumda size yardımcı olmak için kapsamlı yol yardımı
            ve çekici hizmetleri sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-6 bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-900 rounded-xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <div className="flex items-center justify-center w-20 h-20 bg-red-600 rounded-full mb-4 mx-auto md:mx-0">
                <Clock size={40} />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-3">7/24 Acil Müdahale</h3>
              <p className="text-gray-300 mb-4">
                Ekibimiz, acil çağrılarınıza yanıt vermek için haftanın 7 günü,
                24 saat hizmetinizdedir. Araç arızalarının bir programa bağlı
                olmadığını biliyoruz.
              </p>
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <div className="flex items-center">
                  <ShieldCheck size={20} className="text-green-500 mr-2" />
                  <span>Lisanslı Operatörler</span>
                </div>
                <div className="flex items-center">
                  <Clock size={20} className="text-yellow-500 mr-2" />
                  <span>Hızlı Müdahale</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
