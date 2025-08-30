// import { Header } from '../../components/landing/Header';
// import { Footer } from '../../components/landing/Footer';
// import { Lock, Eye, FileText, Users, AlertTriangle } from 'lucide-react';
// import page_head from '../../assets/images/home/blue_shape_bg_697e819f.svg';


// interface PrivacyPageProps {
//   onNavigate: (page: string) => void;
// }

// export function PrivacyPage({ onNavigate }: PrivacyPageProps) {
//   return (
//     <div className="min-h-screen bg-white sm:mx-auto sm:my-[25px] sm:max-w-[1600px] sm:w-full sm:bg-[#f2f2f2] sm:border-l-[25px] sm:border-r-[25px] sm:border-white">
//       <Header onNavigate={onNavigate} />

//       <main>
//         <div className="pt-20 bg-[#121e2c]">
//           <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

//             <div className="flex items-center mb-6 space-x-4">
//               <div className="h-1 bg-[#c12033] -ml-[5rem] lg:-ml-[22rem] w-[28%]"></div>
//               <h1 className="font-parkinsonRoman text-midnight text-5xl font-normal text-white tracking-1">
//                 HIPAA Compliance & Privacy
//               </h1>
//             </div>
//             <p className="text-subHeading font-nunito text-white/50 leading-[1.42] font-normal max-w-xl mt-2 text-subHeading">
//               Your privacy and the confidentiality of those you advocate for is our highest priority. Learn how we protect sensitive information while enabling powerful advocacy.
//             </p>

//           </div>
//         </div>
//         <div className="bg-[#f2f2f2]">
//           <img
//             src={page_head}
//             alt="section end"
//             className="w-full h-full rotate-180"
//           />
//         </div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//           {/* HIPAA Compliance */}
//           <div className="bg-blue-50 rounded-2xl p-8 mb-12">
//             <div className="flex items-center space-x-3 mb-6">
//               <Lock className="h-8 w-8 text-blue-600" />
//               <h2 className="text-3xl font-bold text-gray-900">HIPAA Compliance</h2>
//             </div>
//             <p className="text-gray-700 leading-relaxed mb-6">
//               Our Pregnancy Support Tracker is fully compliant with the Health Insurance Portability and Accountability Act (HIPAA) and follows all federal regulations for protecting sensitive health information.
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="bg-white rounded-xl p-6">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Safeguards</h3>
//                 <ul className="space-y-2 text-gray-600">
//                   <li>• End-to-end encryption for all data transmission</li>
//                   <li>• Secure, encrypted database storage</li>
//                   <li>• Multi-factor authentication required</li>
//                   <li>• Regular security audits and updates</li>
//                 </ul>
//               </div>

//               <div className="bg-white rounded-xl p-6">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-3">Administrative Safeguards</h3>
//                 <ul className="space-y-2 text-gray-600">
//                   <li>• Role-based access controls</li>
//                   <li>• Comprehensive staff training</li>
//                   <li>• Regular compliance monitoring</li>
//                   <li>• Incident response procedures</li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* Privacy Principles */}
//           <div className="mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Privacy Principles</h2>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <div className="text-center">
//                 <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
//                   <Eye className="h-6 w-6 text-green-600" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-3">Minimal Data Collection</h3>
//                 <p className="text-gray-600">
//                   We only collect information necessary for advocacy purposes and never request personally identifiable information about individuals being reported on.
//                 </p>
//               </div>

//               <div className="text-center">
//                 <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
//                   <FileText className="h-6 w-6 text-blue-600" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-3">Anonymized Reporting</h3>
//                 <p className="text-gray-600">
//                   All reports are automatically anonymized to protect the identity of both reporters and those they advocate for while maintaining data integrity.
//                 </p>
//               </div>

//               <div className="text-center">
//                 <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
//                   <Users className="h-6 w-6 text-purple-600" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-3">Controlled Access</h3>
//                 <p className="text-gray-600">
//                   Only authorized personnel with legitimate advocacy needs can access reports, and all access is logged and monitored.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Data Protection */}
//           <div className="bg-gray-50 rounded-2xl p-8 mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Protect Your Data</h2>

//             <div className="space-y-6">
//               <div className="flex items-start space-x-4">
//                 <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                   <span className="text-white text-sm font-bold">1</span>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Data Transmission</h3>
//                   <p className="text-gray-700">All data is encrypted using industry-standard TLS 1.3 encryption during transmission between your device and our servers.</p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                   <span className="text-white text-sm font-bold">2</span>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900 mb-2">Encrypted Storage</h3>
//                   <p className="text-gray-700">All stored data is encrypted at rest using AES-256 encryption, ensuring that even if physical servers were compromised, data remains protected.</p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                   <span className="text-white text-sm font-bold">3</span>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900 mb-2">Access Controls</h3>
//                   <p className="text-gray-700">Multi-factor authentication, role-based permissions, and regular access reviews ensure only authorized individuals can view reports.</p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                   <span className="text-white text-sm font-bold">4</span>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900 mb-2">Regular Audits</h3>
//                   <p className="text-gray-700">We conduct quarterly security audits and annual HIPAA compliance reviews to ensure our systems meet the highest standards.</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Important Guidelines */}
//           <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 mb-12">
//             <div className="flex items-center space-x-3 mb-6">
//               <AlertTriangle className="h-8 w-8 text-yellow-600" />
//               <h2 className="text-2xl font-bold text-gray-900">Important Guidelines for Users</h2>
//             </div>

