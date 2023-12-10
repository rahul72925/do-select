import request from "supertest";

// const request = require("supertest");
import app from "../server.js";
describe("products api testing", () => {
  test("products success api testing", async () => {
    const response = await request(app).get("/api/products");
    expect(response.status).toBe(200); // status code
    expect(response.body.success).toBe(true);
    expect(response.body).toHaveProperty("data"); // test variable availability
    expect(Array.isArray(response.body.data)).toBe(true); // test is data array or not

    // test for each product to be send required key
    response.body.data.forEach((eachProduct) => {
      expect(eachProduct).toHaveProperty("id");
      expect(eachProduct).toHaveProperty("title");
      expect(eachProduct).toHaveProperty("price");
      expect(eachProduct).toHaveProperty("description");
      expect(eachProduct).toHaveProperty("category");
      expect(eachProduct).toHaveProperty("image");
      expect(eachProduct).toHaveProperty("rating");
      expect(eachProduct).toHaveProperty("rating");
    });
  });
  describe("single product testing", () => {
    test("single product success", async () => {
      const response = await request(app).get(`/products/${1}`);
      expect(response.statusCode).toBe(200);
      expect(response.body.success).toBe(true);
    });

    test("single product is not available", async () => {
      const response = await request(app).get(`/products/${999}`);
      console.log("response", response.body);
      expect(response.statusCode).toBe(404);
      expect(response.body.error).toBe("Product not found");
    });
  });
});
