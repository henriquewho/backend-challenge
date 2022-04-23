const supertest = require('supertest');
const mongoose = require('mongoose'); 
const app = require('../app');
const api = supertest(app);

describe('Test the dates route', ()=>{
    test('/dates returns status 200 with the correct content-type', async ()=>{
        await api.get('/dates').expect(200).expect('Content-Type', /application\/json/);
    })

    test('/dates returns an array of dates', async ()=>{
        const result = await api.get('/dates')
        expect(result._body.data).toBeInstanceOf(Array);
    })
})

afterAll(() => {
    mongoose.connection.close()
})