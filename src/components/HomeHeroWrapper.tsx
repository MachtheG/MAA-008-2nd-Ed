import dynamic from 'next/dynamic';

const HomeHero = dynamic(
  () => import('./home/HomeHero').then(mod => mod.HomeHero),
  { ssr: false }
);

export default HomeHero;
