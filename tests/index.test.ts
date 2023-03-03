import GeneralClass from "../src/class/general";

describe("calculatePayment", () => {
  test("calculates payment for 0 hours", () => {
    const ammount = GeneralClass.calculatePaymentPerDay(0);
    expect(ammount).toBe(0);
  });
  test("calculates payment for 8 hours", () => {
    const ammount = GeneralClass.calculatePaymentPerDay(8);
    expect(ammount).toBe(280);
  });
  test("calculates payment for 9 hours", () => {
    const ammount = GeneralClass.calculatePaymentPerDay(9);
    expect(ammount).toBe(315);
  });
});
