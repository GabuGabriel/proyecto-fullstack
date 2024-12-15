// backend/tests/auth.test.js
import request from 'supertest';
import app from '../server.js';

describe('Rutas de autenticación', () => {
  it('Debería registrar un usuario', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({ username: 'testuser', email: 'test@example.com', password: '123456' });
    expect(res.statusCode).toBe(201);
  });

  it('Debería iniciar sesión correctamente', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'test@example.com', password: '123456' });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
  });
});
