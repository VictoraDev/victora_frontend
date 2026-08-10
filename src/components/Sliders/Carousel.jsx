import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2070&auto=format&fit=crop",
    title: "Precision Engineering",
    title2: "For Tomorrow",
    subtitle:
      "Delivering high-quality sheet metal components with advanced manufacturing technology and world-class engineering solutions.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
    title: "Modern Manufacturing",
    title2: "Infrastructure",
    subtitle:
      "Equipped with advanced machinery, automation, and skilled professionals to deliver excellence.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
    title: "Trusted By",
    title2: "Industry Leaders",
    subtitle:
      "Supplying precision engineered products to leading automotive and industrial companies worldwide.",
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative h-[700px] w-full overflow-hidden">

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-700 ${
            current === index
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          {/* Background */}
          <img
            src={slide.image}
            alt=""
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1b2430]/90 via-[#2f3542]/70 to-[#2f3542]/20"></div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center">

            <div className="max-w-7xl mx-auto w-full px-12">

              <div className="max-w-xl">

                <p className="uppercase tracking-[5px] text-blue-300 font-semibold mb-5">
                  Victora Industries Pvt. Ltd.
                </p>

                <h1 className="text-6xl font-bold text-white leading-tight">
                  {slide.title}
                  <br />
                  {slide.title2}
                </h1>

                <p className="mt-8 text-lg text-gray-200 leading-8">
                  {slide.subtitle}
                </p>

                <div className="mt-10 flex gap-5">

                  <button className="px-9 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold shadow-lg transition">
                    Explore Company
                  </button>

                  <button className="px-9 py-4 border border-white bg-white/10 backdrop-blur text-white rounded-lg hover:bg-white hover:text-[#2f3542] transition">
                    Contact Us
                  </button>

                </div>

              </div>

            </div>

          </div>
        </div>
      ))}

      {/* Previous */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white bg-white/10 backdrop-blur flex items-center justify-center text-white hover:bg-white hover:text-[#2f3542] transition"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Next */}
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white bg-white/10 backdrop-blur flex items-center justify-center text-white hover:bg-white hover:text-[#2f3542] transition"
      >
        <ChevronRight size={22} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">

        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 rounded-full ${
              current === index
                ? "w-10 h-3 bg-blue-500"
                : "w-3 h-3 bg-white/60"
            }`}
          />
        ))}

      </div>

    </section>
  );
};

export default Carousel;