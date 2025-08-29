// // import React, { useState } from 'react';
// // import { useAuth } from '../../hooks/useAuth';
// // import { Button } from '../ui/Button';
// // import { Input } from '../ui/Input';

// // export function SignupForm() {
// //   const [firstName, setFirstName] = useState('');
// //   const [lastName, setLastName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [confirmPassword, setConfirmPassword] = useState('');
// //   const [error, setError] = useState('');

// //   const { signup, loading } = useAuth();

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setError('');

// //     if (password !== confirmPassword) {
// //       setError('Passwords do not match');
// //       return;
// //     }

// //     try {
// //       await signup({
// //         firstName,
// //         lastName,
// //         email,
// //         password,
// //         role: 'admin',
// //       });
// //     } catch (err) {
// //       setError('Failed to create account');
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="space-y-6">
// //       <div className="grid grid-cols-1 gap-4">
// //         <Input
// //           label="First Name"
// //           value={firstName}
// //           onChange={(e) => setFirstName(e.target.value)}
// //           required
// //           placeholder="Enter your first name"
// //         />

// //         <Input
// //           label="Last Name"
// //           value={lastName}
// //           onChange={(e) => setLastName(e.target.value)}
// //           required
// //           placeholder="Enter your last name"
// //         />
// //       </div>

// //       <Input
// //         label="Email Address"
// //         type="email"
// //         value={email}
// //         onChange={(e) => setEmail(e.target.value)}
// //         required
// //         placeholder="Enter your email"
// //       />

// //       <div className="grid grid-cols-1 gap-4">
// //         <Input
// //           label="Password"
// //           type="password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           required
// //           placeholder="Create a password"
// //         />

// //         <Input
// //           label="Confirm Password"
// //           type="password"
// //           value={confirmPassword}
// //           onChange={(e) => setConfirmPassword(e.target.value)}
// //           required
// //           placeholder="Confirm your password"
// //         />
// //       </div>

// //       {error && <div className="text-red-600 text-sm">{error}</div>}

// //       <Button type="submit" fullWidth loading={loading}>
// //         Create Account
// //       </Button>
// //     </form>
// //   );
// // }
// import React, { useState } from 'react';
// import { Button } from '../ui/Button';
// import { Input } from '../ui/Input';
// import { Toast } from '../ui/Toast';

// export function SignupForm() {
//   const [error, setError] = useState('');
//   const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError('');

//     const form = e.currentTarget;
//     const formData = new FormData(form);

//     const password = formData.get('password') as string;
//     const confirmPassword = formData.get('confirmPassword') as string;

//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     // Fake API call result for now
//     const success = Math.random() > 0.5;

//     if (success) {
//       setToast({ message: 'Account created successfully!', type: 'success' });
//     } else {
//       setToast({ message: 'Failed to create account. Try again.', type: 'error' });
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div className="grid grid-cols-1 gap-4">
//           <Input
//             label="First Name"
//             name="firstName"
//             required
//             placeholder="Enter your first name"
//           />

//           <Input
//             label="Last Name"
//             name="lastName"
//             required
//             placeholder="Enter your last name"
//           />
//         </div>

//         <Input
//           label="Email Address"
//           type="email"
//           name="email"
//           required
//           placeholder="Enter your email"
//         />

//         <div className="grid grid-cols-1 gap-4">
//           <Input
//             label="Password"
//             type="password"
//             name="password"
//             required
//             placeholder="Create a password"
//           />

//           <Input
//             label="Confirm Password"
//             type="password"
//             name="confirmPassword"
//             required
//             placeholder="Confirm your password"
//           />
//         </div>

//         {error && <div className="text-red-600 text-sm">{error}</div>}

//         <Button type="submit" fullWidth>
//           Create Account
//         </Button>
//       </form>

//       {toast && (
//         <Toast
//           message={toast.message}
//           type={toast.type}
//           onClose={() => setToast(null)}
//         />
//       )}
//     </>
//   );
// }

import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

interface SignupFormProps {
  onToast: (message: string, type: 'success' | 'error') => void;
}

export function SignupForm({ onToast }: SignupFormProps) {
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Fake success/error
    const success = Math.random() > 0.5;

    if (success) {
      onToast('Account created successfully! If your email is correct, a verification code has been sent! You can now log in.', 'success');
    } else {
      onToast('Failed to create account. Try again.', 'error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-4">
        <Input
          label="First Name"
          name="firstName"
          required
          placeholder="Enter your first name"
        />
        <Input
          label="Last Name"
          name="lastName"
          required
          placeholder="Enter your last name"
        />
      </div>

      <Input
        label="Email Address"
        type="email"
        name="email"
        required
        placeholder="Enter your email"
      />

      <div className="grid grid-cols-1 gap-4">
        <Input
          label="Password"
          type="password"
          name="password"
          required
          placeholder="Create a password"
        />
        <Input
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          required
          placeholder="Confirm your password"
        />
      </div>

      {error && <div className="text-red-600 text-sm">{error}</div>}

      <Button type="submit" fullWidth>
        Create Account
      </Button>
    </form>
  );
}
