'use client';

/**************************************************
    IMPORTS
***************************************************/
import React from 'react';

/**************************************************
    TYPES & INTERFACES
***************************************************/
interface Button2Props {
    title: string;
    icon?: React.ReactNode;
    textColor?: string;
    textHoverColor?: string;
    backgroundColor?: string;
    hoverBG?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    ariaLabel?: string;
}

/**************************************************
    COMPONENT CODE
***************************************************/
export default function Button2({ 
    title, 
    icon, 
    textColor = '', 
    textHoverColor = '',
    backgroundColor = '',
    hoverBG = '',
    onClick,
    className = '',
    ariaLabel
}: Button2Props) {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (onClick) onClick(e);
    };

    return (
        <button 
            onClick={handleClick}
            className={`flex items-center px-10  py-4 md:py-4 rounded-full uppercase font-Archivo text-2xl shadow-lg hover:shadow-xl
                ${textColor} ${backgroundColor}
                ${textHoverColor} ${hoverBG}
                transition-all duration-300 ${className}`}
            type="button"
            aria-label={ariaLabel || title}
        >
            {title}
            {icon && <span className="mx-2">{icon}</span>}
        </button>
    );
} 