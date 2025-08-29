import React, { useState } from 'react';
import { Menu, X, Heart, Shield } from 'lucide-react';
import Logo from '../../assets/images/logos/wrc_logo.png';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onNavigate: (page: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', page: 'landing' },
    { label: 'Our Story', page: 'our-story' },
    { label: 'Privacy & HIPAA', page: 'privacy' },
    { label: 'Tracker Login', page: 'tracker' },
    { label: 'Merch', page: 'https://www.redbubble.com/people/wr-commission/shop?asc=u&ga=1&LOF=1' },
  ];

  return (
    <header className="bg-[#121e2c] shadow-sm sticky top-0 z-50 relative h-16 overflow-visible">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-[0.8rem] overflow-visible">
        <div className="flex justify-between items-center py-4 h-full overflow-visible">
          {/* Logo - Completely overlapping, can extend beyond navbar height */}
          <div className="absolute top-0 z-60">
            <Link to="/" className="block">
              <img
                src={Logo}
                alt="WRC Logo"
                className="
                cursor-pointer 
                w-[14rem] h-[9rem] mt-[-37px] 
                sm:w-[17rem] sm:h-[8.5rem] sm:mt-[-37px] 
                object-contain 
                drop-shadow-lg
              "
              />

            </Link>
          </div>

          {/* Desktop Navigation - Adjusted for overlapping logo */}
          <nav className="hidden md:flex items-center space-x-8 ml-auto">
            {navItems.map((item) =>
              item.page.startsWith('http') ? (
                <a
                  key={item.label}
                  href={item.page}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-nunito text-white/70 hover:text-blue-600 font-medium transition-colors tracking-[1px] uppercase"
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.page}
                  onClick={() => onNavigate(item.page)}
                  className="font-nunito text-white/70 hover:text-blue-600 font-medium transition-colors tracking-[1px] uppercase"
                >
                  {item.label}
                </button>
              )
            )}

            <a
              href="https://www.every.org/womens-refugee-commission?require_share_info=true&suggestedAmounts=100%2C500%2C1000%2C5000%2C10000&frequency=ONCE&theme_color=000000&method=daf&designation=donate-link&utm_campaign=donate-link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#c12033] hover:bg-red-700 text-white rounded-full font-medium transition-colors flex items-center space-x-2 px-[30px] h-[30px] leading-[28px] uppercase cursor-pointer tracking-[2px]"
            >
              <span>Donate</span>
            </a>
          </nav>


          {/* Mobile menu button - Adjusted for overlapping logo */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 text-white hover:text-gray-800 ml-auto"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-600">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) =>
                item.page.startsWith('http') ? (
                  <a
                    key={item.label}
                    href={item.page}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-blue-400 font-medium text-left"
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    key={item.page}
                    onClick={() => {
                      onNavigate(item.page);
                      setIsMenuOpen(false);
                    }}
                    className="text-white/70 hover:text-blue-400 font-medium text-left"
                  >
                    {item.label}
                  </button>
                )
              )}

              <a
                href="https://www.every.org/womens-refugee-commission?require_share_info=true&suggestedAmounts=100%2C500%2C1000%2C5000%2C10000&frequency=ONCE&theme_color=000000&method=daf&designation=donate-link&utm_campaign=donate-link"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#c12033] hover:bg-red-700 text-white rounded-full font-medium transition-colors flex items-center space-x-2 px-[30px] h-[30px] leading-[28px] uppercase cursor-pointer tracking-[2px]"
              >
                <span>Donate</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}