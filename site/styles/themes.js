import menus from '~/data/menus.json';
import content from '~/data/content.json';

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
    sections: ['api', 'learn', 'blog', 'community'],
  },
  pose: {
    name: 'Popmotion Pose',
    sections: ['api', 'learn', 'community']
  }
};

export default Object.keys(themeSettings).reduce((compiledThemes, name) => {
  compiledThemes[name] = generateTheme(name, themeSettings[name]);
  return compiledThemes;
}, {});
