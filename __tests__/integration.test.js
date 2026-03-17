const request = require("supertest");
const app = require("../index");

describe("Integration Test", () => {

test("Server responds correctly", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
});

test("Server returns correct message", async () => {
    const res = await request(app).get("/");
    expect(res.text).toBe("Hello CI/CD World!");
});

});