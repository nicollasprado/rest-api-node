import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("DELETE /city/:id", () => {
  test("should return 200 when given id is valid", async () => {
    const createRes = await testServer
      .post("/city")
      .send({ id: 1, name: "Natal" });
    expect(createRes.statusCode).toBe(StatusCodes.CREATED);

    const response = await testServer.delete(`/city/${createRes.body.id}`);
    expect(response.statusCode).toBe(StatusCodes.OK);
  });

  test("should return 404 when id is missing", async () => {
    const response = await testServer.delete("/city");
    expect(response.statusCode).toBe(StatusCodes.NOT_FOUND);
  });
});
