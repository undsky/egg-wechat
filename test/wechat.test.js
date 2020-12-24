'use strict';

const mock = require('egg-mock');

describe('test/wechat.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/wechat-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, wechat')
      .expect(200);
  });
});
