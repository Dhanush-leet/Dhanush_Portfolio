import React from 'react';
import Hero from '../components/Hero';
import Philosophy from '../components/Philosophy';
import Work from '../components/Work';
import TechStack from '../components/TechStack';
import Academics from '../components/Academics';

const Home: React.FC = () => {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <Academics />
      <Philosophy />
      <Work />
      <TechStack />
    </main>
  );
};

export default Home;
