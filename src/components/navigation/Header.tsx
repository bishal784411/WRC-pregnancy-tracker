
import { useState, useRef, useEffect } from 'react';
import { User, Bell, ChevronDown, Shield, Lock, Settings } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { ROLE_LABELS } from '../../utils/constants';
import { SidebarExpandIcon, SidebarCollapseIcon } from '../svgIcons/CustomIcons';

interface HeaderProps {
  onSettingsChange: (section: string) => void;
  sidebarCollapsed: boolean;
  onToggleSidebar: () => void;
}

export function Header({ onSettingsChange, sidebarCollapsed, onToggleSidebar }: HeaderProps) {
  const { user } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const settingsOptions = [
    { id: 'settings-profile', label: 'Profile', icon: User },
    { id: 'settings-security', label: 'Security', icon: Lock },
    { id: 'settings-notifications', label: 'Notifications', icon: Bell },
    { id: 'settings-privacy', label: 'Privacy', icon: Shield },
    {id: 'settings', label: 'Settings', icon: Settings }
  ];

  const handleSettingsClick = (settingId: string) => {
    onSettingsChange(settingId);
    setDropdownOpen(false);
  };
  
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <button
            onClick={onToggleSidebar}
            className="py-2 rounded-lg hover:bg-gray-100 transition-colors"
            title={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {sidebarCollapsed ? (
              <SidebarExpandIcon className='w-[1.5rem] h-[1.5rem]'/>
            ) : (
              <SidebarCollapseIcon className='w-[1.5rem] h-[1.5rem]'/>
            )}
          </button>
            <h1 className="text-2xl font-bold text-gray-900">
              DHS Pregnancy Tracker
            </h1>
        </div>
        
        <div className="flex items-center space-x-4">
          
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-white" />
              </div>
              <div className="text-sm text-left">
                <p className="font-medium text-gray-900">
                  {user?.firstName} {user?.lastName}
                </p>
                <p className="text-gray-500">
                  {user ? ROLE_LABELS[user.role] : ''}
                </p>
              </div>
              <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${
                dropdownOpen ? 'rotate-180' : ''
              }`} />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                {settingsOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <button
                      key={option.id}
                      onClick={() => handleSettingsClick(option.id)}
                      className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <Icon className="h-4 w-4" />
                      <span>{option.label}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}