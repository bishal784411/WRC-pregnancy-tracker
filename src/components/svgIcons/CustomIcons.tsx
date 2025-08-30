// components/icons/CustomIcons.tsx
import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
}

export const SidebarExpandIcon: React.FC<IconProps> = ({ size = 20, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="9" y1="3" x2="9" y2="21" />
    <path d="M13 8l4 4-4 4" />
  </svg>
);

export const SidebarCollapseIcon: React.FC<IconProps> = ({ size = 20, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="9" y1="3" x2="9" y2="21" />
    <path d="M17 16l-4-4 4-4" />
  </svg>
);