import menus from '~/data/menus.json';
import content from '~/data/content.json';
import PopmotionLogo from '~/components/icons/Logo';
import PoseLogo from '~/components/icons/PoseLogo';
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
    tagline: 'A functional, flexible JavaScript motion library',
    sections: ['api', 'learn', 'blog', 'community'],
    Logo: PopmotionLogo,
    homepageLogoSize: {
      width: 283,
      height: 64
    },
    headerLogoSize: {
      width: 159,
      height: 41
    },
    footerLogoSize: {
      width: 215,
      height: 43
    },
    actionColor: color.blue,
    brandColor: color.brand,
    mastheadBackground: `linear-gradient(${color.brand}, ${color.brandBurn})`,
    shareImage: 'https://popmotion.io/static/images/twitter-card.png'
  },
  pose: {
    id: 'pose',
    name: 'Popmotion Pose',
    url: '/pose',
    tagline: 'Declarative motion system for HTML, SVG & React',
    sections: ['api', 'learn', 'community'],
    Logo: PoseLogo,
    homepageLogoSize: {
      width: 253,
      height: 80
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
    actionColor: color.blue,
    brandColor: color.purple,
    shareImage: 'https://popmotion.io/static/images/pose-twitter-card.png'
  },
  stylefire: {
    id: 'stylefire',
    name: 'Stylefire',
    url: '/stylefire',
    tagline: 'Simple HTML & SVG styler, optimised for animation',
    sections: ['api', 'learn', 'community'],
    Logo: StylefireLogo,
    homepageLogoSize: {
      width: 301,
      height: 83
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
      width: 253,
      height: 80
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
    actionColor: color.blue,
    brandColor: color.purple,
    shareImage: 'https://popmotion.io/static/images/pose-twitter-card.png'
  }
};

export default Object.keys(themeSettings).reduce((compiledThemes, name) => {
  compiledThemes[name] = generateTheme(name, themeSettings[name]);
  return compiledThemes;
}, {});
