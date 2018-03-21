import menus from "~/data/menus.json";
import content from "~/data/content.json";
import PopmotionLogo from "~/components/icons/Logo";
import PoseLogo from "~/components/icons/PoseLogo";
import { color } from "./vars";

const generateTheme = (name, props) => ({
  data: {
    menus: menus[name],
    content: content[name],
    rootUrl: name === "popmotion" ? "/" : `/${name}`
  },
  ...props
});

const themeSettings = {
  popmotion: {
    id: "popmotion",
    name: "Popmotion",
    tagline: "A functional JavaScript motion library",
    sections: ["api", "learn", "blog", "community"],
    Logo: PopmotionLogo,
    homepageLogoSize: {
      width: 283,
      height: 64
    },
    headerLogoSize: {
      width: 159,
      height: 41
    },
    mastheadBackground: `linear-gradient(${color.brand}, ${color.brandBurn})`,
    shareImage: "https://popmotion.io/static/images/twitter-card.png"
  },
  pose: {
    id: "pose",
    name: "Popmotion Pose",
    tagline: "A declarative motion system for HTML, SVG and React",
    sections: ["api", "learn", "community"],
    Logo: PoseLogo,
    homepageLogoSize: {
      width: 253,
      height: 80
    },
    headerLogoSize: {
      width: 127,
      height: 40
    },
    mastheadBackground: `linear-gradient(${color.pink}, ${color.purple})`,
    shareImage: "https://popmotion.io/static/images/pose-twitter-card.png"
  }
};

export default Object.keys(themeSettings).reduce((compiledThemes, name) => {
  compiledThemes[name] = generateTheme(name, themeSettings[name]);
  return compiledThemes;
}, {});
