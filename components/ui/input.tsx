import { cn } from '@/lib/utils';
import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  rightElement?: React.ReactNode;
  leftElement?: React.ReactNode;
  hideBorders?: boolean;
  variant?: 'filled' | 'outline' | 'ghost';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      rightElement,
      leftElement,
      hideBorders,
      variant,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        className={cn(
          'flex flex-row justify-start items-center gap-2 px-3',
          'h-12 w-full items-center rounded-[12px] focus-within:ring-2 focus-within:bg-transparent',
          'focus-within:ring-[#D6BBFB] focus-within:ring-offset-0',
          'focus-within:ring-offset-background transition-all bg-background',
          {
            'border border-input': !hideBorders,
            'bg-transparent': variant === 'outline',
            // "bg-[#F5F7F9]": variant === "filled",
            'focus-within:ring-0 focus-within:ring-transparent bg-transparent p-0':
              variant === 'ghost',
          },
          className,
        )}
      >
        {leftElement && leftElement}
        <input
          type={type}
          className={cn(
            'bg-transparent flex-1 w-full h-full outline-none file:border-0 file:bg-transparent',
            'placeholder:text-muted-foreground text-[14px] text-foreground',
            'placeholder:text-[14px] file:text-sm file:font-medium focus-visible:outline-none',
            'disabled:cursor-not-allowed disabled:opacity-50',
          )}
          ref={ref}
          {...props}
        />
        {rightElement && rightElement}
      </div>
    );
  },
);

Input.displayName = 'Input';

export { Input };
