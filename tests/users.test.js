const request = require('supertest');
const express = require('express');
const router = require('../routes/users'); // the file containing the code you provided
const app = require('../app');

app.use(router);

describe('GET /users', () => {
	it('should render the index view and pass title', async () => {
		const response = await request(app).get('/users');
		expect(response.status).toBe(200);
		expect(response.text).toContain('respond');
	});
});

describe('GET /users/register', () => {
	it('should return response status of 200', async () => {
		const response = await request(app).get('/users/register');
		expect(response.status).toBe(200);
		// expect(response.text).toContain("user");
	});

	it('should contain title user', async () => {
		const response = await request(app).get('/users/register');
		expect(response.text).toContain('user');
	});
});
