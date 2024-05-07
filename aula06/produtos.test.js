const supertest = require('supertest');

const app = require('../app');

const request = supertest(app);

describe('Teste da API /produtos', function() {
  test('GET / deve retornar 200 com Array JSON', function() {
  });

  test('GET /1 deve retornar 200 com Objeto JSON', function() {

  });

  test('GET /100 deve retornar 404 com Objeto JSON', function() {

  });

  test('POST / deve retornar 201 com Objeto JSON', function() {

  });

  test('POST / deve retornar 422 com Objeto JSON', function() {

  });

  test('PUT /1 deve retornar 200 com Objeto JSON', function() {

  });

  test('PUT /1 deve retornar 422 com Objeto JSON', function() {

  });

  test('PUT /100 deve retornar 404 com Objeto JSON', function() {

  });

  test('DELETE /1 deve retornar 204 sem corpo', function() {

  });

  test('DELETE /100 deve retornar 404 com Objeto JSON', function() {

  });
});