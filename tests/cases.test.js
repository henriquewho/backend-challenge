const supertest = require('supertest');
const mongoose = require('mongoose'); 
const app = require('../app');
const api = supertest(app);

describe("Test the cases counter route", ()=>{
    test('/cases/:date/counter returns status 200 with the correct content-type, with a valid date parameter', async ()=>{
        jest.setTimeout(10000); 
        await api.get('/cases/2021-05-25/counter').expect(200).expect('Content-Type', /application\/json/);
    })

    test('/cases/:date/counter returns status 400 with an invalid date parameter', async ()=>{
        jest.setTimeout(10000); 
        await api.get('/cases/2021-x5-25/counter').expect(400).expect('Content-Type', /application\/json/);
    })

    test('/cases/:date/counter returns array of objects', async ()=>{
        const result = await api.get('/cases/2020-05-11/counter')
        expect(result._body.data).toBeInstanceOf(Array);
    })

    test('/cases/:date/counter returns message if there is no data for that day', async ()=>{
        const result = await api.get('/cases/2000-01-01/counter')
        expect(result._body.msg).toBe("There was no data for the date 2000-01-01");
    })
})

describe("Test the cases cumulative route", ()=>{
    test('/cases/:date/cumulative returns status 200 with the correct content-type, with a valid date parameter', async ()=>{
        jest.setTimeout(10000); 
        await api.get('/cases/2021-05-25/cumulative').expect(200).expect('Content-Type', /application\/json/);
    })

    test('/cases/:date/cumulative returns status 400 with an invalid date parameter', async ()=>{
        jest.setTimeout(10000); 
        await api.get('/cases/2021-x5-25/cumulative').expect(400).expect('Content-Type', /application\/json/);
    })

    test('/cases/:date/cumulative returns array of objects', async ()=>{
        const result = await api.get('/cases/2020-05-11/cumulative')
        expect(result._body.data).toBeInstanceOf(Array);
    })

    test('/cases/:date/cumulative returns message if there is no data for that day', async ()=>{
        const result = await api.get('/cases/2000-01-01/cumulative')
        expect(result._body.msg).toBe("There was no data for the date 2000-01-01");
    })
})

afterAll(() => {
    mongoose.connection.close()
})