import { ACTION, ACTION_BURN } from '~/styles/vars';

export default ({ className }) => (
  <svg width="28" height="23" viewBox="0 0 28 23" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="twitter-gradient">
        <stop stopColor={ACTION_BURN} offset="0%" />
        <stop stopColor={ACTION} offset="100%" />
      </linearGradient>
    </defs>
    <path d="M24 18.6c1.16.7 2.04 1.8 2.46 3.1-1.08-.64-2.28-1.1-3.55-1.35-1 1.08-2.46 1.76-4.06 1.76-3.08 0-5.58-2.5-5.58-5.57 0-.44.05-.86.14-1.27-4.64.23-8.75 2.45-11.5 5.83-.48-.83-.76-1.8-.76-2.82 0-1.93 1-3.64 2.48-4.64-.9.03-1.77.28-2.53.7v-.07C1.1 11.57 3 9.3 5.56 8.8c-.47-.14-.96-.2-1.47-.2-.36 0-.7.03-1.05.1.7-2.22 2.77-3.84 5.22-3.88-1.92-1.5-4.32-2.4-6.94-2.4-.45 0-.9.04-1.33.1C2.47.9 5.4 0 8.56 0c10.26 0 15.88 8.5 15.88 15.88 0 .24 0 .48-.02.72 1.1.8 2.04 1.77 2.8 2.9-1-.45-2.1-.75-3.22-.9z" fill="url(#twitter-gradient)" fillRule="nonzero" transform="matrix(1 0 0 -1 0 22.11)" />
  </svg>
);
