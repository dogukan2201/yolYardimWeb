import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Mehmet Yılmaz",
    location: "Trabzon, Türkiye",
    text: "Gece geç saatte otoyolda lastiğim patladı ve yolda kaldım. Yol Yardım Trabzon 20 dakika içinde geldi ve beni hızlıca yola devam ettirdi. Mükemmel hizmet!",
    rating: 5,
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    name: "Ayşe Kaya",
    location: "Ortahisar, Trabzon",
    text: "Alışveriş yaparken arabamın aküsü bitti. Yol Yardım Trabzon'u aradım ve hemen geldiler. Teknisyen çok profesyoneldi ve arabamı hemen çalıştırdı. Kesinlikle tavsiye ederim!",
    rating: 5,
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    name: "Ali Demir",
    location: "Akçaabat, Trabzon",
    text: "Anahtarlarım arabada kaldı ve işe yetişmem gerekiyordu. Yol Yardım Trabzon 15 dakika içinde imdadıma yetişti ve arabama hiçbir hasar vermeden içeri girmemi sağladı.",
    rating: 4,
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section id="testimonials" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Müşterilerimiz Ne Diyor?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Sadece bizim sözümüze güvenmeyin. İşte yardım ettiğimiz
            müşterilerimizin gerçek deneyimleri.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="rounded-xl bg-white shadow-lg p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-grow">
                <div className="flex mb-3">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  {[...Array(5 - testimonials[currentIndex].rating)].map(
                    (_, i) => (
                      <Star key={i} size={20} className="text-gray-300" />
                    )
                  )}
                </div>
                <blockquote className="text-slate-700 text-lg italic mb-4">
                  "{testimonials[currentIndex].text}"
                </blockquote>
                <div>
                  <p className="font-semibold text-slate-800">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-slate-500 text-sm">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow hover:bg-slate-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="text-slate-700" />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? "bg-red-600" : "bg-slate-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow hover:bg-slate-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="text-slate-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
