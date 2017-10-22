import { configure } from '@storybook/react';

function loadStories() {
  require('../playground');
}

configure(loadStories, module);
