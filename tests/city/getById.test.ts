import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("GET /city/:id", () => {
  test("should return 200 when given id is valid", async () => {
    const createRes = await testServer
      .post("/city")
      .send({ id: 1, name: "Natal" });
    expect(createRes.statusCode).toBe(StatusCodes.CREATED);

    // must be changed to id in future
    const response = await testServer.get(`/city/${createRes.body.id}`);
    expect(response.statusCode).toBe(StatusCodes.OK);
    expect(response.body).toHaveProperty("name");
  });

  // test("should return 404 when given id is invalid", async () => {
  //   // 999 is only a placeholder while theres no database
  //   const response = await testServer.get("/city/999");
  //   expect(response.statusCode).toBe(StatusCodes.NOT_FOUND);
  // });
});
