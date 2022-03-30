import supertest from 'supertest';
import { server } from '../helpers';

const wrongFileFormat = [
  { user: 'johnDoe', firstName: 'John', lastName: 'Doe', amount: 600 },
];
const correctFileFormat = [
  { user: 'johnDoe', amount: 600 },
  { user: 'ezpay', amount: 3000 },
];

describe('POST /parse-json', () => {
  it('should return 400 if there is no input', async () => {
    const res = await supertest(server).post('/parse-json').send();

    expect(res.status).toBe(400);
  });

  it('should return 400 if there is input is incorrect', async () => {
    const res = await supertest(server)
      .post('/parse-json')
      .send(wrongFileFormat);

    expect(res.status).toBe(400);
  });

  it('should return the correct response', async () => {
    const res = await supertest(server)
      .post('/parse-json')
      .send(correctFileFormat);

    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({
      success: true,
      data: correctFileFormat,
    });
  });
});
