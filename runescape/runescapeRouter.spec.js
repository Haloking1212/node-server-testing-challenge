const server = require("../server");
const request = require("supertest");


describe('server.js', () => {

    test('should be the testing environment', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

    describe('GET /', () => {

        it('should return 200 OK', async () => {
            const res = await request(server).get('/');
            expect(res.status).toBe(200);
        });

        it('should be json', async () => {
            const res = await request(server).get('/');
            expect(res.type).toBe('application/json');
        })

        it('should return the right object', async () => {
            const res = await request(server).get('/');
            expect(res.body).toEqual({ api: 'up' });
        })
        
    });

    describe('POST /user', () => {
        it('should return 201 created', async () => {
            const res = await request(server).post('/user');
            expect(res.status).toBe(201)
        })
    })

    describe('delete /1', () => {
        it('should return 200 ok', async () => {
            const res = await request(server).delete('/1');
            expect(res.body).toEqual({ message: "The Post has been deleted" })
        })
    })
});