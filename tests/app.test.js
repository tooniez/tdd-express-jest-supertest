const request = require('supertest');
const express = require('express');
const app = require('../app');
const createError = require('http-errors');

describe('main app and 404 error', () => {
	it('should return 404 for non-existent routes', async () => {
		const response = await request(app).get('/non-existent-route');
		expect(response.status).toBe(404);
	});
	it('root should be activd', async () => {
		const mockError = createError(500);
		const response = await request(app).get('/');
		expect(response.status).toBe(200);
		//   catch((err) => err.response);
		//   .console.log(err.message);

		expect(response.text).toContain('Evolve');
		// expect(err.message).toBe(mockError.message);
		// expect(res.locals.error).toEqual({});
	});
});
