'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui';
import { Menu, X } from 'lucide-react';
import { Navigation } from './navContent';
import { useState } from 'react';

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex h-16 items-center justify-between border-b px-4 md:hidden">
      <div className="font-bold">LOGO</div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </SheetTrigger>

        <SheetContent side="left" className="w-[95vw] max-w-[95vw] p-0">
          <div className="flex h-full flex-col">
            <Navigation />
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
