const request = require('supertest');
const express = require('express');
const router = require('../routes/index'); // the file containing the code you provided
const app = require('../app');

app.use(router);

describe('GET /index', () => {
	it('should render the index view and pass title', async () => {
		const response = await request(app).get('/');
		// expect(response.status).toBe(200);
		expect(response.text).toContain('Welcome to Evolve');
	});
});
