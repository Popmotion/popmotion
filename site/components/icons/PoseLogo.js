export default ({ className, width=613, height=192 }) => (
  <svg width={width} height={height} viewBox="0 0 613 192" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient x1="8.5%" y1="0%" x2="8.5%" y2="81.7%" id="posepurple" xlinkHref="posepurple">
        <stop stopColor="#ED00BB" offset="0%" />
        <stop stopColor="#A100F6" offset="100%" />
      </linearGradient>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="posered" xlinkHref="posered">
        <stop stopColor="#FF1C68" offset="0%" />
        <stop stopColor="#DB0068" offset="100%" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#posepurple)" transform="translate(0 -1)" d="M17.2 33.1h61.6c32 0 48.8 21.2 48.8 47.6 0 30.2-21.9 57.5-59.8 57.5H44L38.8 190H.8L17.2 33.1zm56.5 35.7H51.4l-3.9 35.6h21.6c13 0 20.5-8.5 20.5-19.7 0-8-5-16-15.9-16zm140.5-38c42.5 0 74.7 31.3 74.7 72.3a89.4 89.4 0 0 1-90.1 89.2c-42.1 0-74.3-31.5-74.3-72.2 0-49.5 40-89.3 89.7-89.3zm-3 36.4c-25.8 0-48.3 22-48.3 49.2a38.7 38.7 0 0 0 38.9 39.6c25.3 0 48.7-22.1 48.7-49.3a39 39 0 0 0-39.3-39.5zm187.3-26.7l-4.1 37.3S375 66.5 350.2 66.5c-9 0-18.6 3.4-18.6 11.3 0 17.4 68.8 13.5 68.8 62.3 0 29.2-21.6 52.2-66.3 52.2-30.1 0-51.7-12.2-51.7-12.2l4.1-38.4s23.7 14.7 48.6 14.7c12.6 0 24.8-3.4 24.8-13.3 0-19.6-67-14.7-67-62.8 0-32.4 30-49.5 60.8-49.5a100 100 0 0 1 44.8 9.7zm121.2 113.8h-77l2.8-26h64.4l3.6-34.9h-64.4l2.6-24.6h75.6L531 33H417.4L401 190h115l3.6-35.7z" />
      <g transform="translate(549 -1)" fill="url(#posered)">
        <path d="M31.6 1.7A31.9 31.9 0 0 0 0 34 31.9 31.9 0 0 0 31.6 66C48.2 66 61.7 53 63 36.5a23.2 23.2 0 0 1-12.4 3.4h-8.9l-2 19.6h-14l5.9-57.8z"/>
        <path d="M52.8 13.5c4 0 5.9 3 5.9 6 0 4.3-2.8 7.6-7.6 7.6h-8l1.4-13.6h8.3z"/>
      </g>
    </g>
  </svg>
);