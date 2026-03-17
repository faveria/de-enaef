const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
it("should return Hello CI/CD World!", async () => {
    const res = await request(app).get("/");
    expect(res.text).toBe("Hello CI/CD World!");
});
test("Status code should be 200", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
});

test("Response should contain text", async () => {
    const res = await request(app).get("/");
    expect(res.text).toContain("Hello");
});

test("Response should be string", async () => {
    const res = await request(app).get("/");
    expect(typeof res.text).toBe("string");
});

test("Endpoint should exist", async () => {
    const res = await request(app).get("/");
    expect(res.status).not.toBe(404);
});
});