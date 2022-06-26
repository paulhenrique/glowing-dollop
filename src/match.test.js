describe("Match regular expression", () => {
  it("basic (possui letras)", () => {
    expect("developer").toMatch(/\w+/);
  });

  it("possui padrão telefone", () => {
    expect("(15)2323-3232").toMatch(/\(\d{2}\)\d{4}-\d{4}$/);
  });

  it("possui padrão celular", () => {
    expect("(15)32323-3232").toMatch(/\(\d{2}\)\d{5}-\d{4}$/);
  });
});
