import dynamic from 'next/dynamic';
const Counter = dynamic(import('./Counter'));
const Ball = dynamic(import('./Ball'));
const Swatch = dynamic(import('./Swatch'));

export default {
  Counter,
  Ball,
  Swatch
};
