import { ReactNode } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

interface RootLayoutProps {
  children: ReactNode;
}

export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className="relative min-h-screen font-sans selection:bg-black selection:text-white flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>

  );
};
