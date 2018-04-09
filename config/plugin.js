'use strict';

// had enabled by egg
// exports.static = true;

exports.io = {
  enable: true,
  package: 'egg-socket.io',
};

exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};

exports.redis = {
  enable: true,
  package: 'egg-redis',
};
