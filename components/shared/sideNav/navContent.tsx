import { Badge } from '@/components/ui';
import { Input } from '@/components/ui/input';
import { navItems } from '@/lib/constants';
import clsx from 'clsx';
import { LogOut, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Navigation() {
  return (
    <>
      <div className="shrink-0 flex items-center gap-2.5 mb-6">
        <Image src="/images/logo.png" alt="logo" width={143} height={32} />
      </div>
      <div className="flex-1 overflow-y-auto">
        <nav className="flex flex-col gap-6 p-0.5">
          <Input leftElement={<Search />} placeholder="Olivia Rhye" autoFocus />
          <div className="flex flex-col gap-1">
            {navItems.map((nav, i) => (
              <Link
                href="/"
                key={i}
                className={clsx(
                  'py-2 px-3 flex justify-between items-start',
                  nav.isActive && 'bg-[#F9FAFB]',
                )}
              >
                <div className="flex items-center gap-3">
                  {nav.icon}
                  <p className="text-[16px] text-[#344054] font-medium">
                    {nav.label}
                  </p>
                </div>
                {nav.notifications && (
                  <Badge variant="outline">{nav.notifications}</Badge>
                )}
              </Link>
            ))}
          </div>
          <div className="py-5 px-3 bg-[#F9FAFB]">
            <h2 className="font-medium text-[#101828] text-[14px] mb-1">
              New features available!
            </h2>
            <h3 className="text-[#667085] text-[14px] mb-4">
              Check out the new dashboard view. Pages now load faster.{' '}
            </h3>
            <Image
              src="/images/nav-image.png"
              height={136}
              width={215}
              alt="nav-img"
              className="mb-4"
            />
            <div className="flex gap-3">
              <p className="font-medium text-[#667085]">Dismiss</p>
              <p className="font-medium text-[#6941C6]">What’s new?</p>
            </div>
          </div>
        </nav>
      </div>
      <div className="flex items-start justify-between shrink-0 pt-6 border-t">
        <div className="flex gap-2 items-center">
          <Image
            src="/images/avatar1.png"
            height={40}
            width={40}
            alt="person"
          />
          <div>
            <p className="text-[14px] text-[#344054] font-medium">
              Olivia Rhye
            </p>
            <p className="text-[14px] text-[#667085]">olivia@untitledui.com</p>
          </div>
        </div>
        <LogOut size={20} color="#667085" />
      </div>
    </>
  );
}
