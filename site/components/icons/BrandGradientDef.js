import { BRAND, BRAND_BURN } from '~/styles/vars';

export default ({ id }) => (
  <defs>
    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={id}>
      <stop stopColor={BRAND} offset="0%"/>
      <stop stopColor={BRAND_BURN} offset="100%"/>
    </linearGradient>
  </defs>
);