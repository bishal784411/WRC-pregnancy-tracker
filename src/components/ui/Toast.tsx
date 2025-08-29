
import { useEffect, useState } from 'react';
import { X, Mail } from 'lucide-react';

interface ToastProps {
  message: string;
  type?: 'success' | 'info' | 'warning' | 'error';
  onClose: () => void;
  duration?: number;
}

export function Toast({ message, type = 'info', onClose, duration = 5000 }: ToastProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the slide-in animation
    setIsVisible(true);

    const timer = setTimeout(() => {
      setIsVisible(false);
      // Wait for animation to complete before closing
      setTimeout(onClose, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const typeStyles = {
    success: 'bg-green-50 border-green-200 text-green-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    error: 'bg-red-50 border-red-200 text-red-800'
  };

  const iconColor = {
    success: 'text-green-600',
    info: 'text-blue-600',
    warning: 'text-yellow-600',
    error: 'text-red-600'
  };

  return (
    <div 
      className={`w-96 fixed top-4 right-4 z-50 transform transition-all duration-300 ease-out ${
        isVisible ? 'translate-x-0 translate-y-0 opacity-100' : 'translate-x-full -translate-y-4 opacity-0'
      }`}
    >
      <div className={`border rounded-lg shadow-lg p-4 ${typeStyles[type]}`}>
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Mail className={`h-5 w-5 ${iconColor[type]}`} />
          </div>
          <div className="ml-3 w-0 flex-1">
            <p className="text-sm font-medium">{message}</p>
          </div>
          <div className="ml-4 flex-shrink-0 flex">
            <button
              onClick={() => {
                setIsVisible(false);
                setTimeout(onClose, 300);
              }}
              className={`inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 ${iconColor[type]} hover:bg-gray-100 hover:bg-opacity-50 transition-colors`}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
