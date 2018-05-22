/**
 * Created by Cooper on 2018/05/22.
 */
const app = require('./app');
const server = app.listen();
const request = require('supertest').agent(server);

describe('GET /', () => {
  after(() => {
    server.close();
  });

  it('GET 1', function(done) {
    request.get('/').expect('music', done);
  });

  it('GET 2', function(done) {
    request.get('/').expect('music', done);
  });

  it('GET 3', function(done) {
    request.get('/').expect('music', done);
  });
});
