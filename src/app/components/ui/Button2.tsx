/**************************************************
    IMPORTS
***************************************************/
import React from 'react';
import Link from 'next/link';

/**************************************************
    TYPES & INTERFACES
***************************************************/
interface ButtonProps {
  title: string;
  icon?: React.ReactNode;
  textColor: string;
  textHoverColor: string;
  backgroundColor: string;
  hoverBG: string;
  onClick?: () => void;
  path?: string;
  borderColor?: string;
  className?: string;
  ariaLabel?: string;
}

/**************************************************
    HELPER FUNCTIONS
***************************************************/
const getTailwindColor = (color: string): string => {
  // Add your color mapping logic here if needed
  return color;
};

/**************************************************
    COMPONENT CODE
***************************************************/
const Button2: React.FC<ButtonProps> = ({
  title,
  icon,
  textColor,
  textHoverColor,
  backgroundColor,
  hoverBG,
  onClick,
  path,
  className = '',
  ariaLabel,
}) => {
  /**************************************************
      CONSTANTS & STATES
  ***************************************************/
  const defaultTextColor = getTailwindColor(textColor);
  const hoverTextColor = getTailwindColor(textHoverColor);
  const bgColor = backgroundColor ? getTailwindColor(backgroundColor) : 'transparent';
  const bgHoverColor = hoverBG ? getTailwindColor(hoverBG) : bgColor;

  /**************************************************
      RENDER HELPERS
  ***************************************************/
  const buttonContent = (
    <button
      className={`flex items-center px-8 md:px-16 py-4 rounded-full uppercase font-Archivo text-2xl shadow-xl hover:shadow-md
        ${defaultTextColor} ${backgroundColor}
        ${hoverTextColor} ${bgHoverColor}
        transition-all duration-300 ${className}`}
      onClick={onClick}
      aria-label={ariaLabel || title}
    >
      {title}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );

  /**************************************************
      RENDER
  ***************************************************/
  if (path) {
    return path.startsWith('http') ? (
      <a href={path} target="_blank" rel="noopener noreferrer" className="inline-block">
        {buttonContent}
      </a>
    ) : (
      <Link href={path} className="inline-block">
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
};

export default Button2; 