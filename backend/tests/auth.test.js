import request from "supertest";
import app from "../server.js";

describe("Auth API", () => {
  it("Debería registrar un usuario", async () => {
    const res = await request(app)
      .post("/auth/register")
      .send({ username: "testuser", email: "test@test.com", password: "123456" });

    expect(res.status).toBe(201);
    expect(res.body.user).toHaveProperty("id");
    expect(res.body).toHaveProperty("token");
  });
});
