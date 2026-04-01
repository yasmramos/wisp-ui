import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'basic' | 'elevated' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'basic',
  padding = 'md',
  hoverable = false,
}) => {
  const baseStyles = "bg-white dark:bg-gray-800 rounded-xl transition-all duration-200";
  
  const variants = {
    basic: "border border-gray-200 dark:border-gray-700",
    elevated: "shadow-lg hover:shadow-xl",
    outlined: "border-2 border-gray-300 dark:border-gray-600"
  };

  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8"
  };

  const hoverStyles = hoverable ? "hover:scale-[1.02] cursor-pointer" : "";

  return (
    <div
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${paddings[padding]}
        ${hoverStyles}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

// Sub-componentes para estructura
export interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className = '' }) => (
  <div className={`mb-4 pb-4 border-b border-gray-200 dark:border-gray-700 ${className}`}>
    {children}
  </div>
);

export interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

export const CardBody: React.FC<CardBodyProps> = ({ children, className = '' }) => (
  <div className={className}>{children}</div>
);

export interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({ children, className = '' }) => (
  <div className={`mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 ${className}`}>
    {children}
  </div>
);
