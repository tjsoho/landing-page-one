'use client'

/**************************************************
    IMPORTS
***************************************************/
import React from 'react';

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
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  path?: string;
  borderColor?: string;
  className?: string;
  ariaLabel?: string;
  
}

/**************************************************
    HELPER FUNCTIONS
***************************************************/
const getTailwindColor = (color: string): string => {
  return color;
};

/**************************************************
    COMPONENT CODE
***************************************************/
const Button: React.FC<ButtonProps> = ({
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
      className={`flex items-center px-3 md:px-8 py-[4px] md:py-2 rounded-full uppercase font-Archivo text-xl
        ${defaultTextColor} ${backgroundColor}
        ${hoverTextColor} ${bgHoverColor}
        transition-all duration-300 ${className}`}
      onClick={onClick}
      aria-label={ariaLabel || title}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {title}
    </button>
  );

  /**************************************************
      RENDER
  ***************************************************/
  if (path) {
    return (
      <a 
        href={path} 
        target="_self"
        className="inline-block"
      >
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
};

export default Button; 