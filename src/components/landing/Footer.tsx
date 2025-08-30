import { Mail, Phone, MapPin } from 'lucide-react';
import footer_logo from '../../assets/images/logos/wrc_logo.png';
import footer_background_image from '../../assets/images/logos/footer_pattern.png';
import facebook from '../../assets/images/logos/social/facebook.svg';
import insta from '../../assets/images/logos/social/instagram.svg';
import thread from '../../assets/images/logos/social/threads.svg';
import linkedin from '../../assets/images/logos/social/linkedin-svgrepo-com.svg';
import youtube from '../../assets/images/logos/social/youtube.svg';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="relative bg-[#121e2c] text-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={footer_logo}
                alt="WRC Logo"
                className="h-[100px] object-contain"
              />
            </div>
            <p className="font-nunito text-gray-300 text-foterText leading-relaxed">
              Advocating for the rights and protection of pregnant women in immigration custody through systematic reporting and policy change.
            </p>
            <p className="font-nunito text-gray-400 text-foterText leading-relaxed">
              The Women’s Refugee Commission is a 501(c)(3) organization. Donations are deductible to the full extent allowable under IRS regulations.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:justify-end md:space-x-16 space-y-8 md:space-y-0 font-nunito">
            <div>
              <h4 className="font-nunito text-lg font-bold mb-4 text-red-400">Quick Links</h4>
              <ul className="space-y-3 text-lg font-semibold">
                <li>
                  <button onClick={() => onNavigate('landing')} className="font-semiboldtext-gray-300 hover:text-white transition-colors">Home</button>
                </li>
                <li>
                  <button onClick={() => onNavigate('our-story')} className="text-gray-300 hover:text-white transition-colors">Our Story</button>
                </li>
                <li>
                  <button onClick={() => onNavigate('privacy')} className="text-gray-300 hover:text-white transition-colors">Privacy & HIPAA</button>
                </li>
                <li>
                  <button onClick={() => onNavigate('tracker')} className="text-gray-300 hover:text-white transition-colors">Tracker Login</button>
                </li>
                <li>
                  <a href="https://www.redbubble.com/people/wr-commission/shop?asc=u&ga=1&LOF=1" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                    Merch
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-red-400 mb-4">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-300 text-sm">(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-300 text-sm">support@wrc-tracker.org</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-gray-400 mt-1" />
                  <span className="text-gray-300 text-sm">122 East 42nd Street, New York, NY 10168</span>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-sm text-gray-400 mb-2">24/7 Emergency Line:</p>
                <p className="text-lg font-semibold text-red-400">(555) 911-HELP</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-12 pt-4">

        <img
          src={footer_background_image}
          alt="footer background"
          className="absolute top-0 left-0 w-full h-full object-cover lg:object-fill opacity-[1.1] z-0"
        />

        <div className="w-full lg:w-[31%] h-[2px] bg-gray-500 ml-0 lg:ml-[10rem]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 pb-5">
          <div className="flex flex-col md:items-center space-y-3 md:absolute md:top-4">

           


            {/* Social icons */}
            <div className="flex space-x-4 mt-5 lg:mt-0">
              <a href="https://facebook.com/wrcommission" className="hover:opacity-80 transition">
                <img src={facebook} alt="Facebook" className="h-7 w-7" />
              </a>
              <a href="https://www.instagram.com/womensrefugeecommission" className="hover:opacity-80 transition">
                <img src={insta} alt="Instagram" className="h-7 w-7" />
              </a>
              <a href="https://www.linkedin.com/company/wrcommission/" className="hover:opacity-80 transition">
                <img src={linkedin} alt="LinkedIn" className="h-7 w-7" />
              </a>
              <a href="https://www.threads.net/@womensrefugeecommission" className="hover:opacity-80 transition">
                <img src={thread} alt="Threads" className="h-7 w-7" />
              </a>
              <a href="https://www.youtube.com/user/wrcommission" className="hover:opacity-80 transition">
                <img src={youtube} alt="YouTube" className="h-7 w-7" />
              </a>
            </div>
          </div>

          <p className="text-foterText text-gray-400 w-full pt-4 lg:pt-[4rem]">
            Copyright © Women’s Refugee Commission, Inc. {new Date().getFullYear()}
          </p>

          {/* <div className="flex flex-wrap lg:justify-end  justify-start gap-6 font-nunito text-foterText"> */}
          <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-end justify-start gap-2 lg:gap-6 font-nunito text-foterText">
            <a href="https://www.womensrefugeecommission.org/child-and-vulnerable-adult-safeguarding-policy/" className="text-gray-400 hover:text-white transition-colors">Child and Vulnerable Adult Safeguarding Policy</a>
            <a href="https://www.womensrefugeecommission.org/code-of-conduct/" className="text-gray-400 hover:text-white transition-colors">Code of Conduct</a>
            <a href="https://www.womensrefugeecommission.org/ethical-guidelines/" className="text-gray-400 hover:text-white transition-colors">Ethical Guidelines</a>
            <a href="https://www.womensrefugeecommission.org/privacy-policy/" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="https://www.womensrefugeecommission.org/combatting-human-trafficking-policy-and-compliance-plan/" className="text-gray-400 hover:text-white transition-colors">Combatting Human Trafficking: Policy and Compliance Plan</a>
            <a href="https://www.womensrefugeecommission.org/about/dei-commitment-statement/" className="text-gray-400 hover:text-white transition-colors">DEI Commitment Statement</a>
            <a href="https://www.womensrefugeecommission.org/ethics-hotline/" className="text-gray-400 hover:text-white transition-colors">Ethics Hotline: Report an Issue</a>
            <a href="https://www.womensrefugeecommission.org/humanitarian-accountability-framework-statement/" className="text-gray-400 hover:text-white transition-colors">Humanitarian Accountability Framework Statement</a>
          </div>

        </div>
      </div>
    </footer>
  );
}
