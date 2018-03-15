import menus from '~/data/menus.json';
import content from '~/data/content.json';
import PopmotionLogo from '~/components/icons/Logo';
import PoseLogo from '~/components/icons/PoseLogo';

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
    name: 'Popmotion',
    tagline: 'A functional JavaScript motion library',
    sections: ['api', 'learn', 'blog', 'community'],
    Logo: PopmotionLogo,
    homepageLogoSize: {
      width: 283,
      height: 64
    }
  },
  pose: {
    name: 'Popmotion Pose',
    tagline: 'A declarative motion library for HTML, SVG and React',
    sections: ['api', 'learn', 'community'],
    Logo: PoseLogo,
    homepageLogoSize: {
      width: 253,
      height: 80
    }
  }
};

export default Object.keys(themeSettings).reduce((compiledThemes, name) => {
  compiledThemes[name] = generateTheme(name, themeSettings[name]);
  return compiledThemes;
}, {});
