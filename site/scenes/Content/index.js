import React from 'react';
import Helmet from 'react-helmet';
import MTRC from 'markdown-to-react-components';
import frontMatter from 'front-matter';

export default function (props) {
  // const { attributes, body } = frontMatter(doc);
  // const { title, description } = attributes;
  // const content = MTRC(body).tree;
  const title = ''
  const description = ''
  const content = ''
  return (
    <div>
      <Helmet
        title={title}
        description={description}
      />
      {content}
    </div>
  );
}
