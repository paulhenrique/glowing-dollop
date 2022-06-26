const users = {
  name: "Paulo",
  email: "phvcandido@gmail.com",
};

describe("Match objects", () => {
  it("basic usage", () => {
    expect(users.name).toBeDefined();
    expect(users.age).not.toBeDefined();
  });
});
