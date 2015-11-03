var packageName = 'popmotion:popmotion';

var packageJson = JSON.parse(Npm.require("fs").readFileSync('package.json'));

Package.describe({
    name: packageName,
    summary: 'Popmotion (official) - lightweight motion engine: animation, physics, input tracking',
    version: packageJson.version,
    git: 'https://github.com/Popmotion/popmotion.git'
});

Package.onUse(function (api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']);
  api.export('ui');
  api.addFiles([
    'meteor/spoof-window.js',
    'popmotion.global.js',
    'meteor/export.js'
  ]
  );
});

Package.onTest(function (api) {
  api.use(packageName);
  api.use('tinytest');
  api.addFiles('meteor/test.js');
});
