import Site from './scenes/Site';
import Homepage from './scenes/Homepage';
import Content from './scenes/Content';

export default {
  path: '/',
  component: Site,
  indexRoute: {
    component: Homepage
  },
  childRoutes: [
    {
      path: 'api(/:topic)',
      component: Content
    },
    {
      path: 'blog(/:title)',
      component: Content
    },
    {
      path: 'guides(/:topic)',
      component: Content
    }
  ]
};