import React from 'react';
import { render } from 'react-dom';

function init(id) {
  const backgroundConnection = chrome.runtime.connect({ name: id ? id.toString() : undefined });

  chrome.devtools.inspectedWindow.registerPopmotionAction = function () {
    alert('popmotion action')
  }
  // backgroundConnection.onMessage.addListener((message) => {
  //   window.registerPopmotion
  // });
}

init(chrome.devtools.inspectedWindow.tabId);
