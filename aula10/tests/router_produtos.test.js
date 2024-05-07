
const supertest = require("supertest");

const app = require("../app");

const request = supertest(app);

describe("API Loja Virtual", () => {
    test("Deve retornar 201 e um JSON para POST /produtos", () => {
    const result = await request
    .post("/produtos")
    .send({nome:"banana",preco: 15.0});
    id = result.body._id;
    expect(result.status).toBe(201);
    expect(result.type).toBe("application/json");
    });
  
    test("Deve retornar 422 e um JSON para POST /produtos", () => {
        const result = await request
        .post("/produtos")
        .send({});   
        expect(result.status).toBe(422);
        expect(result.type).toBe("application/json");
        });
    });
    
    test("Deve retornar 200 e um JSON array para GET /produtos", () => {
  
    });
  
    test("Deve retornar 200 e um JSON para GET /produtos/id", () => {
  
    });
  
    test("Deve retornar 404 e um JSON para GET /produtos/id", () => {
  
    });
  
    test("Deve retornar 200 e um JSON para PUT /produtos/id", () => {
  
    });
  
    test("Deve retornar 404 e um JSON para PUT /produtos/id", () => {
  
    });
  
    test("Deve retornar 422 e um JSON para PUT /produtos/id", () => {
  
    });
  
    test("Deve retornar 204 e um JSON para DELETE /produtos/id", () => {
  
    });
  
    test("Deve retornar 404 e um JSON para DELETE /produtos/id", () => {
  
    });
});  