//             <div className="space-y-4">
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2">What NOT to Include in Reports:</h3>
//                 <ul className="space-y-1 text-gray-700 ml-4">
//                   <li>• Full names of individuals being reported on</li>
//                   <li>• Social Security numbers or identification numbers</li>
//                   <li>• Specific room numbers or bed assignments</li>
//                   <li>• Detailed medical record information</li>
//                   <li>• Immigration case numbers or A-numbers</li>
//                 </ul>
//               </div>

//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2">What TO Include:</h3>
//                 <ul className="space-y-1 text-gray-700 ml-4">
//                   <li>• General facility name or location</li>
//                   <li>• Description of the issue or concern</li>
//                   <li>• Approximate dates and timeframes</li>
//                   <li>• Your professional role and organization (optional)</li>
//                   <li>• Severity level and urgency indicators</li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* Contact Information */}
//           <div className="bg-blue-600 rounded-2xl p-8 text-center text-white">
//             <h3 className="text-2xl font-bold mb-4">Questions About Privacy?</h3>
//             <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
//               If you have questions about our privacy practices, HIPAA compliance, or data security measures, our privacy team is here to help.
//             </p>
//             <div className="space-y-2">
//               <p className="text-blue-100">Privacy Officer: privacy@wrc-tracker.org</p>
//               <p className="text-blue-100">Security Team: security@wrc-tracker.org</p>
//               <p className="text-blue-100">24/7 Support: (555) 123-4567</p>
//             </div>
//           </div>
//         </div>
//       </main>
//       <div>
//         <img
//           src={page_head}
//           alt="section end"
//           className="w-full h-full"
//         />
//       </div>
//       <Footer onNavigate={onNavigate} />
//     </div>
//   );
// }

import { Header } from '../../components/landing/Header';
import { Footer } from '../../components/landing/Footer';
import { Lock, Eye, FileText, Users, AlertTriangle, Shield, Database, Phone, Mail } from 'lucide-react';
import page_head from '../../assets/images/home/blue_shape_bg_697e819f.svg';

interface PrivacyPageProps {
  onNavigate: (page: string) => void;
}

