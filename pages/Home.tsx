import React from 'react';
import Hero from '../components/Hero';
import Philosophy from '../components/Philosophy';
import Work from '../components/Work';
import TechStack from '../components/TechStack';

const Home: React.FC = () => {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <Philosophy />
      <Work />
      <TechStack />
    </main>
  );
};

export default Home;
