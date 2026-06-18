'use client';

import React, { useState } from 'react';
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  RadioGroup,
  RadioGroupItem,
} from '../ui';
import { Mail, Users } from 'lucide-react';
import clsx from 'clsx';

const users = [
  { name: 'Superadmin', lastActive: '06/2023' },
  { name: 'Developeradmin', lastActive: '01/2023' },
  { name: 'Supportadmin', lastActive: '10/2022' },
];

export function UserRole() {
  const [user, setUser] = useState('Superadmin');

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="text-[18px] text-[#101828] font-medium mb-1">
          user role
        </h2>
        <p className="text-[14px] text-[#667085]">
          Update your roles details and information.
        </p>
      </div>
      <div className="flex flex-wrap items-start gap-5 md:gap-8 border-y py-6">
        <div>
          <h4 className="text-[#344054] font-medium">Connected email</h4>
          <p className="text-[14px] text-[#667085]">Select role account</p>
        </div>
        <div>
          <RadioGroup defaultValue="comfortable" className="w-fit">
            <Field orientation="horizontal" className="mb-4">
              <RadioGroupItem value="default" id="desc-r1" />
              <FieldContent>
                <FieldLabel
                  htmlFor="desc-r1"
                  className="text-[#344054] font-medium text-[14px]"
                >
                  My account email
                </FieldLabel>
                <FieldDescription className="text-[#667085] font-normal">
                  olivia@untitledui.com{' '}
                </FieldDescription>
              </FieldContent>
            </Field>
            <Field orientation="horizontal">
              <RadioGroupItem value="comfortable" id="desc-r2" />
              <FieldContent>
                <FieldLabel
                  htmlFor="desc-r2"
                  className="text-[#344054] font-medium text-[14px] mb-3"
                >
                  An alternative email
                </FieldLabel>
                <InputGroup className="max-w-xs">
                  <InputGroupInput value="billing@untitledui.com" />
                  <InputGroupAddon>
                    <Mail />
                  </InputGroupAddon>
                </InputGroup>
              </FieldContent>
            </Field>
          </RadioGroup>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-start gap-5 md:gap-8">
        <div className="shrink-0">
          <h4 className="text-[#344054] font-medium">Active Role</h4>
          <p className="text-[14px] text-[#667085]">
            Select active role available to the user.
          </p>
        </div>
        <div className="flex-1 w-full">
          <RadioGroup
            className="w-full flex flex-col gap-3"
            value={user}
            onValueChange={setUser}
          >
            {users.map((u) => {
              const id = `role-${u.name}`;
              return (
                <FieldLabel
                  key={u.name}
                  htmlFor={id}
                  className={clsx(
                    'overflow-hidden border',
                    user === u.name && 'bg-[#F9F5FF] border-[#D6BBFB]!',
                  )}
                >
                  <Field
                    orientation="horizontal"
                    className={clsx(
                      'p-4! flex items-start',
                      user === u.name && 'bg-[#F9F5FF]',
                    )}
                  >
                    <div className="border py-1.75 px-3 rounded-md bg-white">
                      <Users width={22} height={22} color="#667085" />
                    </div>
                    <FieldContent>
                      <div>
                        <FieldTitle
                          className={clsx(
                            'font-medium mb-1',
                            user === u.name
                              ? 'text-[#53389E]'
                              : 'text-[#344054]',
                          )}
                        >
                          {u.name}
                        </FieldTitle>
                        <FieldDescription
                          className={clsx(
                            'text-[14px] mb-2',
                            user === u.name
                              ? 'text-[#7F56D9]'
                              : 'text-[#70798C]',
                          )}
                        >
                          Last active {u.lastActive}
                        </FieldDescription>
                        <FieldDescription
                          className={clsx(
                            'text-[14px] font-medium',
                            user === u.name
                              ? 'text-[#7F56D9]'
                              : 'text-[#70798C]',
                          )}
                        >
                          Set as default{' '}
                          <span className="inline-block ml-3 font-medium text-[#6941C6]">
                            Edit
                          </span>
                        </FieldDescription>
                      </div>
                    </FieldContent>
                    <RadioGroupItem value={u.name} id={id} />
                  </Field>
                </FieldLabel>
              );
            })}
          </RadioGroup>
        </div>
      </div>
    </div>
  );
}