export function PrivacyPage({ onNavigate }: PrivacyPageProps) {
  return (
    <div className="min-h-screen bg-white sm:mx-auto sm:my-[25px] sm:max-w-[1600px] sm:w-full sm:bg-[#f2f2f2] sm:border-l-[25px] sm:border-r-[25px] sm:border-white">
      <Header onNavigate={onNavigate} />
      <main>
        <div className="pt-20 bg-[#121e2c]">
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className="flex items-center mb-6 space-x-4">
              <div className="h-1 bg-[#c12033] -ml-[5rem] lg:-ml-[22rem] w-[28%]"></div>
              <h1 className="font-parkinsonRoman text-midnight text-5xl font-normal text-white tracking-1">
                Privacy Policy & HIPAA Compliance
              </h1>
            </div>
            <p className="text-subHeading font-nunito text-white/50 leading-[1.42] font-normal max-w-5xl mt-2">
              The Women’s Refugee Commission <span className="text-red-600 font-semibold">(“WRC,” “we,” “us,” or “our”)</span> values your private information and understands the need for <span className="text-red-600 font-semibold">security</span> and <span className="text-red-600 font-semibold">trust</span> surrounding such information. This <span className="text-red-600 font-semibold">privacy policy (“Policy”)</span> applies to information we collect when you access the <span className="text-red-600 font-semibold">WRC website</span> located at <a href="https://www.womensrefugeecommission.org/" className="text-red-600 underline">https://www.womensrefugeecommission.org/</a> and other websites or online services that link to this Policy and are operated by WRC (collectively, the <span className="text-red-600 font-semibold">“Sites”</span>). Please review the entire Policy and feel free to contact us using the contact information below if you have any questions. By using the Sites, you consent to the <span className="text-red-600 font-semibold">collection, use, and disclosure</span> of your information in accordance with the Policy.
            </p>

          </div>
        </div>

        <div className="bg-[#f2f2f2]">
          <img src={page_head} alt="section end" className="w-full h-full rotate-180" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Critical HIPAA Notice */}
          <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-12">
            <div className="flex items-center space-x-3 mb-4">
              <h2 className="font-parkinsonRoman text-3xl font-bold text-red-800 tracking-1 uppercase">Important HIPAA Notice</h2>
            </div>
            <div className="text-red-700 space-y-3">
              <p className="font-parkinsonRoman font-normal text-2xl">
                This platform is NOT HIPAA compliant. Please do not include any personally identifiable information or information that could constitute a HIPAA violation.
              </p>
              <p className='font-nunito text-xl'>
                When reporting, exclude: full names, Social Security numbers, medical record numbers, specific room assignments, detailed medical records, immigration case numbers, or any other information that could identify specific individuals.
              </p>
            </div>
          </div>


          {/* Information We Collect */}
          <div className="rounded-2xl mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <h2 className="font-parkinsonRoman text-3xl font-bold text-midnight tracking-[0.015rem]">Information We Collect</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#121e2c] font-nunito rounded-xl p-6 
                  transition-transform transform hover:scale-[1.02] 
                  hover:shadow-lg hover:shadow-red-500/40">
                <h3 className="text-subHeading font-bold mb-4 text-white/70">
                  Information You Provide Directly
                </h3>
                <ul className="space-y-2 text-gray-600 text-white/50 text-lg">
                  <li>• Your professional role and organization (optional)</li>
                  <li>• Contact information (email, phone, messaging preferences)</li>
                  <li>• Description of incidents or concerns witnessed</li>
                  <li>• General facility location information</li>
                  <li>• Approximate dates and timeframes</li>
                  <li>• Severity assessments and urgency indicators</li>
                </ul>
              </div>

              <div className="bg-[#121e2c] font-nunito rounded-xl p-6 
                  transition-transform transform hover:scale-[1.02] 
                  hover:shadow-lg hover:shadow-red-500/40">
                <h3 className="text-subHeading font-bold mb-4 text-white/70">
                  Information We Collect Automatically
                </h3>
                <ul className="space-y-2 text-gray-600 text-white/50 text-lg">
                  <li>• IP address and device identifiers</li>
                  <li>• Browser type and operating system</li>
                  <li>• Pages visited and navigation patterns</li>
                  <li>• Date and time of visits</li>
                  <li>• Standard server log information</li>
                </ul>
              </div>
            </div>

          </div>

          {/* How We Use Information */}
          <div className="mb-12">
            <h2 className="font-parkinsonRoman text-3xl font-bold text-midnight tracking-[0.015rem] mb-6">How We Use Your Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <FileText className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3 text-subHeading font-bold mb-4">Advocacy & Documentation</h3>
                <p className="text-nunito text-lg text-gray-600">
                  Reports are used to identify patterns, support legal challenges, inform policy advocacy, and assist with congressional testimony and media coverage.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <Users className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="text-gray-900 mb-3 text-subHeading font-semibold mb-4">Follow-up Communication</h3>
                <p className="text-nunito text-lg text-gray-600">
                  We contact reporters within 48 hours for verification and additional details, using secure communication methods based on your preferences.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <Shield className="h-8 w-8 text-purple-600 mb-4" />
                <h3 className="text-gray-900 mb-3 text-subHeading font-semibold mb-4">Platform Security</h3>
                <p className="text-nunito text-lg text-gray-600">
                  Information is used to protect platform security, detect unauthorized access, and ensure the integrity of our reporting system.
                </p>
              </div>
            </div>
          </div>

          {/* Data Protection */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h2 className="font-parkinsonRoman text-3xl font-bold text-midnight tracking-[0.015rem] mb-6">How We Protect Your Data</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 text-subHeading font-bold mb-4">Secure Data Transmission</h3>
                  <p className="text-nunito text-lg text-gray-600">All data is encrypted using industry-standard TLS 1.3 encryption during transmission between your device and our servers.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 text-subHeading font-bold mb-4">Encrypted Storage</h3>
                  <p className="text-nunito text-lg text-gray-600">All stored data is encrypted at rest using AES-256 encryption. Information is maintained in the United States in accordance with U.S. laws.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 text-subHeading font-bold mb-4">Access Controls</h3>
                  <p className="text-nunito text-lg text-gray-600">Multi-factor authentication, role-based permissions, and regular access reviews ensure only authorized WRC personnel can view reports.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 text-subHeading font-bold mb-4">Regular Security Reviews</h3>
                  <p className="text-nunito text-lg text-gray-600">We conduct regular security audits and maintain comprehensive monitoring to protect against unauthorized access and data breaches.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Information Sharing */}
          <div className="mb-12">
            <h2 className="font-parkinsonRoman text-3xl font-bold text-midnight tracking-[0.015rem] mb-6">When We Share Information</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-400 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 text-subHeading font-bold mb-4">Partner Organizations</h3>
                <p className="text-nunito text-lg text-gray-600">
                  We may share information with partner organizations like the National Immigration Law Center that have similar advocacy goals, but only when consistent with applicable law and our privacy principles.
                </p>
              </div>

              <div className="border-l-4 border-green-400 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 text-subHeading font-bold mb-4">Service Providers</h3>
                <p className="text-nunito text-lg text-gray-600">
                  We work with trusted service providers for hosting, security, and platform maintenance. All providers are contractually required to maintain the confidentiality and security of your information.
                </p>
              </div>

              <div className="border-l-4 border-yellow-400 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 text-subHeading font-bold mb-4">Legal Requirements</h3>
                <p className="text-nunito text-lg text-gray-600">
                  We may disclose information to respond to legal process, protect our rights and interests, or address security and safety concerns, but will notify you when legally permissible.
                </p>
              </div>
            </div>
          </div>

          {/* Reporter Guidelines */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 mb-12 font-nunito">
            <div className="flex items-center space-x-3 mb-6">
              <AlertTriangle className="h-8 w-8 text-yellow-600" />
              <h2 className="text-2xl font-bold text-gray-900">Critical Guidelines for Reporters</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3">NEVER Include:</h3>
                <ul className="text-lg space-y-2 text-gray-700">
                  <li>• Full names of detained individuals</li>
                  <li>• Social Security numbers or ID numbers</li>
                  <li>• Medical record numbers</li>
                  <li>• Specific room numbers or bed assignments</li>
                  <li>• Detailed medical record information</li>
                  <li>• Immigration case numbers (A-numbers)</li>
                  <li>• Any personally identifiable information</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-3">Safe to Include:</h3>
                <ul className="space-y-2 text-lg text-gray-700">
                  <li>• General facility name or location</li>
                  <li>• Description of conditions or treatment</li>
                  <li>• Approximate dates and timeframes</li>
                  <li>• Your professional role (optional)</li>
                  <li>• Severity and urgency assessments</li>
                  <li>• General demographics (age range, etc.)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Your Rights and Choices */}
          <div className="mb-12">
            <h2 className="font-parkinsonRoman text-3xl font-bold text-midnight tracking-[0.015rem] mb-6">Your Privacy Rights and Choices</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <Eye className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3 text-subHeading font-bold mb-4">Anonymous Reporting</h3>
                <p className="text-nunito text-lg text-gray-600">
                  You can submit reports anonymously, though this may limit our ability to follow up for additional details or verification.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <Mail className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3 text-subHeading font-bold mb-4">Communication Preferences</h3>
                <p className="text-nunito text-lg text-gray-600">
                  Choose how we contact you: email, phone, Signal, WhatsApp, or secure messaging through our platform.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <Lock className="h-8 w-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3 text-subHeading font-bold mb-4">Data Control</h3>
                <p className="text-nunito text-lg text-gray-600">
                  You may request to update, restrict, or delete your personal information by contacting our privacy team.
                </p>
              </div>
            </div>


          </div>

          {/* Contact Information */}
          <div className="bg-[#121e2c] rounded-2xl p-8 text-center text-white mb-12">
            <h3 className="text-2xl font-bold mb-4 text-lg font-semibold mb-3 text-subHeading font-bold mb-4">Questions About Privacy?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-nunito text-lg">
              If you have questions about our privacy practices, data security measures, or need to exercise your privacy rights, our team is here to help.
            </p>
            <div className="flex justify-center my-12">
              <a
                href="mailto:info@wrcommission.org"
                className="group relative flex items-center justify-center border border-[#707070] px-6 py-4 overflow-hidden transition-all duration-500 max-w-md w-full"
              >
                {/* Left red bar */}
                <span className="absolute left-0 top-0 h-full w-0 bg-[#c12033] transition-all duration-500 group-hover:w-full"></span>

                {/* Centered Text */}
                <span className="uppercase relative z-10 text-gray-300 font-semibold transition-all duration-500 group-hover:text-white/70 font-parkinsonRoman text-center tracking-[0.1rem]">
                  Get in Touch
                </span>

                {/* Arrow icon */}
                <span className="absolute right-4 z-10">
                  <svg
                    width="22"
                    height="22"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 17.804 17.804"
                    className="fill-red-600 transition-colors duration-500 group-hover:fill-white/70"
                  >
                    <path d="M2.067.043a.4.4 0 0 1 .426.042l13.312 8.503a.41.41 0 0 1 .154.313c0 .12-.061.237-.154.314L2.492 17.717a.402.402 0 0 1-.25.087l-.176-.04a.399.399 0 0 1-.222-.361V.402c0-.152.086-.295.223-.359z"></path>
                  </svg>
                </span>
              </a>
            </div>


          </div>

        </div>
      </main>

      <div>
        <img src={page_head} alt="section end" className="w-full h-full" />
      </div>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}