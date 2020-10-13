import menus from '~/data/menus.json';
import content from '~/data/content.json';
import PopmotionLogo from '~/components/icons/Logo';
import PoseLogo from '~/components/icons/PoseLogo';
import PureLogo from '~/components/icons/PopmotionPure';
import StylefireLogo from '~/components/icons/StylefireLogo';
import FramesyncLogo from '~/components/icons/FramesyncLogo';
import { color } from './vars';
import PopcornLogo from '../components/icons/PopcornLogo';

const generateTheme = (name, props) => ({
  data: {
    menus: menus[name] || menus.pure, // Hack while blog is being published under popmotion
    content: content[name] || content.pure,
    rootUrl: name === 'popmotion' ? '/' : `/${name}`,
  },
  ...props,
});

const themeSettings = {
  framerMotion: {
    id: 'framer-motion',
    name: 'Framer Motion',
    tagline: 'A truly simple React animation and gesture library.',
    url: 'https://framer.com/motion',
    color: {
      base: '#f08',
      baseShadow: '#c0c',
      twist: '#d0e',
      action: '#09f',
      actionHighlight: '#09f',
    },
    Logo: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80px"
        viewBox="0 0 100 100"
      >
        <defs>
          <linearGradient id="pink" gradientTransform="rotate(90 .5 .5)">
            <stop offset="0" stopColor="#f08"></stop>
            <stop offset="1" stopColor="#d0e"></stop>
          </linearGradient>
          <linearGradient id="purple" gradientTransform="rotate(90 .5 .5)">
            <stop offset="0" stopColor="#09f"></stop>
            <stop offset="1" stopColor="#40f"></stop>
          </linearGradient>
          <linearGradient id="blue" gradientTransform="rotate(90 .5 .5)">
            <stop offset="0" stopColor="#09f"></stop>
            <stop offset="1" stopColor="#09f"></stop>
          </linearGradient>
        </defs>
        <path d="M0 100V0l50 50z" fill="url(#pink)"></path>
        <path d="M100 0v50l-50 50-25-25z" fill="url(#purple)"></path>
        <path d="M100 50v50L75 75z" fill="url(#blue)"></path>
      </svg>
    ),
  },
  popmotion: {
    id: 'popmotion',
    name: 'Popmotion',
    url: '/',
    tagline: 'Simple libraries for delightful interfaces',
    headerNavLinks: [
      {
        href: '/blog',
        label: 'Blog',
        id: 'blog',
      },
    ],
    Logo: PopmotionLogo,
    homepageLogoSize: {
      width: 283,
      height: 64,
    },
    headerLogoSize: {
      width: 124,
      height: 29,
    },
    footerLogoSize: {
      width: 215,
      height: 43,
    },
    color: {
      base: '#FF1C68',
      baseShadow: '#810066',
      twist: '#960076',
      action: '#049CD4',
      actionHighlight: '#252942',
    },
    // Deprecated colors
    actionColor: color.blue,
    brandColor: color.brand,

    mastheadBackground: `linear-gradient(${color.brand}, ${color.brandBurn})`,
    shareImage: 'https://popmotion.io/images/twitter-card.png',
  },
  pose: {
    id: 'pose',
    name: 'Pose',
    url: '/pose',
    tagline: 'Declarative motion system for React, React Native, and Vue',
    sections: ['api', 'learn', 'examples'],
    headerNavLinks: [
      {
        href: '/pose/api',
        label: 'API',
        id: 'api',
      },
      {
        href: '/pose/learn/get-started',
        label: 'Learn',
        id: 'learn',
      },
      {
        href: '/pose/examples',
        label: 'Examples',
        id: 'examples',
      },
    ],
    Logo: PoseLogo,
    homepageLogoSize: {
      width: 175,
      height: 53,
    },
    headerLogoSize: {
      width: 127,
      height: 40,
    },
    footerLogoSize: {
      width: 193,
      height: 70,
    },
    mastheadBackground: `linear-gradient(${color.pink}, ${color.purple})`,
    color: {
      base: '#ED00BB',
      baseShadow: '#5B0089',
      twist: '#A100F6',
      action: '#0866C2',
    },
    // Deprecated colors
    actionColor: color.blue,
    brandColor: color.purple,
    shareImage: 'https://popmotion.io/images/pose-twitter-card.png',
  },
  pure: {
    id: 'pure',
    name: 'Popmotion Pure',
    url: '/pure',
    tagline: 'A functional, flexible JavaScript motion library',
    sections: ['api', 'learn'],
    headerNavLinks: [
      {
        href: '/api',
        label: 'API',
        id: 'api',
      },
      {
        href: '/learn/get-started',
        label: 'Learn',
        id: 'learn',
      },
    ],
    Logo: PureLogo,
    homepageLogoSize: {
      width: 140,
      height: 65,
    },
    headerLogoSize: {
      width: 106,
      height: 50,
    },
    footerLogoSize: {
      width: 150,
      height: 70,
    },
    color: {
      base: '#FF1C68',
      baseShadow: '#810066',
      twist: '#960076',
      action: '#0866C2',
    },
    // Deprecated colors
    actionColor: color.blue,
    brandColor: color.brand,

    mastheadBackground: `linear-gradient(${color.brand}, ${color.brandBurn})`,
    shareImage: 'https://popmotion.io/images/twitter-card.png',
  },
  stylefire: {
    id: 'stylefire',
    name: 'Stylefire',
    url: '/stylefire',
    tagline: 'Simple HTML & SVG styler, optimised for animation',
    sections: ['api'],
    headerNavLinks: [
      {
        href: '/stylefire/api',
        label: 'API',
        id: 'api',
      },
    ],
    Logo: StylefireLogo,
    homepageLogoSize: {
      width: 204,
      height: 54,
    },
    headerLogoSize: {
      width: 130,
      height: 36,
    },
    footerLogoSize: {
      width: 188,
      height: 55,
    },
    mastheadBackground: `linear-gradient(${color.orange}, ${color.orangeBurn})`,
    color: {
      base: '#FFE400',
      baseShadow: '#CB4300',
      twist: '#FF6A25',
      action: '#0866C2',
    },
    // Deprecated colors
    actionColor: color.orangeBurn,
    brandColor: color.orange,
    shareImage: 'https://popmotion.io/images/pose-twitter-card.png',
  },
  popcorn: {
    id: 'popcorn',
    name: 'Popcorn',
    url: '/popcorn',
    tagline: 'Utility functions for animation and interaction designers.',
    sections: ['api'],
    headerNavLinks: [
      {
        href: '/popcorn',
        label: 'API',
        id: 'api',
      },
    ],
    Logo: PopcornLogo,
    homepageLogoSize: {
      width: 190,
      height: 45,
    },
    headerLogoSize: {
      width: 140,
      height: 33,
    },
    footerLogoSize: {
      width: 210,
      height: 50,
    },
    color: {
      base: '#95FF13',
      baseShadow: '#00CF93',
      twist: '#00CF93',
      action: '#06A69D',
    },
    shareImage: 'https://popmotion.io/images/twitter-card-popcorn.png',
  },
  framesync: {
    id: 'framesync',
    name: 'Framesync',
    url: '/api/framesync',
    tagline: 'Unity-inspired render loop for browsers',
    headerNavLinks: [],
    Logo: FramesyncLogo,
    homepageLogoSize: {
      width: 190,
      height: 40,
    },
    headerLogoSize: {
      width: 127,
      height: 40,
    },
    footerLogoSize: {
      width: 240,
      height: 50,
    },
    mastheadBackground: `linear-gradient(${color.pink}, ${color.purple})`,
    color: {
      base: '#00CDE5',
      baseShadow: '#012A52',
      twist: '#0866C2',
      action: '#0866C2',
    },
    // Deprecated colors
    actionColor: color.blue,
    brandColor: color.purple,
    shareImage: 'https://popmotion.io/images/pose-twitter-card.png',
  },
};

export default Object.keys(themeSettings).reduce((compiledThemes, name) => {
  compiledThemes[name] = generateTheme(name, themeSettings[name]);
  return compiledThemes;
}, {});
