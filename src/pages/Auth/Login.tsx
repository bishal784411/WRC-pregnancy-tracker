// import { useState } from 'react';
// import { LoginForm } from '../../components/forms/LoginForm';
// import { SignupForm } from '../../components/forms/SignupForm';
// import { Card } from '../../components/ui/Card';
// import Logo from '../../assets/images/logos/wrc_logo.png';

// export function Login() {
//   const [isLogin, setIsLogin] = useState(true);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-[#121e2c] to-gray-800 flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-32 w-80 h-80 rounded-full bg-gradient-to-br from-[#c12033] to-red-600 opacity-20 blur-3xl"></div>
//         <div className="absolute -bottom-40 -left-32 w-80 h-80 rounded-full bg-gradient-to-tr from-[#121e2c] to-blue-900 opacity-30 blur-3xl"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-[#c12033] to-[#121e2c] opacity-10 blur-3xl"></div>
//       </div>

//       <div className="absolute inset-0">
//         <div className="absolute top-20 left-20 w-2 h-2 bg-[#c12033] rounded-full opacity-60 animate-pulse"></div>
//         <div className="absolute top-40 right-32 w-1 h-1 bg-white rounded-full opacity-40 animate-ping"></div>
//         <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-[#c12033] rounded-full opacity-50 animate-pulse"></div>
//         <div className="absolute bottom-20 right-20 w-1 h-1 bg-white rounded-full opacity-30 animate-ping"></div>
//       </div>

//       <div className="max-w-md w-full space-y-8 relative z-10">
//         <div className="text-center space-y-6">
//           <div className="flex justify-center">
//             <img src={Logo} alt="WRC Logo" className="h-24 w-auto drop-shadow-lg" />
//           </div>
//           <h1 className="text-3xl font-parkinsonRoman font-bold bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent tracking-[0.1rem]">
//             DHS Pregnancy Tracker
//           </h1>
//         </div>

//         <div className="relative">
//           <div className="absolute inset-0 bg-gradient-to-r from-[#c12033] to-red-600 rounded-full blur-xl opacity-25 transform rotate-1"></div>
//           <div className="absolute inset-0 bg-gradient-to-l from-[#121e2c] to-gray-800 rounded-full blur-lg opacity-20 transform -rotate-1"></div>

//           <Card className="relative bg-white/95 backdrop-blur-sm border border-[#c12033]/10 shadow-2xl">
//             <div className="p-8">
//               <div className="mb-8">
//                 <div className="flex bg-[#121e2c] gap-2 rounded-full p-1 shadow-inner border border-gray-700">
//                   <button
//                     onClick={() => setIsLogin(true)}
//                     className={`flex-1 relative overflow-hidden py-3 px-4 text-sm font-semibold text-center rounded-full transition-all duration-500 group ${
//                       isLogin
//                         ? 'bg-gradient-to-r from-[#c12033] to-red-600 text-white shadow-lg'
//                         : 'text-gray-300 hover:text-white'
//                     }`}
//                   >
//                     <span className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-[#c12033]/30 to-red-600/30 transition-all duration-500 group-hover:w-full rounded-full pointer-events-none"></span>
//                     <span className="font-nunito font-semibold relative z-10 transition-all duration-500">Sign In</span>
//                   </button>

//                   <button
//                     onClick={() => setIsLogin(false)}
//                     className={`flex-1 relative overflow-hidden py-3 px-4 text-sm font-semibold text-center rounded-full transition-all duration-500 group ${
//                       !isLogin
//                         ? 'bg-gradient-to-r from-[#c12033] to-red-600 text-white shadow-lg'
//                         : 'text-gray-300 hover:text-white'
//                     }`}
//                   >
//                     <span className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-[#c12033]/30 to-red-600/30 transition-all duration-500 group-hover:w-full rounded-full pointer-events-none"></span>
//                     <span className="font-nunito font-semibold relative z-10 transition-all duration-500">Sign Up</span>
//                   </button>
//                 </div>
//               </div>

//               <div className="space-y-6 relative">
//                 <div className="absolute -inset-4 bg-gradient-to-r from-[#c12033]/5 to-[#121e2c]/5 rounded-lg blur-sm"></div>
//                 <div className="relative">
//                   {isLogin ? 
//                   <LoginForm /> : <SignupForm />
//                   }
//                   </div>
//               </div>
//             </div>
//           </Card>
//         </div>

//         <div className="flex justify-center">
//           <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#c12033] to-transparent rounded-full opacity-60"></div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from 'react';
import { LoginForm } from '../../components/forms/LoginForm';
import { SignupForm } from '../../components/forms/SignupForm';
import { Card } from '../../components/ui/Card';
import { Toast } from '../../components/ui/Toast';
import Logo from '../../assets/images/logos/wrc_logo.png';

export function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-[#121e2c] to-gray-800 flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Toast at PAGE LEVEL */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
          duration={3000}
        />
      )}

      {/* background elements ... */}

      <div className="max-w-md w-full space-y-8 relative z-10">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <img src={Logo} alt="WRC Logo" className="h-24 w-auto drop-shadow-lg" />
          </div>
          <h1 className="text-3xl font-parkinsonRoman font-bold bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent tracking-[0.1rem]">
            DHS Pregnancy Tracker
          </h1>
        </div>

        <div className="relative">
          <Card className="relative bg-white/95 backdrop-blur-sm border border-[#c12033]/10 shadow-2xl">
            <div className="p-8">
              <div className="mb-8">
                {/* Switch Tabs */}
                <div className="flex bg-[#121e2c] gap-2 rounded-full p-1 shadow-inner border border-gray-700">
                  <button
                    onClick={() => setIsLogin(true)}
                    className={`flex-1 relative overflow-hidden py-3 px-4 text-sm font-semibold text-center rounded-full transition-all duration-500 group ${
                      isLogin
                        ? 'bg-gradient-to-r from-[#c12033] to-red-600 text-white shadow-lg'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <span className="font-nunito font-semibold relative z-10">Sign In</span>
                  </button>
                  <button
                    onClick={() => setIsLogin(false)}
                    className={`flex-1 relative overflow-hidden py-3 px-4 text-sm font-semibold text-center rounded-full transition-all duration-500 group ${
                      !isLogin
                        ? 'bg-gradient-to-r from-[#c12033] to-red-600 text-white shadow-lg'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <span className="font-nunito font-semibold relative z-10">Sign Up</span>
                  </button>
                </div>
              </div>

              <div className="space-y-6 relative">
                {isLogin ? (
                  <LoginForm onToast={(msg, type) => setToast({ message: msg, type })} />

                ) : (
                  <SignupForm onToast={(msg, type) => setToast({ message: msg, type })} />
                )}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
