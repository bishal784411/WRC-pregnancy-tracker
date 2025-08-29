import { ArrowRight } from 'lucide-react';
import hero_image from '../../assets/images/WRC-Home-Page-3.png';

export function Hero() {
  return (
    <section className="relative bg-[#121e2c] md:bg-gradient-to-br md:from-blue-900 md:via-blue-800 md:to-blue-700 text-white overflow-hidden min-h-[30rem] md:min-h-[90vh]">

      
      {/* Desktop Background Image */}
      <div className="hidden md:block absolute inset-0 z-0">
        <img
          src={hero_image}
          alt="Supporting refugee women"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>
      </div>

      {/* Mobile Image */}
      <div className="md:hidden w-full">
        <img
          src={hero_image}
          alt="Supporting refugee women"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl sm:mx-auto px-4 md:pt-[16rem] pt-8 md:absolute md:mb-[2rem] sm:pl-[10rem] mb-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-parkinson text-4xl md:text-[4.5rem] font-bold leading-tight mb-6 [text-shadow:0_2px_10px_rgba(0,0,0,0.3)]">
            Protecting the Rights of
            <span className="text-blue-300 block">Pregnant Women</span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl">
            A confidential reporting system that empowers healthcare providers, attorneys, chaplains, and advocates to document and address critical issues affecting pregnant women in immigration detention.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="/"
              className="bg-[#c12033] hover:bg-red-700 text-white transition-colors px-8 py-4 rounded-full uppercase font-semibold text-lg flex items-center justify-center space-x-2"
            >
              <span>Access Tracker</span>
              <ArrowRight className="h-7 w-7" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-blue-200 mb-2">40+</div>
              <div className="text-blue-100">Years of Advocacy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-blue-200 mb-2">50+</div>
              <div className="text-blue-100">Countries Served</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-blue-200 mb-2">1M+</div>
              <div className="text-blue-100">Lives Impacted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
