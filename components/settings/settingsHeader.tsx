'use client';

import React, { useState } from 'react';
import { Button } from '../ui/button';
import clsx from 'clsx';

const buttonsArray = [
  'My details',
  'Profile',
  'Password',
  'Team',
  'Plan',
  'Roles',
  'Notifications',
  'Integrations',
  'API',
];

export function SettingsHeader() {
  const [period, setPeriod] = useState('Roles');

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-[30px] text-[#101828] font-medium">Settings</h1>
        <p className="text-[16px] text-[#667085]">
          Manage your team and preferences here.
        </p>
      </div>
      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex">
          {buttonsArray.map((button, i) => (
            <Button
              key={button}
              variant="outline"
              className={clsx(
                'rounded-none border-gray-200 px-4 py-2.5 text-[14px] text-[#344054] font-medium',
                {
                  'rounded-tl-[8px] rounded-bl-[8px]': i === 0,
                  'rounded-tr-[8px] rounded-br-[8px]':
                    i === buttonsArray.length - 1,
                  'bg-[#F9FAFB]': button === period,
                },
              )}
              onClick={() => setPeriod(button)}
            >
              {button}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
