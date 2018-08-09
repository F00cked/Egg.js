'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1533697734136_7243';

  // add your config here
  config.middleware = [
    'demo'
  ];

  config.demo = {
    demoOptions: 'demo middleware config',
  }

  // 视图渲染引擎
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.njk': 'nunjucks',
    },
  };

  return config;
};
