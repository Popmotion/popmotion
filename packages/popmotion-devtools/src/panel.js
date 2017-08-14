import React from 'react';
import { render } from 'react-dom';

function init(id) {
  const backgroundConnection = chrome.runtime.connect({ name: id ? id.toString() : undefined });
  backgroundConnection.onMessage.addListener((message) => {
    alert(message)
  });
}

init(chrome.devtools.inspectedWindow.tabId);
