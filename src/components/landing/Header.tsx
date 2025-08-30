import  { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../../assets/images/logos/wrc_logo.png';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onNavigate: (page: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { label: 'Home', page: 'landing' },
    { label: 'Our Story', page: 'our-story' },
    { label: 'Privacy & HIPAA', page: 'privacy' },
    { label: 'Tracker Login', page: 'tracker' },
    { label: 'Merch', page: 'https://www.redbubble.com/people/wr-commission/shop?asc=u&ga=1&LOF=1' },
  ];

  return (
    <>
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

            {/* Desktop Navigation - Only show on xl screens and above */}
            <nav className="hidden xl:flex items-center space-x-8 ml-auto">
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

            {/* Mobile/Laptop menu button - Show on screens smaller than xl */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="xl:hidden p-2 rounded-lg hover:bg-gray-100 text-white hover:text-gray-800 ml-auto z-[70]"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile/Laptop Navigation Overlay */}
      <div className={`xl:hidden fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Sliding Panel from Right */}
        <div className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-[#121e2c] shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Close button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 text-white z-[70] transition-colors duration-200"
          >
            <X className="h-8 w-8" />
          </button>

          {/* Navigation Content */}
          <div className="flex flex-col justify-center min-h-screen px-8 space-y-8">
            {/* Logo */}
            <div className="mb-8">
              <img
                src={Logo}
                alt="WRC Logo"
                className="w-48 h-32 object-contain drop-shadow-lg"
              />
            </div>

            {/* Navigation Items */}
            <nav className="space-y-6">
              {navItems.map((item, index) =>
                item.page.startsWith('http') ? (
                  <a
                    key={item.label}
                    href={item.page}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    className="block relative font-nunito text-white text-xl hover:text-blue-400 font-medium transition-all duration-300 tracking-[2px] uppercase transform hover:scale-105 pb-2"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      opacity: isMenuOpen ? 1 : 0,
                      transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                      transition: 'all 0.6s ease-out'
                    }}
                  >
                    {item.label}
                    {/* Custom border */}
                    <span
                      className="absolute block"
                      style={{
                        content: '""',
                        borderBottomWidth: '1px',
                        borderBottomStyle: 'solid',
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                        left: '20px',
                        right: '0',
                        bottom: '0',
                        transition: 'border-color 0.3s ease'
                      }}
                    />
                  </a>
                ) : (
                  <button
                    key={item.page}
                    onClick={() => {
                      onNavigate(item.page);
                      setIsMenuOpen(false);
                    }}
                    className="block relative w-full text-left font-nunito text-white text-xl hover:text-blue-400 font-medium transition-all duration-300 tracking-[2px] uppercase transform hover:scale-105 pb-2"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      opacity: isMenuOpen ? 1 : 0,
                      transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                      transition: 'all 0.6s ease-out'
                    }}
                  >
                    {item.label}
                    {/* Custom border */}
                    <span
                      className="absolute block"
                      style={{
                        content: '""',
                        borderBottomWidth: '1px',
                        borderBottomStyle: 'solid',
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                        left: '20px',
                        right: '0',
                        bottom: '0',
                        transition: 'border-color 0.3s ease'
                      }}
                    />
                  </button>
                )
              )}
            </nav>

            {/* Donate Button */}
            <div className="pt-4">
              <a
                href="https://www.every.org/womens-refugee-commission?require_share_info=true&suggestedAmounts=100%2C500%2C1000%2C5000%2C10000&frequency=ONCE&theme_color=000000&method=daf&designation=donate-link&utm_campaign=donate-link"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="inline-block bg-[#c12033] hover:bg-red-700 text-white rounded-full font-medium transition-all duration-300 px-8 py-4 text-lg uppercase cursor-pointer tracking-[2px] transform hover:scale-105 shadow-lg"
                style={{
                  animationDelay: '500ms',
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.6s ease-out'
                }}
              >
                <span>Donate</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}