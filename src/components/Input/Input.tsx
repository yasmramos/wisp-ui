import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: 'basic' | 'filled' | 'flushed';
  as?: 'input' | 'textarea';
}

export const Input = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      variant = 'basic',
      className = '',
      as = 'input',
      id,
      ...props
    },
    ref
  ) => {
    const baseStyles = "w-full px-4 py-2 rounded-lg border transition-all duration-200 outline-none";
    
    const variants = {
      basic: "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 text-gray-900 dark:text-white placeholder-gray-400",
      filled: "bg-gray-100 dark:bg-gray-700 border-transparent focus:bg-white dark:focus:bg-gray-800 focus:border-blue-500 text-gray-900 dark:text-white placeholder-gray-500",
      flushed: "bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 rounded-none focus:border-blue-500 text-gray-900 dark:text-white placeholder-gray-400 px-0"
    };

    const errorStyles = "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20";

    const Component = as;
    const testId = as === 'textarea' ? 'textarea-test' : 'input-test';

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {label}
          </label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              {leftIcon}
            </div>
          )}
          
          <Component
            ref={ref}
            id={id}
            data-testid={testId}
            className={`
              ${baseStyles}
              ${variants[variant]}
              ${error ? errorStyles : ''}
              ${leftIcon ? 'pl-10' : ''}
              ${rightIcon ? 'pr-10' : ''}
              ${className}
            `}
            {...(props as any)}
          />
          
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              {rightIcon}
            </div>
          )}
        </div>
        
        {error && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
        )}
        
        {helperText && !error && (
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
