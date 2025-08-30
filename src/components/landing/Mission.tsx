import React from 'react';
import { Card } from '../ui/Card';
import { Shield, Users, Globe, Heart } from 'lucide-react';

export function Mission() {
  const values = [
    {
      icon: Shield,
      title: 'Protection',
      description: 'Advocating for the safety and security of displaced women and children worldwide.'
    },
    {
      icon: Users,
      title: 'Empowerment',
      description: 'Building capacity and leadership among refugee and displaced communities.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Working across borders to create systemic change and lasting solutions.'
    },
    {
      icon: Heart,
      title: 'Dignity',
      description: 'Ensuring every person is treated with respect and has access to their fundamental rights.'
    }
  ];

  return (
    
  <section className="py-20 bg-[#f2f2f2]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="mb-16">
      <div className="flex items-center mb-6">
        {/* Line starting from the left edge of the page */}
        <div className="w-[21rem] h-1 bg-[#c12033] ml-[-19rem] sm:-ml-6 lg:ml-[-22rem] mr-4"></div>
        <h2 className="font-parkinsonRoman text-midnight text-5xl font-normal">
          Our Mission
        </h2>
      </div>
          <p className="text-subHeading font-nunito text-gray-600 leading-[1.42] font-normal w-full sm:w-[70%] max-w-full text-xl text-nunito text-gray-600 leading-relaxed font-normal text-[1.375rem] leading-[1.42]">
            The Women's Refugee Commission advocates for laws, policies, and programs to improve the lives and protect the rights of refugee and displaced women, children, and youth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-nunito text-[1.4rem] font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="font-nunito text-gray-600 leading-relaxed text-[1.2rem]">{value.description}</p>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}