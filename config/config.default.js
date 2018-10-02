'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1523266936854_6353';

  // add your config here
  config.middleware = [];

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
    },
  };

  config.redis = {
    client: {
      port: 6379,
      host: '127.0.0.1',
      password: '',
      db: 0,
    },
  };

  config.io = {
    init: {
      wsEngine: 'ws',
    }, // passed to engine.io
    namespace: {
      '/': {
        connectionMiddleware: [
          'auth',
        ],
        packetMiddleware: [],
      },
      '/example': {
        connectionMiddleware: [],
        packetMiddleware: [],
      },
    },

    redis: {
      host: '127.0.0.1',
      port: 6379,
    },
  };

  return config;
};
