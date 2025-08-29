import { Header } from '../../components/landing/Header';
import { Footer } from '../../components/landing/Footer';
import { Users, Target, Heart, Shield } from 'lucide-react';
import page_head from '../../assets/images/home/blue_shape_bg_697e819f.svg';

interface OurStoryPageProps {
  onNavigate: (page: string) => void;
}

export function OurStoryPage({ onNavigate }: OurStoryPageProps) {
  return (

    <div className="min-h-screen bg-white sm:mx-auto sm:my-[25px] sm:max-w-[1600px] sm:w-full sm:bg-[#f2f2f2] sm:border-l-[25px] sm:border-r-[25px] sm:border-white">
      <Header onNavigate={onNavigate} />

      <main>
        <div className="pt-20 bg-[#121e2c]">
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            
            <div className="flex items-center mb-6 space-x-4">
              <div className="h-1 bg-[#c12033] -ml-[5rem] lg:-ml-[22rem] w-[28%]"></div>
              <h1 className="font-parkinsonRoman text-midnight text-5xl font-normal text-white">
                Our Story
              </h1>
            </div>
            <p className="text-subHeading font-nunito text-white/50 leading-[1.42] font-normal max-w-xl mt-2 text-subHeading">
              The Women's Refugee Commission has been advocating for the rights and protection of women, children, and youth displaced by conflict and crisis for over 40 years.
            </p>

          </div>
        </div>

        <div className="bg-[#f2f2f2]">
          <img
            src={page_head}
            alt="section end"
            className="w-full h-full rotate-180"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          {/* <button 
            onClick={() => onNavigate('landing')}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </button> */}

          {/* Hero Section */}


          {/* Story Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
              <p className="font-nunito text-[1.25rem] text-gray-700 leading-relaxed">
                Pregnant women in immigration custody face unique vulnerabilities and often lack access to adequate medical care, legal representation, and basic human dignity. Despite existing policies and regulations, systemic issues persist, and individual cases often go unreported or unaddressed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <Target className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
                <p className="font-nunito text-[1.25rem] text-gray-600">
                  To ensure that pregnant women in immigration custody receive proper medical care, legal representation, and humane treatment through systematic advocacy and comprehensive reporting.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <Shield className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Approach</h3>
                <p className="font-nunito text-[1.25rem] text-gray-600">
                  We created a secure, confidential platform that enables healthcare providers, attorneys, chaplains, and advocates to document issues and contribute to systemic change.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Birth of Our Tracker</h2>
            <p className="font-nunito text-[1.25rem] text-gray-700 leading-relaxed mb-6">
              In 2020, we recognized the need for a systematic approach to documenting and addressing the challenges faced by pregnant women in immigration custody. Traditional reporting methods were fragmented, often leading to isolated incidents being overlooked while systemic patterns remained hidden.
            </p>

            <p className="font-nunito text-[1.25rem] text-gray-700 leading-relaxed mb-8">
              Our Pregnancy Support Tracker was born from the collaboration of healthcare professionals, legal advocates, technology experts, and the women whose stories needed to be heard. We designed it with privacy and security at its core, ensuring that sensitive information is protected while enabling powerful advocacy.
            </p>

            <div className="bg-gray-50 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Milestones</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-nunito text-[1.25rem] font-semibold text-gray-900">2020 - Platform Development</h4>
                    <p className="text-gray-600">Launched the first version of our secure reporting platform with HIPAA compliance.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-nunito text-[1.25rem] font-semibold text-gray-900">2021 - Network Expansion</h4>
                    <p className="text-gray-600">Grew our network to include over 200 healthcare providers and legal advocates.</p>
                  </div>
                </div>
                <div className=" flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-nunito text-[1.25rem] font-semibold text-gray-900">2022 - Policy Impact</h4>
                    <p className="text-gray-600">Our data contributed to significant policy changes in three major detention facilities.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-nunito text-[1.25rem] font-semibold text-gray-900">2023 - National Recognition</h4>
                    <p className="text-gray-600">Received recognition from the American Medical Association for our advocacy work.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-nunito text-[1.25rem] font-semibold text-gray-900">2024 - Continued Growth</h4>
                    <p className="text-gray-600">Expanded to serve over 500 advocates across the United States.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Team</h3>
                <p className="font-nunito text-[1.25rem] text-gray-700 leading-relaxed">
                  Our diverse team includes policy experts, healthcare professionals, legal advocates, technology specialists, and most importantly, individuals with lived experience who guide our work and ensure we remain grounded in the realities faced by the communities we serve.
                </p>
              </div>

              <div>
                <Heart className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
                <p className="font-nunito text-[1.25rem] text-gray-700 leading-relaxed">
                  We believe in dignity, respect, and the fundamental right to healthcare for all individuals, regardless of immigration status. Our work is guided by principles of confidentiality, cultural sensitivity, and the understanding that every person deserves to be treated with compassion and respect.
                </p>
              </div>
            </div>

            <div className="bg-blue-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Join Our Story</h3>
              <p className="font-nunito text-[1.25rem] text-blue-100 mb-6 max-w-2xl mx-auto">
                Every report submitted, every advocate who joins our network, and every policy change achieved becomes part of our ongoing story. Together, we're creating a future where pregnant women in immigration custody receive the care, respect, and dignity they deserve.
              </p>
              <button
                onClick={() => onNavigate('tracker')}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Become an Advocate
              </button>
            </div>
          </div>
        </div>
      </main>
       <div>
          <img
            src={page_head}
            alt="section end"
            className="w-full h-full"
          />
        </div>     
      <Footer onNavigate={onNavigate} />
    </div>
    
  );
}