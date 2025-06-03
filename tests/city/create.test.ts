import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("POST /city", () => {
  test("should return 200 when given a valid data", async () => {
    const response = await testServer
      .post("/city")
      .send({ id: 1, name: "Natal" });
    expect(response.statusCode).toBe(StatusCodes.CREATED);
  });

  test("should return 400 when name length is under 3", async () => {
    const response = await testServer.post("/city").send({ id: 1, name: "ab" });
    expect(response.statusCode).toBe(StatusCodes.BAD_REQUEST);
  });

  test("should return 400 when body is missing", async () => {
    const response = await testServer.post("/city");
    expect(response.statusCode).toBe(StatusCodes.BAD_REQUEST);
  });
});
