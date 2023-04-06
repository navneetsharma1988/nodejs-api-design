import app from '../server';
import supertest from 'supertest';

describe('GET /', () => {
    it('should send back some data to the server', async () => {
        const res = await supertest(app).get('/');

        expect(res.body.message).toBe('hello');
    })
})