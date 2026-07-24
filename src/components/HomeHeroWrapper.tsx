import dynamic from 'next/dynamic';

const HomeHero = dynamic(
  () => import('./HomeHero'),
  { ssr: false }
);

export default HomeHero;
