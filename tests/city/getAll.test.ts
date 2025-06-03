import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("GET /city", () => {
  test("should return 200 when query params are missing", async () => {
    const createRes = await testServer
      .post("/city")
      .send({ id: 1, name: "Natal" });
    expect(createRes.statusCode).toBe(StatusCodes.CREATED);

    const response = await testServer.get("/city");
    expect(Number(response.header["x-total-count"])).toBeGreaterThan(0);
    expect(response.statusCode).toBe(StatusCodes.OK);
    expect(response.body.length).toBeGreaterThan(0);
  });

  test("should return 400 when page is under 0", async () => {
    const response = await testServer.get("/city?page=-1");
    expect(response.statusCode).toBe(StatusCodes.BAD_REQUEST);
  });

  test("should return 400 when limit is under 0", async () => {
    const response = await testServer.get("/city?limit=-1");
    expect(response.statusCode).toBe(StatusCodes.BAD_REQUEST);
  });
});
