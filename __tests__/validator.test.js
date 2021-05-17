'use strict';

const server = require('../src/server');

const supertest = require('supertest');

const request = supertest(server.app);


describe('Validator Test', ()=>{
  it('There is no name', async ()=>{
    const response = await request.get('/person');
    expect(response.status).toBe(500);
  });
  
  it('There is a name', async ()=>{
    const response = await request.get('/person?name=Shady');
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Shady');
  });
});