import { BRAND, BRAND_BURN } from '~/styles/vars';

export default ({className}) => (
  <svg width="41" height="37" viewBox="0 0 41 37" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="popmotion-gradient">
        <stop stopColor={BRAND} offset="0%"/>
        <stop stopColor={BRAND_BURN} offset="100%"/>
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <ellipse fill="url(#popmotion-gradient)" cx="17.73" cy="18.99" rx="17.73" ry="18.01"/>
      <path d="M17.82.02h12.9c6.67 0 10.18 4.5 10.18 10.12 0 6.4-4.57 12.2-12.5 12.2h-4.95l-1.1 11H14.4L17.82.02zM29.65 7.6h-4.67l-.8 7.57h4.5c2.7 0 4.3-1.8 4.3-4.2 0-1.7-1.07-3.37-3.33-3.37z" fill="#FFF"/>
    </g>
  </svg>
);
