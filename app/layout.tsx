import './globals.css';
import { MobileNav, Navigation } from '@/components/shared';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen">
          <MobileNav />
          <div className="flex">
            <aside className="fixed left-0 top-0 hidden h-screen w-70 border-r bg-background md:flex md:flex-col">
              <Navigation />
            </aside>
            <main className="w-full md:ml-70 bg-grey-50">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
