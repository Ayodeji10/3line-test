'use client';

import { cn } from '@/lib/utils';
import { Button, ButtonProps } from '@/components/ui';
import { ErrorIcon } from '../icons';

type Props = {
  className?: string;
  retryHandler?(): void;
  errorMessage?: string;
  isLoading?: boolean;
  subActionHandler?(): void;
  subActionBtnLabel?: string;
  buttonLabel?: string;
  maxImgH?: string;
  hideIcon?: boolean;
  btnBrops?: ButtonProps;
};

export function ErrorPlaceholder({
  className,
  hideIcon,
  maxImgH,
  errorMessage,
  retryHandler,
  subActionBtnLabel,
  subActionHandler,
  btnBrops,
  isLoading,
  buttonLabel,
  ...rest
}: Props) {
  return (
    <div
      {...rest}
      className={cn(
        'flex justify-center items-center min-h-60 text-[#475467] text-[16px]',
        className,
      )}
    >
      <div className="flex flex-col w-full h-full justify-center items-center gap-4">
        {!hideIcon && <ErrorIcon height={maxImgH ?? 130} />}

        <h1 className="font-bold text-lg text-center">
          {errorMessage ?? 'An unexpected error occurred'}
        </h1>

        {!!retryHandler && (
          <Button
            className="w-[150px] bg-brand-500"
            {...btnBrops}
            onClick={retryHandler}
            isLoading={isLoading}
          >
            {buttonLabel || 'Try Again'}
          </Button>
        )}

        {!!subActionHandler && (
          <Button
            variant="ghost"
            className="w-[150px]"
            {...btnBrops}
            onClick={subActionHandler}
          >
            {subActionBtnLabel}
          </Button>
        )}
      </div>
    </div>
  );
}
