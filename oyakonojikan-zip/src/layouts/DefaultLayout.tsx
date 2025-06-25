import React from 'react';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import { ThemeKey } from '../theme';

interface DefaultLayoutProps {
  children: React.ReactNode;
  theme?: ThemeKey;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ 
  children, 
  theme = 'default' 
}) => {
  const colorMap = {
    default: 'red',
    pico: 'orange',
    culture: 'teal'
  } as const;

  const color = colorMap[theme];

  return (
    <div className="min-h-screen bg-white">
      <Header color={color} />
      <main className="pt-24">
        {children}
      </main>
      <Footer color={color} />
    </div>
  );
};