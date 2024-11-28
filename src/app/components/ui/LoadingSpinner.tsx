'use client'

/**************************************************
    IMPORTS
***************************************************/
import React from 'react';

/**************************************************
    TYPES & INTERFACES
***************************************************/
interface LoadingSpinnerProps {
    size?: 'small' | 'medium' | 'large';
    fullScreen?: boolean;
}

/**************************************************
    COMPONENT CODE
***************************************************/
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
    size = 'medium',
    fullScreen = true 
}) => {
    /**************************************************
        CONSTANTS & STATES
    ***************************************************/
    const spinnerSizes = {
        small: 'h-16 w-16',
        medium: 'h-24 w-24',
        large: 'h-32 w-32'
    };

    const containerClasses = fullScreen 
        ? "fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50"
        : "flex items-center justify-center";

    /**************************************************
        RENDER
    ***************************************************/
    return (
        <div className={containerClasses}>
            <div className={`
                animate-spin 
                rounded-full 
                border-t-2 
                border-b-2 
                border-brand-green
                ${spinnerSizes[size]}
            `}></div>
        </div>
    );
};

export default LoadingSpinner; 