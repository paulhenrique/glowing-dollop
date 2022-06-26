const users = ["Paulo", "João"];

describe("Match arrays", () => {
  it("verify array elements", () => {
    expect(users).toContainEqual("Paulo");
    expect(users).toContain(users[0]);
  });
});
