import React from 'react';
import { ArrowRight, Users, Shield, Heart } from 'lucide-react';

interface JoinMissionProps {
  onNavigate: (page: string) => void;
}

export function JoinMission({ onNavigate }: JoinMissionProps) {
  const roles = [
    {
      icon: Users,
      title: 'Healthcare Providers',
      description: 'Document medical care issues and advocate for proper prenatal treatment',
      action: 'Join as Provider'
    },
    {
      icon: Shield,
      title: 'Legal Advocates',
      description: 'Report legal representation gaps and detention condition concerns',
      action: 'Join as Attorney'
    },
    {
      icon: Heart,
      title: 'Support Staff',
      description: 'Chaplains and social workers providing spiritual and emotional support',
      action: 'Join as Advocate'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Join Our Mission
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Be part of a growing network of professionals dedicated to protecting the rights and dignity of pregnant women in immigration custody.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-colors">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {role.title}
                </h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  {role.description}
                </p>
                <button 
                  onClick={() => onNavigate('tracker')}
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  {role.action}
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-blue-100 mb-6">
              Access our secure reporting platform and join hundreds of advocates working to improve conditions for pregnant women in immigration custody.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onNavigate('tracker')}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Access Tracker</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                <Heart className="h-5 w-5" />
                <span>Donate Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}