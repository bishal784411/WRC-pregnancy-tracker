import { Header } from '../../components/landing/Header';
import { Hero } from '../../components/landing/Hero';
import { Mission } from '../../components/landing/Mission';
import { Impact } from '../../components/landing/Impact';
import { Testimonials } from '../../components/landing/Testimonials';
// import { JoinMission } from '../../components/landing/JoinMission';
import { Footer } from '../../components/landing/Footer';
import white_Section from '../../assets/images/home/white_shape_bottom_bg_c0236bb5.svg';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className='sm:mx-auto sm:my-[25px] sm:max-w-[1600px] sm:w-full sm:bg-[#f2f2f2] sm:border-l-[25px] sm:border-r-[25px] sm:border-white'>
      {/* <div className='mx-auto my-[25px] mx-auto max-w-[1600px] w-full bg-[#f2f2f2] px-[15px] border-l-[25px] border-r-[25px] border-white'> */}
      <div className="min-h-screen bg-white">
        <Header onNavigate={onNavigate} />
        <Hero />
        <Mission />
        <div className="bg-[#f2f2f2]">
          <img
            src={white_Section}
            alt="section end"
            className="w-full h-full"
          />
        </div>
        <Impact />
        <Testimonials />
        {/* <JoinMission onNavigate={onNavigate} /> */}
        <Footer onNavigate={onNavigate} />
      </div>
    </div>
  );
}