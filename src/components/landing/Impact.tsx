import React from 'react';
import { TrendingUp, FileText, AlertTriangle, CheckCircle } from 'lucide-react';

export function Impact() {
  const stats = [
    {
      icon: FileText,
      number: '2,847',
      label: 'Reports Submitted',
      description: 'Confidential reports documenting issues and advocating for change'
    },
    {
      icon: AlertTriangle,
      number: '156',
      label: 'Critical Issues Identified',
      description: 'Urgent medical situations requiring immediate attention'
    },
    {
      icon: CheckCircle,
      number: '89%',
      label: 'Issues Resolved',
      description: 'Successful advocacy leading to improved conditions'
    },
    {
      icon: TrendingUp,
      number: '340%',
      label: 'Increase in Reporting',
      description: 'Growing network of advocates using our platform'
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="flex items-center mb-6">
            {/* Line starting from the left edge of the page */}
            <div className="w-[21rem] h-1 bg-[#c12033] ml-[-19rem] sm:-ml-6 lg:ml-[-22rem] mr-2"></div>
            <h2 className="font-parkinsonRoman text-midnight text-5xl font-normal">
              Our Impact
            </h2>
          </div>
          <p className="text-subHeading font-nunito text-gray-600 leading-[1.42] font-normal w-full sm:w-[70%] max-w-full text-xl text-nunito text-gray-600 leading-relaxed font-normal text-[1.375rem] leading-[1.42]">
            Through systematic reporting and advocacy, we're creating measurable change in the lives of pregnant women in immigration custody.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>
                <p className="font-nunito text-[1.2rem] text-gray-600 text-lg">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-blue-600 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Real Change, Real Impact
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our reporting system has led to policy changes, improved medical protocols, and better conditions for pregnant women in immigration custody across the United States.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">12</div>
              <div className="text-blue-100">Facilities Improved</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">5</div>
              <div className="text-blue-100">Policy Changes</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}