/* eslint-disable @typescript-eslint/no-var-requires */
import 'mocha';
import chai, { expect } from 'chai';
import { app } from '../server';
import chaiHttp from 'chai-http';
import { success } from '../success/constants';
import { errors } from '../errors/constants';
chai.use(chaiHttp);

describe('Products', () => {
  it('GET /products', async (done) => {
    const res = await chai.request(app).get('/products');
    expect(res).to.be.status(success.SUCCESS_GET);
    done();
  });
  describe('GET a product By ID', () => {
    it('get product with id=1', async (done) => {
      const res = await chai.request(app).get('/products/1');
      expect(res).to.be.status(success.SUCCESS_GET);
      done();
    });
    it('Not get any product with id=99', async (done) => {
      const res = await chai.request(app).get('/products/99');
      expect(res).to.be.status(errors.RESOURCE_NOT_FOUND.httpCode);
      done();
    });
  });
});
