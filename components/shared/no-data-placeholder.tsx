'use client';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui';
import { NoDataIcon } from '../icons';

type Props = {
  className?: string;
  hideIcon?: boolean;
  title?: string;
  description?: string;
  buttonLabel?: string;
  isLoading?: boolean;
  retryHandler?(): void;
  iconWidth?: string | number;
  iconHeight?: string | number;
  darkDescriptionText?: boolean;
};

export function NoDataPlaceholder({
  className,
  retryHandler,
  title,
  description,
  buttonLabel,
  isLoading,
  hideIcon,
  iconHeight,
  iconWidth,
  darkDescriptionText,
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
        {!hideIcon && <NoDataIcon width={iconWidth} height={iconHeight} />}

        <div className="w-full flex flex-col gap-1 items-center">
          <h1 className="font-bold text-lg text-center">
            {title ?? 'Nothing To See Here'}
          </h1>
          <p
            className={cn(
              'text-center font-xs',
              darkDescriptionText ? 'text-[#475467]' : 'text-brand-gray-300',
            )}
          >
            {description}
          </p>
          {!!retryHandler && (
            <Button
              className="w-[150px] bg-brand-500"
              onClick={retryHandler}
              isLoading={isLoading}
            >
              Reload
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
