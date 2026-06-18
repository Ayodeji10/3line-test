'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui';
import { Menu, X } from 'lucide-react';
import { Navigation } from './navContent';
import { useState } from 'react';
import Image from 'next/image';

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex h-16 items-center justify-between border-b px-4 md:hidden">
      <div className="shrink-0 flex items-center gap-2.5">
        <Image src="/images/logo.png" alt="logo" width={143} height={32} />
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu className="h-6 w-6" />}
          </button>
        </SheetTrigger>

        <SheetContent side="right" className="w-[85vw]! max-w-[85vw]! p-3">
          <div className="flex h-full flex-col">
            <Navigation />
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
