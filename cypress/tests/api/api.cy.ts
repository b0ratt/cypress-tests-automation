describe("Petstore swagger Test", () => {
  //https://petstore.swagger.io/

  const apiPath = "https://petstore.swagger.io/v2";

  it("GET 200 /user/{username}", () => {
    cy.request({
      method: "GET",
      url: `${apiPath}/user/test`,
    }).then((req) => {
      expect(req.status).to.eq(200);
    });
  });

  it("GET 404 /user/{username}", () => {
    cy.request({
      method: "GET",
      url: `${apiPath}/user/test7382372873`,
      failOnStatusCode: false,
    }).then((req) => {
      expect(req.status).to.eq(404);
    });
  });
});
