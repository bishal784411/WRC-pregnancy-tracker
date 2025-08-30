import React from 'react';
import { Home, FileText, LogOut } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { SidebarCollapseIcon } from '../svgIcons/CustomIcons';
import sidebar_logo from '../../assets/images/logos/womens_refugee_commission.original.png';
import sidebar_small from '../../assets/images/logos/womens_refugee_commission.png';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  collapsed: boolean;
}

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  collapsed: boolean;
  onClose?: () => void;
}

export function Sidebar({ activeSection, onSectionChange, collapsed, onClose }: SidebarProps) {
  const { user, logout } = useAuth();

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    ...(user?.role === 'admin'
      ? [{ id: 'reports-submitted', label: 'Reports Submitted', icon: FileText }]
      : [{ id: 'new-issue', label: 'Report Issue', icon: FileText }]
    ),
  ];

  const handleMenuItemClick = (sectionId: string) => {
    onSectionChange(sectionId);
    // Close sidebar on mobile after selecting a menu item
    if (window.innerWidth < 768 && onClose) {
      onClose();
    }
  };

  return (
    <>
      {/* Overlay for mobile */}
      {!collapsed && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={onClose}
        />
      )}

      <div className={`
        fixed left-0 top-0 h-full bg-gray-900 text-white transition-all duration-300 z-30
        ${collapsed
          ? 'md:w-20 -translate-x-full md:translate-x-0'
          : 'w-64 translate-x-0'
        }
      `}>
        {/* Header */}
        <div className="p-4 border-b border-gray-700 flex justify-center">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {!collapsed || window.innerWidth < 768 ? (
                <>
                  <img
                    src={sidebar_logo}
                    alt="WRC Logo"
                    className="h-[58px] object-contain"
                  />
                </>
              ) : (
                <img
                    src={sidebar_small}
                    alt="WRC Logo"
                    className="h-[58px] object-contain"
                  />
              )}
            </div>

            {/* Close button for mobile */}
            {window.innerWidth < 768 && !collapsed && onClose && (
              <button
                onClick={onClose}
                className="p-1 rounded-lg hover:bg-gray-800 transition-colors md:hidden"
                aria-label="Close sidebar"
              >
                <SidebarCollapseIcon />
              </button>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`
                    w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors
                    ${isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }
                  `}
                  title={collapsed && window.innerWidth >= 768 ? item.label : undefined}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  {(!collapsed || window.innerWidth < 768) && <span>{item.label}</span>}
                </button>
              );
            })}
          </div>
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-gray-700">
          <button
            onClick={logout}
            className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
            title={collapsed && window.innerWidth >= 768 ? 'Logout' : undefined}
          >
            <LogOut className="h-5 w-5 flex-shrink-0" />
            {(!collapsed || window.innerWidth < 768) && <span>Logout</span>}
          </button>
        </div>
      </div>
    </>
  );
}