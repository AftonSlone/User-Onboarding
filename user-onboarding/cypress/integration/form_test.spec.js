describe("Form App", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });

  const nameInput = () => cy.get('input[name="name"]');
  const emailInput = () => cy.get('input[name="email"]');
  const passwordInput = () => cy.get('input[name="password"]');
  const tosInput = () => cy.get('input[name="termsOfService"]');
  const submitBtn = () => cy.get("button");

  it("Input checks", () => {
    nameInput()
      .should("have.value", "")
      .type("Afton Slone")
      .should("have.value", "Afton Slone");
    emailInput()
      .should("have.value", "")
      .type("afton.slone@gmail.com")
      .should("have.value", "afton.slone@gmail.com");
    passwordInput()
      .should("have.value", "")
      .type("Bengals12")
      .should("have.value", "Bengals12");
    tosInput().should("not.be.checked").check().should("be.checked");
    submitBtn().should("not.be.disabled").click();
  });

  it("Form Validation", () => {
    nameInput()
      .should("have.value", "")
      .type("Afton Slone")
      .should("have.value", "Afton Slone");
    emailInput()
      .should("have.value", "")
      .type("afton.slone@gmail.com")
      .should("have.value", "afton.slone@gmail.com");
    tosInput().should("not.be.checked").check().should("be.checked");
    submitBtn().should("be.disabled");
  });
});
