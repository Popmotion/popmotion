import menus from '~/data/menus.json';
import content from '~/data/content.json';
import PopmotionLogo from '~/components/icons/Logo';
import PoseLogo from '~/components/icons/PoseLogo';
import PureLogo from '~/components/icons/PopmotionPure';
import StylefireLogo from '~/components/icons/StylefireLogo';
import FramesyncLogo from '~/components/icons/FramesyncLogo';
import { color } from './vars';

const generateTheme = (name, props) => ({
  data: {
    menus: menus[name],
    content: content[name],
    rootUrl: name === 'popmotion' ? '/' : `/${name}`
  },
  ...props
});

const themeSettings = {
  popmotion: {
    id: 'popmotion',
    name: 'Popmotion',
    url: '/',
    tagline: 'Simple libraries for delightful interfaces',
    sections: ['api', 'learn', 'blog', 'community'],
    headerNavLinks: [
      // {
      //   href: 'https://patreon.com/popmotion',
      //   label: 'Support us',
      //   isExternal: true
      // },
      {
        href: 'https://spectrum.chat/popmotion',
        label: 'Community',
        isExternal: true
      },
      {
        href: '/blog',
        label: 'Blog'
      }
    ],
    Logo: PopmotionLogo,
    homepageLogoSize: {
      width: 283,
      height: 64
    },
    headerLogoSize: {
      width: 124,
      height: 29
    },
    footerLogoSize: {
      width: 215,
      height: 43
    },
    color: {
      base: '#FF1C68',
      baseShadow: '#810066',
      twist: '#960076',
      action: '#049CD4'
    },
    // Deprecated colors
    actionColor: color.blue,
    brandColor: color.brand,

    mastheadBackground: `linear-gradient(${color.brand}, ${color.brandBurn})`,
    shareImage: 'https://popmotion.io/static/images/twitter-card.png'
  },
  pure: {
    id: 'popmotion',
    name: 'Popmotion Pure',
    url: '/pure',
    tagline: 'A functional, flexible JavaScript motion library',
    sections: ['api', 'learn', 'blog', 'community'],
    headerNavLinks: [
      // {
      //   href: 'https://patreon.com/popmotion',
      //   label: 'Support us',
      //   isExternal: true
      // },
      {
        href: 'https://spectrum.chat/popmotion',
        label: 'Community',
        isExternal: true
      },
      {
        href: '/blog',
        label: 'Blog'
      }
    ],
    Logo: PureLogo,
    homepageLogoSize: {
      width: 155,
      height: 73
    },
    headerLogoSize: {
      width: 510,
      height: 238
    },
    footerLogoSize: {
      width: 510,
      height: 238
    },
    color: {
      base: '#FF1C68',
      baseShadow: '#810066',
      twist: '#960076',
      action: '#0866C2'
    },
    // Deprecated colors
    actionColor: color.blue,
    brandColor: color.brand,

    mastheadBackground: `linear-gradient(${color.brand}, ${color.brandBurn})`,
    shareImage: 'https://popmotion.io/static/images/twitter-card.png'
  },
  pose: {
    id: 'pose',
    name: 'Pose',
    url: '/pose',
    tagline: 'Declarative motion system for HTML, SVG, React & React Native',
    sections: ['api', 'learn', 'community'],
    Logo: PoseLogo,
    homepageLogoSize: {
      width: 175,
      height: 53
    },
    headerLogoSize: {
      width: 127,
      height: 40
    },
    footerLogoSize: {
      width: 193,
      height: 70
    },
    mastheadBackground: `linear-gradient(${color.pink}, ${color.purple})`,
    color: {
      base: '#ED00BB',
      baseShadow: '#5B0089',
      twist: '#A100F6',
      action: '#0866C2'
    },
    // Deprecated colors
    actionColor: color.blue,
    brandColor: color.purple,
    shareImage: 'https://popmotion.io/static/images/pose-twitter-card.png'
  },
  stylefire: {
    id: 'stylefire',
    name: 'Stylefire',
    url: '/stylefire',
    tagline: 'Simple HTML & SVG styler, optimised for animation',
    sections: ['api', 'community'],
    Logo: StylefireLogo,
    homepageLogoSize: {
      width: 204,
      height: 54
    },
    headerLogoSize: {
      width: 130,
      height: 36
    },
    footerLogoSize: {
      width: 188,
      height: 55
    },
    mastheadBackground: `linear-gradient(${color.orange}, ${color.orangeBurn})`,
    color: {
      base: '#FFE400',
      baseShadow: '#CB4300',
      twist: '#FF6A25',
      action: '#0866C2'
    },
    // Deprecated colors
    actionColor: color.orangeBurn,
    brandColor: color.orange,
    shareImage: 'https://popmotion.io/static/images/pose-twitter-card.png'
  },
  framesync: {
    id: 'framesync',
    name: 'Framesync',
    url: '/api/framesync',
    tagline: 'Unity-inspired render loop for browsers',
    sections: ['api', 'learn', 'community'],
    Logo: FramesyncLogo,
    homepageLogoSize: {
      width: 190,
      height: 40
    },
    headerLogoSize: {
      width: 127,
      height: 40
    },
    footerLogoSize: {
      width: 240,
      height: 50
    },
    mastheadBackground: `linear-gradient(${color.pink}, ${color.purple})`,
    color: {
      base: '#00CDE5',
      baseShadow: '#012A52',
      twist: '#0866C2',
      action: '#0866C2'
    },
    // Deprecated colors
    actionColor: color.blue,
    brandColor: color.purple,
    shareImage: 'https://popmotion.io/static/images/pose-twitter-card.png'
  }
};

export default Object.keys(themeSettings).reduce((compiledThemes, name) => {
  compiledThemes[name] = generateTheme(name, themeSettings[name]);
  return compiledThemes;
}, {});
