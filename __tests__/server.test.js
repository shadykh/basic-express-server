'use strict';

const server = require('../src/server');

const supertest = require('supertest');

const request = supertest(server.app);

describe('server', ()=>{
  it('should get a message with the name', async ()=>{
    const response = await request.get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('I am on fire🔥');
  });

  it('should get 404 status', async ()=>{
    const response = await request.get('/whereami');
    expect(response.status).toBe(404);
  });

  it('should get an error', async ()=>{
    const response = await request.get('/iwannawrong');
    expect(response.status).toBe(500);
  });
});