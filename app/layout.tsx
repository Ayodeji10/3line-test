import './globals.css';
import { MobileNav, Navigation } from '@/components/shared';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="min-h-screen">
          <MobileNav />
          <div className="flex">
            <aside className="fixed left-0 top-0 hidden h-screen w-70 border-r bg-background md:flex md:flex-col">
              <Navigation />
            </aside>
            <main className="w-full md:ml-70 p-8 bg-[#F9FAFB] ">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
