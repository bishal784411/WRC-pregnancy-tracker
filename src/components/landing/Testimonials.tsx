import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote: "This reporting system has been invaluable in documenting the medical needs of pregnant women in our facility. It's helped us advocate for better prenatal care and ensure no one falls through the cracks.",
      author: "Dr. Sarah Martinez",
      role: "Healthcare Provider",
      location: "Texas Detention Center"
    },
    {
      quote: "As an attorney, having a secure platform to report legal representation gaps has been crucial. The data helps us identify patterns and advocate for systemic changes in immigration court proceedings.",
      author: "Michael Chen, Esq.",
      role: "Immigration Attorney",
      location: "California Legal Aid"
    },
    {
      quote: "The confidential nature of this system allows us to speak up about conditions without fear. It's empowering to know our voices contribute to meaningful change for vulnerable women.",
      author: "Rev. Maria Rodriguez",
      role: "Chaplain",
      location: "Arizona Detention Facility"
    },
    {
      quote: "This platform has revolutionized how we document and address mental health needs. The comprehensive reporting helps us provide better support and advocate for policy improvements.",
      author: "Jennifer Thompson, LCSW",
      role: "Social Worker",
      location: "Florida Immigration Center"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Voices from the Field
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from the healthcare providers, attorneys, chaplains, and advocates who use our platform to make a difference every day.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl bg-gray-50">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 p-12 text-center">
                  <Quote className="h-12 w-12 text-blue-600 mx-auto mb-6" />
                  <blockquote className="text-xl text-gray-700 leading-relaxed mb-8 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="space-y-2">
                    <div className="font-semibold text-gray-900 text-lg">
                      {testimonial.author}
                    </div>
                    <div className="text-blue-600 font-medium">
                      {testimonial.role}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow border border-gray-200"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow border border-gray-200"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}