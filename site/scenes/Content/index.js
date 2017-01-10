import React from 'react';
import Helmet from 'react-helmet';
import MTRC from 'markdown-to-react-components';
import frontMatter from 'front-matter';

function getDoc({ api }, category, topic) {
  if (!category) {
    return api.README;
  }

  const categoryDocs = api[category];

  if (typeof categoryDocs === 'string') {
    return categoryDocs;
  } else {
    const topicDoc = categoryDocs[topic];
    return topicDoc;
  }
}

export default function ({ category, topic, content }) {
  const doc = getDoc(content, category, topic);

  if (!doc) return null;

  const { attributes, body } = frontMatter(doc);
  const { title, description } = attributes;
  const pageContent = MTRC(body).tree;

  return (
    <div>
      <Helmet
        title={`${title} | Popmotion`}
        description={description}
      />
      {pageContent}
    </div>
  );
}
