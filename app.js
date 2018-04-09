'use strict';

module.exports = app => {
  app.beforeStart(async () => {
    const room = await app.redis.get('room:demo');
    if (!room) {
      await app.redis.set('room:demo', 'demo');
    }
  });
};
