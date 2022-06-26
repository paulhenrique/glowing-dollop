describe("equality", () => {
  it("basic usage - toEqual", () => {
    expect(1 + 1).toEqual(2);
    expect("developer").toEqual("developer");
    expect({ name: "developer" }).toEqual({ name: "developer" });
  });

  it("basic usage - toEqual (not)", () => {
    expect(1 + 1).not.toEqual(3);
    expect("developer").not.toEqual("test");
    expect({ name: "developer" }).not.toEqual({ name: "lock" });
  });

  it("basic usage - toBe", () => {
    expect(1 + 1).toBe(2);
    expect("developer").toBe("developer");
    // expect({ name: "developer" }).toBe({ name: "developer" });
  });

  it("basic usage - toBe (not)", () => {
    expect(1 + 1).not.toBe(3);
    expect("developer").not.toBe("test");
    expect({ name: "developer" }).not.toBe({ name: "developer" });
  });
});
