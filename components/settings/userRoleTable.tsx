'use client';

import React, { useMemo } from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
  Button,
} from '../ui';
import { Check, CloudUpload } from 'lucide-react';
import { ColumnDef } from '@tanstack/react-table';
import clsx from 'clsx';
import { userData } from '@/lib/constants';
import { DataTable } from '../shared';

export default function UserRoleTable() {
  const columns: ColumnDef<TUser>[] = useMemo(
    () => [
      {
        accessorKey: 'name',
        header: 'Name',
        enableSorting: true,
        cell: ({ row }) => (
          <p className="text-[#101828] font-medium">{row.getValue('name')}</p>
        ),
      },
      {
        accessorKey: 'type',
        header: 'Type',
        cell: ({ row }) => (
          <p className="text-[#667085]">{row.getValue('type')}</p>
        ),
      },
      {
        accessorKey: 'dateCreated',
        header: 'Date created',
        cell: ({ row }) => (
          <p className="text-[#667085]">{row.getValue('dateCreated')}</p>
        ),
      },
      {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => (
          <span
            className={clsx(
              'inline-flex items-center w-fit self-start rounded-full px-4 py-1 text-[12px]',
              row.getValue('status') === 'Active'
                ? 'text-[#027A48] bg-[#ECFDF3]'
                : 'text-[#F2F2F2] bg-[#F2994A]',
            )}
          >
            {row.getValue('status') === 'Active' && (
              <Check size={15} color="#12B76A" />
            )}{' '}
            {row.getValue('status')}
          </span>
        ),
      },
      {
        accessorKey: 'users',
        header: 'Role users ',
        cell: ({ row }) => {
          const users = row.getValue('users') as TUser['users'];
          const images = users?.images ?? [];
          const usersNumber = users?.number;
          return (
            <AvatarGroup>
              {images.map((image, i) => (
                <Avatar key={i}>
                  <AvatarImage src={image} alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              ))}
              {usersNumber && (
                <AvatarGroupCount>{usersNumber}</AvatarGroupCount>
              )}
            </AvatarGroup>
          );
        },
      },
      {
        accessorKey: '-',
        header: '',
        cell: () => <CloudUpload />,
      },
    ],
    [],
  );

  return (
    <div className="flex flex-col gap-6.25">
      <div className="flex justify-between items-center">
        <h3 className="text-[18px] text-[#101828] font-medium">User Roles</h3>
        <Button
          variant="outline"
          leftIcon={<CloudUpload />}
          className="text-[#344054] font-medium"
        >
          Download all
        </Button>
      </div>
      <DataTable data={userData} columns={columns} groupSelect />
    </div>
  );
}
