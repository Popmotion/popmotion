import { ACTION, ACTION_BURN } from '~/styles/vars';

export default ({ className }) => (
  <svg width="27" height="26" viewBox="0 0 27 26" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="github-gradient">
        <stop stopColor={ACTION} offset="0%"/>
        <stop stopColor={ACTION_BURN} offset="100%"/>
      </linearGradient>
    </defs>
    <path d="M0 13.33c0 5.9 3.82 10.88 9.12 12.65.66.12.9-.3.9-.64v-2.5c-3.72.82-4.5-1.56-4.5-1.56-.6-1.54-1.48-1.95-1.48-1.95-1.2-.83.1-.8.1-.8 1.33.1 2.03 1.36 2.03 1.36 1.2 2.03 3.12 1.44 3.88 1.1.12-.86.47-1.45.85-1.78-2.96-.34-6.08-1.48-6.08-6.6 0-1.44.52-2.63 1.38-3.56-.14-.34-.6-1.7.13-3.53 0 0 1.12-.36 3.66 1.36 1.06-.3 2.2-.45 3.33-.45s2.27.15 3.34.44c2.54-1.73 3.66-1.37 3.66-1.37.73 1.83.27 3.2.13 3.53.86.93 1.37 2.12 1.37 3.57 0 5.12-3.12 6.25-6.08 6.58.47.42.9 1.23.9 2.48l-.02 3.66c0 .35.24.77.92.64 5.3-1.77 9.1-6.76 9.1-12.65C26.66 5.97 20.7 0 13.34 0S0 5.97 0 13.33z" fill="url(#github-gradient)" fillRule="nonzero"/>
  </svg>
);
